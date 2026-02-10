import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-110 active:scale-95 cursor-pointer"
      style={{
        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(148,163,184,0.3)',
        backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.85)',
        color: isDark ? '#e2e8f0' : '#334155',
        boxShadow: isDark
          ? '0 4px 24px rgba(0,0,0,0.3)'
          : '0 4px 24px rgba(100,116,139,0.15)',
      }}
    >
      <div className="relative h-5 w-5">
        <Sun
          className="absolute inset-0 h-5 w-5 transition-all duration-500"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark ? 'rotate(-90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
          }}
        />
        <Moon
          className="absolute inset-0 h-5 w-5 transition-all duration-500"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0.5)',
          }}
        />
      </div>
    </button>
  );
}
