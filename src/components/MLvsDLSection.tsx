import {
  Settings,
  BrainCircuit,
  BarChart3,
  Database,
  Wrench,
  Eye,
  Clock,
  Workflow,
  TrendingUp,
  Boxes,
} from 'lucide-react';
import { SectionHeader } from './TimelineSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';

interface ComparisonRow {
  aspect: string;
  ml: string;
  dl: string;
  iconML: React.ReactNode;
  iconDL: React.ReactNode;
}

const comparisons: ComparisonRow[] = [
  {
    aspect: 'Feature Engineering',
    ml: 'Manual feature extraction required',
    dl: 'Automatic feature learning from raw data',
    iconML: <Wrench className="h-4 w-4" />,
    iconDL: <BrainCircuit className="h-4 w-4" />,
  },
  {
    aspect: 'Data Requirements',
    ml: 'Works well with smaller datasets',
    dl: 'Requires large volumes of data',
    iconML: <Database className="h-4 w-4" />,
    iconDL: <Database className="h-4 w-4" />,
  },
  {
    aspect: 'Interpretability',
    ml: 'More transparent & explainable',
    dl: 'Often a "black box"',
    iconML: <Eye className="h-4 w-4" />,
    iconDL: <Boxes className="h-4 w-4" />,
  },
  {
    aspect: 'Training Time',
    ml: 'Faster training, less compute',
    dl: 'Longer training, GPU-intensive',
    iconML: <Clock className="h-4 w-4" />,
    iconDL: <Clock className="h-4 w-4" />,
  },
  {
    aspect: 'Model Complexity',
    ml: 'Shallow models (SVM, RF, LR)',
    dl: 'Deep architectures (CNN, RNN, Transformer)',
    iconML: <Workflow className="h-4 w-4" />,
    iconDL: <Workflow className="h-4 w-4" />,
  },
  {
    aspect: 'Scalability',
    ml: 'Performance plateaus with more data',
    dl: 'Performance scales with data & compute',
    iconML: <TrendingUp className="h-4 w-4" />,
    iconDL: <TrendingUp className="h-4 w-4" />,
  },
];

