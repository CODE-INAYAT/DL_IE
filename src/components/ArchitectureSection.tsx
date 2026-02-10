import { SectionHeader } from './TimelineSection';
import {
  ArrowRight,
  CircleDot,
  Sigma,
  Layers,
  Network,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';

export function ArchitectureSection() {
  const header = useScrollReveal();
  const leftCard = useScrollReveal({ threshold: 0.1 });
  const rightCard = useScrollReveal({ threshold: 0.1 });
  const diff1 = useScrollReveal({ threshold: 0.2 });
  const diff2 = useScrollReveal({ threshold: 0.2 });
  const diff3 = useScrollReveal({ threshold: 0.2 });
  const { isDark } = useTheme();

  const brandRgb = '99,102,241';
  const cyanRgb = '6,182,212';
  const emeraldRgb = '16,185,129';

  const perceptronGlow: React.CSSProperties = {
    boxShadow: isDark
      ? [
          `inset 0 0 45px -12px rgba(${brandRgb}, 0.1)`,
          `inset 0 1px 0 0 rgba(${brandRgb}, 0.08)`,
          `0 0 0 1px rgba(${brandRgb}, 0.05)`,
        ].join(', ')
      : [
          `inset 0 0 35px -10px rgba(${brandRgb}, 0.07)`,
          `inset 0 1px 0 0 rgba(${brandRgb}, 0.05)`,
          `0 1px 4px rgba(0,0,0,0.03)`,
          `0 0 0 1px rgba(${brandRgb}, 0.04)`,
        ].join(', '),
  };

  const mlpGlow: React.CSSProperties = {
    boxShadow: isDark
      ? [
          `inset 0 0 45px -12px rgba(${cyanRgb}, 0.1)`,
          `inset 0 1px 0 0 rgba(${cyanRgb}, 0.08)`,
          `0 0 0 1px rgba(${cyanRgb}, 0.05)`,
        ].join(', ')
      : [
          `inset 0 0 35px -10px rgba(${cyanRgb}, 0.07)`,
          `inset 0 1px 0 0 rgba(${cyanRgb}, 0.05)`,
          `0 1px 4px rgba(0,0,0,0.03)`,
          `0 0 0 1px rgba(${cyanRgb}, 0.04)`,
        ].join(', '),
  };

  const diffGlows = [brandRgb, cyanRgb, emeraldRgb];

  return (
    <section className="px-4 py-20 sm:px-8" id="architecture">
      <div className="mx-auto max-w-6xl">
        <div ref={header.ref} className={`reveal ${header.isVisible ? 'visible' : ''}`}>
          <SectionHeader
            badge="Architecture"
            title="Perceptron & Multi-Layer Perceptron"
            subtitle="Understanding the building blocks of neural networks — from single neurons to deep architectures."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Perceptron Card */}
          <div
            ref={leftCard.ref}
            className={`reveal-left ${leftCard.isVisible ? 'visible' : ''} relative overflow-hidden rounded-3xl border backdrop-blur-sm`}
            style={{
              ...perceptronGlow,
              backgroundColor: 'var(--th-card-bg)',
              borderColor: isDark ? `rgba(${brandRgb}, 0.1)` : `rgba(${brandRgb}, 0.07)`,
              transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s, opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Subtle inner radial glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: isDark
                  ? `radial-gradient(ellipse at 30% 10%, rgba(${brandRgb}, 0.07) 0%, transparent 50%)`
                  : `radial-gradient(ellipse at 30% 10%, rgba(${brandRgb}, 0.04) 0%, transparent 50%)`,
              }}
            />
            {/* Top edge glow */}
            <div
              className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(${brandRgb}, ${isDark ? 0.15 : 0.1}), transparent)`,
              }}
            />

            <div
              className="relative z-10 border-b px-6 py-4"
              style={{
                borderColor: 'var(--th-border)',
                backgroundColor: isDark ? 'rgba(99,102,241,0.03)' : 'rgba(99,102,241,0.02)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)',
                    color: isDark ? '#818cf8' : '#4f46e5',
                  }}
                >
                  <CircleDot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--th-text-primary)' }}>Single Perceptron</h3>
                  <p className="text-xs" style={{ color: 'var(--th-text-tertiary)' }}>The simplest neural network unit</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 p-6">
              <div className="mb-6 flex items-center justify-center">
                <PerceptronDiagram />
              </div>

              <div className="space-y-3">
                <InfoRow label="Inputs" color={isDark ? '#22d3ee' : '#0891b2'}>
                  x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub> — feature values
                </InfoRow>
                <InfoRow label="Weights" color={isDark ? '#818cf8' : '#4f46e5'}>
                  w<sub>1</sub>, w<sub>2</sub>, ..., w<sub>n</sub> — learned parameters
                </InfoRow>
                <InfoRow label="Bias" color={isDark ? '#fbbf24' : '#d97706'}>
                  b — threshold adjustment term
                </InfoRow>
                <InfoRow label="Activation" color={isDark ? '#34d399' : '#059669'}>
                  f(&Sigma;w<sub>i</sub>x<sub>i</sub> + b) &rarr; output (step / sigmoid)
                </InfoRow>
              </div>

              <div className="th-formula mt-5 rounded-2xl border p-4">
                <p className="text-center text-sm" style={{ color: 'var(--th-text-tertiary)' }}>
                  <span className="font-mono" style={{ color: isDark ? '#a5b4fc' : '#4f46e5' }}>
                    y = f(w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> + ... + w<sub>n</sub>x<sub>n</sub> + b)
                  </span>
                </p>
                <p className="mt-2 text-center text-xs" style={{ color: 'var(--th-text-muted)' }}>
                  Can only learn linearly separable patterns (AND, OR — not XOR)
                </p>
              </div>
            </div>
          </div>

          {/* MLP Card */}
          <div
            ref={rightCard.ref}
            className={`reveal-right ${rightCard.isVisible ? 'visible' : ''} relative overflow-hidden rounded-3xl border backdrop-blur-sm`}
            style={{
              ...mlpGlow,
              backgroundColor: 'var(--th-card-bg)',
              borderColor: isDark ? `rgba(${cyanRgb}, 0.1)` : `rgba(${cyanRgb}, 0.07)`,
              transitionDelay: '100ms',
              transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s, opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Subtle inner radial glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: isDark
                  ? `radial-gradient(ellipse at 30% 10%, rgba(${cyanRgb}, 0.07) 0%, transparent 50%)`
                  : `radial-gradient(ellipse at 30% 10%, rgba(${cyanRgb}, 0.04) 0%, transparent 50%)`,
              }}
            />
            {/* Top edge glow */}
            <div
              className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(${cyanRgb}, ${isDark ? 0.15 : 0.1}), transparent)`,
              }}
            />

            <div
              className="relative z-10 border-b px-6 py-4"
              style={{
                borderColor: 'var(--th-border)',
                backgroundColor: isDark ? 'rgba(6,182,212,0.03)' : 'rgba(6,182,212,0.02)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: isDark ? 'rgba(6,182,212,0.1)' : 'rgba(6,182,212,0.08)',
                    color: isDark ? '#22d3ee' : '#0891b2',
                  }}
                >
                  <Network className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--th-text-primary)' }}>Multi-Layer Perceptron</h3>
                  <p className="text-xs" style={{ color: 'var(--th-text-tertiary)' }}>Deep feedforward neural network</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 p-6">
              <div className="mb-6 flex items-center justify-center">
                <MLPDiagram />
              </div>

              <div className="space-y-3">
                <InfoRow label="Input Layer" color={isDark ? '#22d3ee' : '#0891b2'}>
                  Receives raw features from the dataset
                </InfoRow>
                <InfoRow label="Hidden Layers" color={isDark ? '#818cf8' : '#4f46e5'}>
                  One or more layers learning abstract representations
                </InfoRow>
                <InfoRow label="Output Layer" color={isDark ? '#34d399' : '#059669'}>
                  Produces predictions (classification / regression)
                </InfoRow>
                <InfoRow label="Training" color={isDark ? '#fbbf24' : '#d97706'}>
                  Backpropagation + gradient descent optimization
                </InfoRow>
              </div>

              <div className="th-formula mt-5 rounded-2xl border p-4">
                <p className="text-center text-sm" style={{ color: 'var(--th-text-tertiary)' }}>
                  <span className="font-mono" style={{ color: isDark ? '#67e8f9' : '#0891b2' }}>
                    h = f(W<sub>1</sub>x + b<sub>1</sub>)
                  </span>
                  <span className="mx-2" style={{ color: 'var(--th-text-muted)' }}>&rarr;</span>
                  <span className="font-mono" style={{ color: isDark ? '#67e8f9' : '#0891b2' }}>
                    y = g(W<sub>2</sub>h + b<sub>2</sub>)
                  </span>
                </p>
                <p className="mt-2 text-center text-xs" style={{ color: 'var(--th-text-muted)' }}>
                  Universal function approximator — can learn any continuous function
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key differences */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              ref: diff1,
              icon: <Layers className="h-5 w-5" style={{ color: isDark ? '#818cf8' : '#4f46e5' }} />,
              title: 'Depth',
              desc: 'Perceptron = 1 layer; MLP = multiple layers enabling hierarchical learning',
              delay: 0,
              rgb: diffGlows[0],
            },
            {
              ref: diff2,
              icon: <Sigma className="h-5 w-5" style={{ color: isDark ? '#22d3ee' : '#0891b2' }} />,
              title: 'Non-Linearity',
              desc: 'MLP uses non-linear activations (ReLU, sigmoid) to learn complex patterns',
              delay: 120,
              rgb: diffGlows[1],
            },
            {
              ref: diff3,
              icon: <ArrowRight className="h-5 w-5" style={{ color: isDark ? '#34d399' : '#059669' }} />,
              title: 'Backpropagation',
              desc: 'Error signals flow backward through layers to update all weights simultaneously',
              delay: 240,
              rgb: diffGlows[2],
            },
          ].map((item) => (
            <div
              key={item.title}
              ref={item.ref.ref}
              className={`reveal-scale ${item.ref.isVisible ? 'visible' : ''} relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm`}
              style={{
                transitionDelay: `${item.delay}ms`,
                backgroundColor: 'var(--th-card-bg)',
                borderColor: isDark ? `rgba(${item.rgb}, 0.08)` : `rgba(${item.rgb}, 0.06)`,
                boxShadow: isDark
                  ? [
                      `inset 0 0 40px -12px rgba(${item.rgb}, 0.08)`,
                      `inset 0 1px 0 0 rgba(${item.rgb}, 0.06)`,
                      `0 0 0 1px rgba(${item.rgb}, 0.04)`,
                    ].join(', ')
                  : [
                      `inset 0 0 30px -10px rgba(${item.rgb}, 0.05)`,
                      `inset 0 1px 0 0 rgba(${item.rgb}, 0.04)`,
                      `0 1px 3px rgba(0,0,0,0.02)`,
                      `0 0 0 1px rgba(${item.rgb}, 0.03)`,
                    ].join(', '),
                transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
              }}
            >
              {/* Subtle inner radial glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: isDark
                    ? `radial-gradient(ellipse at 20% 15%, rgba(${item.rgb}, 0.06) 0%, transparent 50%)`
                    : `radial-gradient(ellipse at 20% 15%, rgba(${item.rgb}, 0.04) 0%, transparent 50%)`,
                }}
              />
              {/* Subtle top glow line */}
              <div
                className="pointer-events-none absolute left-[20%] right-[20%] top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(${item.rgb}, ${isDark ? 0.12 : 0.08}), transparent)`,
                }}
              />

              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-2">
                  {item.icon}
                  <h4 className="font-bold" style={{ color: 'var(--th-text-primary)' }}>{item.title}</h4>
                </div>
                <p className="text-sm" style={{ color: 'var(--th-text-tertiary)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      <div>
        <span className="text-sm font-semibold" style={{ color }}>{label}: </span>
        <span className="text-sm" style={{ color: 'var(--th-text-tertiary)' }}>{children}</span>
      </div>
    </div>
  );
}

