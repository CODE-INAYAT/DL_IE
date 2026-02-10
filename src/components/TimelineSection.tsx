import {
  Lightbulb,
  Cpu,
  Snowflake,
  RotateCcw,
  Database,
  Sparkles,
  Zap,
  Globe,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  glowRgb: string;
  bgColor: string;
  borderColor: string;
}

interface TimelineEra {
  era: string;
  eraSubtitle: string;
  eraColor: string;
  eraBg: string;
  eraBorder: string;
  events: TimelineEvent[];
}

const eras: TimelineEra[] = [
  {
    era: 'Foundation Era',
    eraSubtitle: '1940s – 1960s',
    eraColor: 'text-amber-400',
    eraBg: 'bg-amber-500/10',
    eraBorder: 'border-amber-500/30',
    events: [
      {
        year: '1943',
        title: 'McCulloch-Pitts Neuron',
        description:
          'Warren McCulloch and Walter Pitts introduced the first mathematical model of an artificial neuron, laying the theoretical foundation for neural networks.',
        icon: <Lightbulb className="h-5 w-5" />,
        color: 'text-amber-400',
        glowRgb: '245,158,11',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
      },
      {
        year: '1958',
        title: 'The Perceptron',
        description:
          'Frank Rosenblatt invented the Perceptron — the first trainable neural network model capable of learning binary classification through supervised learning.',
        icon: <Cpu className="h-5 w-5" />,
        color: 'text-brand-400',
        glowRgb: '99,102,241',
        bgColor: 'bg-brand-500/10',
        borderColor: 'border-brand-500/30',
      },
    ],
  },
  {
    era: 'AI Winter',
    eraSubtitle: '1969 – 1980s',
    eraColor: 'text-cyan-400',
    eraBg: 'bg-cyan-500/10',
    eraBorder: 'border-cyan-500/30',
    events: [
      {
        year: '1969',
        title: "Minsky & Papert's Critique",
        description:
          'Published "Perceptrons," highlighting the inability to solve XOR — triggering the first AI Winter and significantly reduced funding for neural network research.',
        icon: <Snowflake className="h-5 w-5" />,
        color: 'text-cyan-400',
        glowRgb: '6,182,212',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/30',
      },
    ],
  },
  {
    era: 'Revival Era',
    eraSubtitle: '1986 – 2000s',
    eraColor: 'text-emerald-400',
    eraBg: 'bg-emerald-500/10',
    eraBorder: 'border-emerald-500/30',
    events: [
      {
        year: '1986',
        title: 'Backpropagation',
        description:
          'Rumelhart, Hinton & Williams popularized the backpropagation algorithm, enabling training of multi-layer networks and reviving interest in neural networks.',
        icon: <RotateCcw className="h-5 w-5" />,
        color: 'text-emerald-400',
        glowRgb: '16,185,129',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
      },
      {
        year: '1998',
        title: 'LeNet-5 (CNNs)',
        description:
          'Yann LeCun developed LeNet-5 for handwritten digit recognition — one of the first successful deployments of Convolutional Neural Networks.',
        icon: <Database className="h-5 w-5" />,
        color: 'text-rose-400',
        glowRgb: '244,63,94',
        bgColor: 'bg-rose-500/10',
        borderColor: 'border-rose-500/30',
      },
    ],
  },
  {
    era: 'Modern Deep Learning',
    eraSubtitle: '2012 – Present',
    eraColor: 'text-brand-400',
    eraBg: 'bg-brand-500/10',
    eraBorder: 'border-brand-500/30',
    events: [
      {
        year: '2012',
        title: 'AlexNet & ImageNet',
        description:
          'AlexNet won the ImageNet competition by a huge margin using deep CNNs and GPUs, marking the dawn of the modern deep learning era.',
        icon: <Sparkles className="h-5 w-5" />,
        color: 'text-amber-400',
        glowRgb: '245,158,11',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
      },
      {
        year: '2017',
        title: 'Transformers',
        description:
          '"Attention Is All You Need" introduced the Transformer architecture, revolutionizing NLP and eventually powering GPT, BERT, and modern LLMs.',
        icon: <Zap className="h-5 w-5" />,
        color: 'text-brand-400',
        glowRgb: '99,102,241',
        bgColor: 'bg-brand-500/10',
        borderColor: 'border-brand-500/30',
      },
      {
        year: '2020+',
        title: 'Generative AI Era',
        description:
          'Large-scale models like GPT-3/4, DALL·E, Stable Diffusion, and foundation models transform industries — from healthcare to creative arts.',
        icon: <Globe className="h-5 w-5" />,
        color: 'text-cyan-400',
        glowRgb: '6,182,212',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/30',
      },
    ],
  },
];

