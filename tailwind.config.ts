import type { Config } from 'tailwindcss';

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        line: 'var(--border)',
        'line-strong': 'var(--border-strong)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-mute': 'var(--text-mute)',
        red: 'var(--red)',
        'red-soft': 'var(--red-soft)',
        'red-deep': 'var(--red-deep)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        card: '14px',
        lg: '24px',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
} satisfies Config;
