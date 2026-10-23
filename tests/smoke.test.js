import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Smoke test del baseline: los puntos de extension existen.
test('puntos de extension presentes', () => {
  for (const f of ['components/BackToTop.js', 'components/Stats.js', 'components/Waitlist.js']) {
    assert.ok(readFileSync(f, 'utf8').length > 0, f);
  }
});