/* ─── Perceptron SVG Diagram ──────────────────────────────── */
function PerceptronDiagram() {
  const { isDark } = useTheme();
  const inputY = [50, 100, 150];
  const neuronX = 200;
  const neuronY = 100;
  const outputX = 300;

  const svgFill = isDark ? '#0f172a' : '#ffffff';
  const cyanColor = isDark ? '#22d3ee' : '#0891b2';
  const brandColor = isDark ? '#818cf8' : '#6366f1';
  const brandColorLight = isDark ? '#a5b4fc' : '#6366f1';
  const brandColorLighter = isDark ? '#c7d2fe' : '#4f46e5';
  const greenColor = isDark ? '#34d399' : '#059669';
  const mutedColor = isDark ? '#64748b' : '#94a3b8';

  return (
    <svg viewBox="0 0 360 200" className="h-48 w-full max-w-sm" fill="none">
      {/* Connection lines */}
      {inputY.map((y, i) => (
        <line
          key={i}
          x1={80}
          y1={y}
          x2={neuronX - 20}
          y2={neuronY}
          stroke={brandColor}
          strokeWidth={1.5}
          strokeOpacity={isDark ? 0.4 : 0.35}
        />
      ))}
      <line
        x1={neuronX + 20}
        y1={neuronY}
        x2={outputX}
        y2={neuronY}
        stroke={greenColor}
        strokeWidth={2}
        strokeOpacity={isDark ? 0.6 : 0.5}
      />

      {/* Input nodes */}
      {inputY.map((y, i) => (
        <g key={i}>
          <circle cx={60} cy={y} r={16} fill={svgFill} stroke={cyanColor} strokeWidth={1.5} />
          <text x={60} y={y + 1} textAnchor="middle" fill={cyanColor} fontSize={11} fontWeight={600} dominantBaseline="central">
            {'x'}
          </text>
          <text x={68} y={y + 6} textAnchor="start" fill={cyanColor} fontSize={8} fontWeight={600}>
            {i + 1}
          </text>
        </g>
      ))}

      {/* Weights labels */}
      {inputY.map((y, i) => (
        <g key={`w${i}`}>
          <text
            x={120}
            y={(y + neuronY) / 2 - 6}
            textAnchor="middle"
            fill={brandColorLight}
            fontSize={9}
            fontWeight={500}
          >
            {'w'}
          </text>
          <text
            x={126}
            y={(y + neuronY) / 2 - 1}
            textAnchor="start"
            fill={brandColorLight}
            fontSize={7}
            fontWeight={500}
          >
            {i + 1}
          </text>
        </g>
      ))}

      {/* Neuron */}
      <circle cx={neuronX} cy={neuronY} r={22} fill={svgFill} stroke={brandColor} strokeWidth={2} />
      <text x={neuronX} y={neuronY - 4} textAnchor="middle" fill={brandColorLighter} fontSize={8} fontWeight={600}>
        {'Σ + b'}
      </text>
      <text x={neuronX} y={neuronY + 10} textAnchor="middle" fill={brandColorLight} fontSize={8}>
        {'f(·)'}
      </text>

      {/* Output */}
      <circle cx={outputX + 20} cy={neuronY} r={16} fill={svgFill} stroke={greenColor} strokeWidth={1.5} />
      <text x={outputX + 20} y={neuronY + 4} textAnchor="middle" fill={greenColor} fontSize={11} fontWeight={600}>
        y
      </text>

      {/* Labels */}
      <text x={60} y={190} textAnchor="middle" fill={mutedColor} fontSize={9}>
        Inputs
      </text>
      <text x={neuronX} y={190} textAnchor="middle" fill={mutedColor} fontSize={9}>
        Neuron
      </text>
      <text x={outputX + 20} y={190} textAnchor="middle" fill={mutedColor} fontSize={9}>
        Output
      </text>
    </svg>
  );
}

