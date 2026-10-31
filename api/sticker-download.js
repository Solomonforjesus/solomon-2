import { track } from '@vercel/analytics/server';

// Production's generated deployment hostname is SSO-protected. Send events
// through the site's public analytics endpoint, without changing protection.
if (process.env.VERCEL_ENV === 'production') {
  process.env.VERCEL_WEB_ANALYTICS_ENDPOINT = 'https://www.solomonforjesus.com/_vercel/insights/event';
}

// Count requests on the server, including visitors without browser analytics.
// This is a download request, not proof the recipient saved or opened the ZIP.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'private, no-store, max-age=0');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end();
  }

  const purpose = `${req.headers['purpose'] || ''} ${req.headers['sec-purpose'] || ''}`;
  if (req.method === 'GET' && !/prefetch/i.test(purpose)) {
    const verification = new URL(req.url, 'https://www.solomonforjesus.com').searchParams.get('verify') === '1';
    try {
      await track(verification ? 'Sticker Download Verification' : 'Sticker Download Request',
        { pack: 'solomon-15', source: 'server' }, { request: req });
    } catch (error) {
      // A reporting outage must never prevent access to the free pack.
      console.error('Sticker download reporting failed', error);
    }
  }

  res.setHeader('Location', '/stickers/files/solomon-stickers.zip');
  return res.status(302).end();
}