export function TimelineSection() {
  const header = useScrollReveal();

  return (
    <section className="relative px-4 py-20 sm:px-8" id="timeline">
      <div className="mx-auto max-w-5xl">
        <div
          ref={header.ref}
          className={`reveal ${header.isVisible ? 'visible' : ''}`}
        >
          <SectionHeader
            badge="Timeline"
            title="History of Deep Learning"
            subtitle="A journey through the key milestones that shaped artificial neural networks and deep learning."
          />
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px sm:left-1/2 sm:-translate-x-px">
            <div className="h-full w-full bg-gradient-to-b from-amber-500/40 via-cyan-500/40 to-brand-500/40" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {eras.map((era, eraIndex) => (
              <EraGroup key={era.era} era={era} eraIndex={eraIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EraGroup({ era, eraIndex }: { era: TimelineEra; eraIndex: number }) {
  const eraHeader = useScrollReveal({ threshold: 0.2 });

  return (
    <div>
      {/* Era Label */}
      <div
        ref={eraHeader.ref}
        className={`reveal-scale ${eraHeader.isVisible ? 'visible' : ''} relative mb-8`}
      >
        {/* Mobile era label */}
        <div className="block sm:hidden w-full pl-16">
          <div
            className={`inline-flex items-center gap-2 rounded-full border ${era.eraBorder} ${era.eraBg} px-4 py-2 backdrop-blur-sm`}
          >
            <div className={`h-2 w-2 rounded-full ${era.eraColor.replace('text-', 'bg-')}`} />
            <span className={`text-sm font-bold ${era.eraColor}`}>{era.era}</span>
            <span className="text-xs" style={{ color: 'var(--th-text-muted)' }}>{era.eraSubtitle}</span>
          </div>
        </div>

        {/* Desktop era label – centered */}
        <div className="hidden sm:flex w-full justify-center">
          <div
            className={`relative z-20 inline-flex items-center gap-3 rounded-full border ${era.eraBorder} ${era.eraBg} px-6 py-2.5 backdrop-blur-sm`}
          >
            <div className={`h-2.5 w-2.5 rounded-full ${era.eraColor.replace('text-', 'bg-')}`} />
            <span className={`text-sm font-bold ${era.eraColor}`}>{era.era}</span>
            <span className="text-xs font-medium" style={{ color: 'var(--th-text-muted)' }}>{era.eraSubtitle}</span>
          </div>
        </div>
      </div>

      {/* Events in this era */}
      <div className="space-y-8 sm:space-y-12">
        {era.events.map((event, index) => {
          const globalIndex = eras
            .slice(0, eraIndex)
            .reduce((sum, e) => sum + e.events.length, 0) + index;
          return (
            <TimelineCard
              key={event.year}
              event={event}
              index={globalIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const isLeft = index % 2 === 0;
  const card = useScrollReveal({ threshold: 0.05 });
  const { isDark } = useTheme();

  return (
    <div ref={card.ref} className="relative">
      {/* ─── MOBILE layout ─── */}
      <div
        className="block sm:hidden pl-16"
        style={{
          opacity: card.isVisible ? 1 : 0,
          transform: card.isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dot on the line */}
        <div
          className={`absolute left-[15px] top-2 z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 ${event.borderColor} ${event.bgColor}`}
        >
          <div className={`h-2 w-2 rounded-full ${event.color.replace('text-', 'bg-')}`} />
        </div>
        <CardContent event={event} isDark={isDark} />
      </div>

      {/* ─── DESKTOP layout ─── */}
      <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] items-start">
        {isLeft ? (
          <>
            <div
              className="flex justify-end pr-10"
              style={{
                opacity: card.isVisible ? 1 : 0,
                transform: card.isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <CardContent event={event} align="right" isDark={isDark} />
            </div>
            <div className="relative flex flex-col items-center">
              <div
                className={`z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 ${event.borderColor} ${event.bgColor}`}
              >
                <div className={`h-2.5 w-2.5 rounded-full ${event.color.replace('text-', 'bg-')}`} />
              </div>
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="relative flex flex-col items-center">
              <div
                className={`z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 ${event.borderColor} ${event.bgColor}`}
              >
                <div className={`h-2.5 w-2.5 rounded-full ${event.color.replace('text-', 'bg-')}`} />
              </div>
            </div>
            <div
              className="pl-10"
              style={{
                opacity: card.isVisible ? 1 : 0,
                transform: card.isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <CardContent event={event} isDark={isDark} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CardContent({
  event,
  align,
  isDark,
}: {
  event: TimelineEvent;
  align?: 'right' | 'left';
  isDark: boolean;
}) {
  const r = event.glowRgb;

  const innerGlowStyle: React.CSSProperties = {
    boxShadow: isDark
      ? [
          `inset 0 0 40px -12px rgba(${r}, 0.1)`,
          `inset 0 1px 0 0 rgba(${r}, 0.08)`,
          `0 0 0 1px rgba(${r}, 0.05)`,
        ].join(', ')
      : [
          `inset 0 0 35px -10px rgba(${r}, 0.07)`,
          `inset 0 1px 0 0 rgba(${r}, 0.06)`,
          `0 1px 3px rgba(0,0,0,0.03)`,
          `0 0 0 1px rgba(${r}, 0.04)`,
        ].join(', '),
  };

  return (
    <div
      className={`group relative max-w-md rounded-3xl border p-5 backdrop-blur-sm overflow-hidden ${
        align === 'right' ? 'ml-auto text-right' : 'text-left'
      }`}
      style={{
        ...innerGlowStyle,
        backgroundColor: 'var(--th-card-bg)',
        borderColor: isDark ? `rgba(${r}, 0.1)` : `rgba(${r}, 0.08)`,
        transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Subtle inner radial glow from icon corner */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: isDark
            ? `radial-gradient(ellipse at ${align === 'right' ? '85% 15%' : '15% 15%'}, rgba(${r}, 0.08) 0%, transparent 55%)`
            : `radial-gradient(ellipse at ${align === 'right' ? '85% 15%' : '15% 15%'}, rgba(${r}, 0.05) 0%, transparent 55%)`,
        }}
      />

      {/* Subtle top edge glow line */}
      <div
        className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${r}, ${isDark ? 0.12 : 0.08}), transparent)`,
        }}
      />

      <div className="relative z-10">
        <div
          className={`mb-3 flex items-center gap-3 ${
            align === 'right' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${event.bgColor} ${event.color}`}
          >
            {event.icon}
          </div>
          <span
            className={`rounded-xl px-2.5 py-0.5 text-xs font-bold tracking-wider ${event.bgColor} ${event.color} border ${event.borderColor}`}
          >
            {event.year}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold" style={{ color: 'var(--th-text-primary)' }}>{event.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--th-text-tertiary)' }}>{event.description}</p>
      </div>
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  const { isDark } = useTheme();

  return (
    <div className="text-center">
      <span
        className="mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
        style={{
          borderColor: isDark ? 'rgba(129,140,248,0.3)' : 'rgba(79,70,229,0.2)',
          backgroundColor: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.06)',
          color: isDark ? '#a5b4fc' : '#4f46e5',
        }}
      >
        {badge}
      </span>
      <h2
        className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
        style={{ color: 'var(--th-text-primary)' }}
      >
        {title}
      </h2>
      <p className="mx-auto max-w-2xl" style={{ color: 'var(--th-text-tertiary)' }}>{subtitle}</p>
    </div>
  );
}
