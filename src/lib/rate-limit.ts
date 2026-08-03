/**
 * Minimal in-memory rate limiter (sliding window). Suitable for a small
 * lead form: it deters rapid automated submissions without external
 * infrastructure. Note that serverless deployments may run multiple
 * instances, so this is best-effort protection, layered on top of the
 * honeypot and server-side validation.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // Opportunistic cleanup so the map never grows unbounded.
  if (hits.size > 1000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) {
        hits.delete(k);
      }
    }
  }

  return false;
}
