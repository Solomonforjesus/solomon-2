import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const script = await readFile(new URL('../stickers/happy-dance.js', import.meta.url), 'utf8');
const still = '/stickers/files/solomon-happy-dance-preview.png';
const animation = '/stickers/files/Solomon_Happy_Dance.gif';

function setup(reduced = false) {
  const preview = { src: still, dataset: { animation }, getAttribute: () => still };
  const toggle = { hidden: true, attributes: {}, setAttribute(k, v) { this.attributes[k] = v; },
    addEventListener(type, fn) { this[type] = fn; } };
  const preference = { matches: reduced, addEventListener(type, fn) { this[type] = fn; } };
  vm.runInNewContext(script, {
    document: { getElementById: id => id === 'dance-preview' ? preview : toggle },
    window: { matchMedia: () => preference }
  });
  return { preview, toggle, preference };
}

test('preview plays, pauses, and replays with an accessible control', () => {
  const { preview, toggle } = setup();
  assert.equal(preview.src, animation);
  assert.equal(toggle.hidden, false);
  assert.equal(toggle.textContent, 'Pause dance preview');
  assert.equal(toggle.attributes['aria-pressed'], 'true');
  toggle.click();
  assert.equal(preview.src, still);
  assert.equal(toggle.textContent, 'Play dance preview');
  assert.equal(toggle.attributes['aria-pressed'], 'false');
  toggle.click();
  assert.equal(preview.src, animation);
});

test('reduced motion starts still and can be played deliberately', () => {
  const { preview, toggle, preference } = setup(true);
  assert.equal(preview.src, still);
  assert.equal(toggle.attributes['aria-pressed'], 'false');
  toggle.click();
  assert.equal(preview.src, animation);
  preference.change({ matches: true });
  assert.equal(preview.src, still);
  preference.change({ matches: false });
  assert.equal(preview.src, still, 'a changed preference must not restart a paused preview');
});

test('both downloads work without JavaScript and GIF adds no tracking', async () => {
  const html = await readFile(new URL('../stickers/index.html', import.meta.url), 'utf8');
  assert.match(html, /href="\/stickers\/solomon-stickers.zip" download="Solomon-Stickers.zip"/);
  assert.match(html, /href="\/stickers\/files\/Solomon_Happy_Dance.gif" download="Solomon_Happy_Dance.gif"/);
  assert.match(html, /src="\/stickers\/files\/solomon-happy-dance-preview.png"/);
  assert.match(html, /Some apps may show it as a still image/);
  assert.doesNotMatch(script, /\b(?:fetch|track|sendBeacon)\s*\(/);
});

test('published asset is the exact approved animated GIF', async () => {
  const gif = await readFile(new URL('../stickers/files/Solomon_Happy_Dance.gif', import.meta.url));
  assert.equal(gif.subarray(0, 6).toString(), 'GIF89a');
  assert.equal(createHash('sha256').update(gif).digest('hex'), 'b96c548fef63fdf5f8969220fde8a95517bf204c34076b8d663fc1533b9f40f2');
});
