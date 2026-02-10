import { BrainCircuit, Layers, GitBranch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';

export function HeroSection() {
  const { isDark } = useTheme();
  const heading = useScrollReveal({ threshold: 0.1 });
  const subtitle = useScrollReveal({ threshold: 0.1 });
  const cards = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-8">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-10 left-1/4 h-72 w-72 rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.06)' }}
        />
        <div
          className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: isDark ? 'rgba(6,182,212,0.1)' : 'rgba(6,182,212,0.06)' }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <h1
          ref={heading.ref}
          className={`reveal ${heading.isVisible ? 'visible' : ''} mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl`}
          style={{ color: 'var(--th-text-primary)' }}
        >
          The World of{' '}
          <span className="hero-gradient-text bg-gradient-to-r from-brand-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Deep Learning
          </span>
        </h1>

        <p
          ref={subtitle.ref}
          className={`reveal ${subtitle.isVisible ? 'visible' : ''} mx-auto mb-10 max-w-2xl text-lg leading-relaxed`}
          style={{ color: 'var(--th-text-tertiary)', transitionDelay: '120ms' }}
        >
          Explore the evolution, architecture, and real-world impact of deep learning —
          from the first perceptron to modern neural networks powering today's AI revolution.
        </p>

        {/* Quick stat cards */}
        <div
          ref={cards.ref}
          className={`reveal ${cards.isVisible ? 'visible' : ''} mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3`}
          style={{ transitionDelay: '250ms' }}
        >
          {[
            {
              icon: <Layers className="h-5 w-5 text-brand-400" />,
              label: 'Timeline Events',
              value: '8 Milestones',
            },
            {
              icon: <GitBranch className="h-5 w-5 text-cyan-400" />,
              label: 'Key Comparisons',
              value: 'ML vs DL',
            },
            {
              icon: <BrainCircuit className="h-5 w-5 text-emerald-400" />,
              label: 'Architectures',
              value: 'Perceptron & MLP',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="th-glass group rounded-2xl border px-5 py-4 transition-all duration-300"
            >
              <div className="mb-2 flex items-center justify-center gap-2">
                {stat.icon}
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--th-text-muted)' }}>
                  {stat.label}
                </span>
              </div>
              <p className="text-lg font-bold" style={{ color: 'var(--th-text-primary)' }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
