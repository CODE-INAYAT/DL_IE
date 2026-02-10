import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { MLvsDLSection } from './components/MLvsDLSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { ArchitectureSection } from './components/ArchitectureSection';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--th-bg)', color: 'var(--th-text-secondary)', transition: 'background-color 0.5s, color 0.5s' }}>
        <ThemeToggle />

        <main>
          <HeroSection />

          {/* Divider */}
          <div className="mx-auto max-w-5xl px-8">
            <div className="th-divider h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
          </div>

          <TimelineSection />

          <div className="mx-auto max-w-5xl px-8">
            <div className="th-divider h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>

          <MLvsDLSection />

          <div className="mx-auto max-w-5xl px-8">
            <div className="th-divider h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          </div>

          <ApplicationsSection />

          <div className="mx-auto max-w-5xl px-8">
            <div className="th-divider h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </div>

          <ArchitectureSection />

          {/* Bottom spacing */}
          <div className="h-20" />
        </main>
      </div>
    </ThemeProvider>
  );
}
