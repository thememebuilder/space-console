import { beforeEach, describe, expect, it } from 'vitest';
import { initAnalytics } from './analytics';

// run tests in a simulated DOM (vitest provides jsdom)

describe('analytics', () => {
  beforeEach(() => {
    // cleanup any script tags added to head
    document.head.querySelectorAll('script').forEach((s) => s.remove());
  });

  it('does nothing when no provider is configured', () => {
    initAnalytics();
    const scripts = document.head.querySelectorAll('script');
    expect(scripts.length).toBe(0);
  });

  it('injects plausible script when provider plausible is configured', () => {
    initAnalytics({ provider: 'plausible', domain: 'example.com' });
    const script = document.head.querySelector('script[src*="plausible.io"]');
    expect(script).toBeTruthy();
    expect(script?.getAttribute('data-domain')).toBe('example.com');
  });

  it('injects vercel script when provider vercel is configured', () => {
    initAnalytics({ provider: 'vercel', vercelScriptSrc: 'https://vercel.com/script.js' });
    const script = document.head.querySelector('script[src="https://vercel.com/script.js"]');
    expect(script).toBeTruthy();
  });
});
