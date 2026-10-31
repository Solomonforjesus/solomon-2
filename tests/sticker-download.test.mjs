import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import handler from '../api/sticker-download.js';

function response() {
  return { headers: {}, setHeader(k, v) { this.headers[k] = v; },
    status(code) { this.statusCode = code; return this; }, end() { this.ended = true; return this; } };
}

test('server counts a download without executing any browser JavaScript', async t => {
  process.env.VERCEL_WEB_ANALYTICS_ENDPOINT = 'https://analytics.example.test/event';
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    calls.push({ url, options, body: JSON.parse(options.body) });
    return new Response('ok');
  });
  const res = response();
  await handler({ method: 'GET', url: '/stickers/solomon-stickers.zip', headers: { 'user-agent': 'test-browser' } }, res);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].body.en, 'Sticker Download Request');
  assert.equal(calls[0].options.headers['x-va-server'], '1');
  assert.equal(res.statusCode, 302);
  assert.equal(res.headers.Location, '/stickers/files/solomon-stickers.zip');
  assert.match(res.headers['Cache-Control'], /no-store/);
});

test('HEAD, prefetch, and unsupported methods do not inflate the count', async t => {
  t.mock.method(globalThis, 'fetch', async () => { assert.fail('must not track'); });
  for (const request of [
    { method: 'HEAD', headers: {} },
    { method: 'GET', headers: { 'sec-purpose': 'prefetch' } },
    { method: 'POST', headers: {} }
  ]) {
    const res = response();
    await handler({ url: '/stickers/solomon-stickers.zip', ...request }, res);
    assert.equal(res.statusCode, request.method === 'POST' ? 405 : 302);
  }
});

test('verification requests are kept out of visitor totals', async t => {
  let event;
  t.mock.method(globalThis, 'fetch', async (_, options) => {
    event = JSON.parse(options.body).en; return new Response('ok');
  });
  await handler({ method: 'GET', url: '/api/sticker-download?verify=1', headers: {} }, response());
  assert.equal(event, 'Sticker Download Verification');
});

test('analytics outage still delivers the download redirect', async t => {
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('offline'); });
  t.mock.method(console, 'error', () => {});
  const res = response();
  await handler({ method: 'GET', url: '/api/sticker-download', headers: {} }, res);
  assert.equal(res.statusCode, 302);
  assert.equal(res.ended, true);
});

test('existing download link is routed through server and target remains a ZIP', async () => {
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url)));
  const html = await readFile(new URL('../stickers/index.html', import.meta.url), 'utf8');
  assert.match(html, /href="\/stickers\/solomon-stickers.zip"/);
  assert.doesNotMatch(html, /Sticker Download Click/);
  assert.deepEqual(config.rewrites[0], { source: '/stickers/solomon-stickers.zip', destination: '/api/sticker-download' });
  const zip = await readFile(new URL('../stickers/files/solomon-stickers.zip', import.meta.url));
  assert.equal(zip.subarray(0, 2).toString(), 'PK');
});