export function MLvsDLSection() {
  const { isDark } = useTheme();
  const header = useScrollReveal();
  const diagram = useScrollReveal({ threshold: 0.2 });
  const table = useScrollReveal({ threshold: 0.1 });

  const tableGlow: React.CSSProperties = {
    boxShadow: isDark
      ? [
          'inset 0 0 45px -15px rgba(99,102,241,0.07)',
          'inset 0 1px 0 0 rgba(99,102,241,0.06)',
          '0 0 0 1px rgba(99,102,241,0.04)',
        ].join(', ')
      : [
          'inset 0 0 35px -12px rgba(99,102,241,0.05)',
          'inset 0 1px 0 0 rgba(99,102,241,0.04)',
          '0 1px 4px rgba(0,0,0,0.03)',
          '0 0 0 1px rgba(99,102,241,0.03)',
        ].join(', '),
  };

  return (
    <section className="px-4 py-20 sm:px-8" id="ml-vs-dl">
      <div className="mx-auto max-w-5xl">
        <div ref={header.ref} className={`reveal ${header.isVisible ? 'visible' : ''}`}>
          <SectionHeader
            badge="Comparison"
            title="Machine Learning vs Deep Learning"
            subtitle="While deep learning is a subset of machine learning, key differences set them apart in practice."
          />
        </div>

        {/* Relationship diagram */}
        <div
          ref={diagram.ref}
          className={`reveal-scale ${diagram.isVisible ? 'visible' : ''} mt-12 mb-12 flex justify-center`}
        >
          <div className="relative">
            <div
              className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-dashed sm:h-72 sm:w-72"
              style={{
                borderColor: isDark ? 'rgba(6,182,212,0.3)' : 'rgba(8,145,178,0.25)',
                backgroundColor: isDark ? 'rgba(6,182,212,0.05)' : 'rgba(6,182,212,0.04)',
              }}
            >
              <span
                className="absolute top-4 text-xs font-semibold uppercase tracking-wider sm:top-6"
                style={{ color: isDark ? '#22d3ee' : '#0891b2' }}
              >
                Artificial Intelligence
              </span>
              <div
                className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed sm:h-52 sm:w-52"
                style={{
                  borderColor: isDark ? 'rgba(99,102,241,0.3)' : 'rgba(79,70,229,0.25)',
                  backgroundColor: isDark ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.04)',
                }}
              >
                <span
                  className="absolute top-16 text-xs font-semibold uppercase tracking-wider sm:top-20"
                  style={{ color: isDark ? '#818cf8' : '#4f46e5' }}
                >
                  Machine Learning
                </span>
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border-2 sm:h-32 sm:w-32"
                  style={{
                    borderColor: isDark ? 'rgba(129,140,248,0.5)' : 'rgba(79,70,229,0.3)',
                    backgroundColor: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)',
                  }}
                >
                  <div className="text-center">
                    <BrainCircuit className="mx-auto mb-1 h-6 w-6" style={{ color: isDark ? '#a5b4fc' : '#4f46e5' }} />
                    <span className="text-xs font-bold" style={{ color: isDark ? '#c7d2fe' : '#4338ca' }}>Deep Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div
          ref={table.ref}
          className={`reveal ${table.isVisible ? 'visible' : ''} relative overflow-hidden rounded-3xl border backdrop-blur-sm`}
          style={{
            ...tableGlow,
            backgroundColor: 'var(--th-card-bg)',
            borderColor: isDark ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.06)',
            transitionDelay: '150ms',
          }}
        >
          {/* Subtle inner radial glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background: isDark
                ? 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.05) 0%, transparent 45%)'
                : 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.03) 0%, transparent 45%)',
            }}
          />

          {/* Subtle top edge glow */}
          <div
            className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(99,102,241,${isDark ? 0.12 : 0.08}), transparent)`,
            }}
          />

          {/* Header */}
          <div
            className="relative z-10 grid grid-cols-3"
            style={{
              borderBottom: '1px solid var(--th-border)',
              backgroundColor: 'var(--th-card-header-bg)',
            }}
          >
            <div className="flex items-center gap-2 px-4 py-4 sm:px-6">
              <BarChart3 className="h-4 w-4" style={{ color: 'var(--th-text-muted)' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--th-text-tertiary)' }}>
                Aspect
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 sm:px-6" style={{ borderLeft: '1px solid var(--th-border)' }}>
              <Settings className="h-4 w-4" style={{ color: isDark ? '#22d3ee' : '#0891b2' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: isDark ? '#22d3ee' : '#0891b2' }}>
                Machine Learning
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 sm:px-6" style={{ borderLeft: '1px solid var(--th-border)' }}>
              <BrainCircuit className="h-4 w-4" style={{ color: isDark ? '#818cf8' : '#4f46e5' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: isDark ? '#818cf8' : '#4f46e5' }}>
                Deep Learning
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.aspect}
              className="th-table-row relative z-10 grid grid-cols-3 transition-colors"
              style={{
                borderBottom: i < comparisons.length - 1 ? '1px solid var(--th-border)' : 'none',
              }}
            >
              <div className="flex items-start gap-2 px-4 py-4 sm:px-6">
                <span className="text-sm font-semibold" style={{ color: 'var(--th-text-primary)' }}>{row.aspect}</span>
              </div>
              <div className="flex items-start gap-2 px-4 py-4 sm:px-6" style={{ borderLeft: '1px solid var(--th-border)' }}>
                <span className="mt-0.5 shrink-0" style={{ color: isDark ? '#22d3ee' : '#0891b2' }}>{row.iconML}</span>
                <span className="text-sm" style={{ color: 'var(--th-text-tertiary)' }}>{row.ml}</span>
              </div>
              <div className="flex items-start gap-2 px-4 py-4 sm:px-6" style={{ borderLeft: '1px solid var(--th-border)' }}>
                <span className="mt-0.5 shrink-0" style={{ color: isDark ? '#818cf8' : '#4f46e5' }}>{row.iconDL}</span>
                <span className="text-sm" style={{ color: 'var(--th-text-tertiary)' }}>{row.dl}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