/* ─── MLP SVG Diagram ─────────────────────────────────────── */
function MLPDiagram() {
  const { isDark } = useTheme();

  const svgFill = isDark ? '#0f172a' : '#ffffff';
  const cyanColor = isDark ? '#22d3ee' : '#0891b2';
  const brandColor = isDark ? '#818cf8' : '#6366f1';
  const greenColor = isDark ? '#34d399' : '#059669';
  const mutedColor = isDark ? '#64748b' : '#94a3b8';

  const layers = [
    { x: 60, nodes: [40, 80, 120, 160], color: cyanColor, label: 'Input' },
    { x: 150, nodes: [50, 90, 130, 150], color: brandColor, label: 'Hidden 1' },
    { x: 240, nodes: [60, 100, 140], color: brandColor, label: 'Hidden 2' },
    { x: 330, nodes: [80, 120], color: greenColor, label: 'Output' },
  ];

  return (
    <svg viewBox="0 0 390 200" className="h-48 w-full max-w-md" fill="none">
      {/* Connections */}
      {layers.map((layer, li) => {
        if (li === layers.length - 1) return null;
        const nextLayer = layers[li + 1];
        return layer.nodes.map((y1, ni) =>
          nextLayer.nodes.map((y2, nj) => (
            <line
              key={`${li}-${ni}-${nj}`}
              x1={layer.x + 12}
              y1={y1}
              x2={nextLayer.x - 12}
              y2={y2}
              stroke={layer.color}
              strokeWidth={0.6}
              strokeOpacity={isDark ? 0.25 : 0.2}
            />
          ))
        );
      })}

      {/* Nodes */}
      {layers.map((layer) =>
        layer.nodes.map((y, ni) => (
          <circle
            key={`${layer.x}-${ni}`}
            cx={layer.x}
            cy={y}
            r={11}
            fill={svgFill}
            stroke={layer.color}
            strokeWidth={1.5}
          />
        ))
      )}

      {/* Labels */}
      {layers.map((layer) => (
        <text
          key={layer.label}
          x={layer.x}
          y={190}
          textAnchor="middle"
          fill={mutedColor}
          fontSize={8}
        >
          {layer.label}
        </text>
      ))}
    </svg>
  );
}
