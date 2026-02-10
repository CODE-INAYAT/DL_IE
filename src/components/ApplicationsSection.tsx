import {
  Eye,
  MessageSquare,
  Mic,
  Car,
  HeartPulse,
  Gamepad2,
  ShieldCheck,
  Image,
  ChevronDown,
} from 'lucide-react';
import { useRef, useState, useEffect, type ReactNode } from 'react';
import { SectionHeader } from './TimelineSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';

interface Application {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  lightColor: string;
  glowRgb: string;
  bgColor: string;
  borderColor: string;
  examples: string[];
}

const applications: Application[] = [
  {
    title: 'Computer Vision',
    description: 'Image recognition, object detection, facial recognition, and video analysis.',
    icon: <Eye className="h-6 w-6" />,
    color: 'text-brand-400',
    lightColor: '#4f46e5',
    glowRgb: '99,102,241',
    bgColor: 'bg-brand-500/10',
    borderColor: 'border-brand-500/20',
    examples: ['Self-driving perception', 'Medical imaging', 'Facial unlock'],
  },
  {
    title: 'Natural Language Processing',
    description: 'Understanding and generating human language for communication and analysis.',
    icon: <MessageSquare className="h-6 w-6" />,
    color: 'text-cyan-400',
    lightColor: '#0891b2',
    glowRgb: '6,182,212',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    examples: ['ChatGPT / LLMs', 'Machine translation', 'Sentiment analysis'],
  },
  {
    title: 'Speech Recognition',
    description: 'Converting spoken language into text and understanding voice commands.',
    icon: <Mic className="h-6 w-6" />,
    color: 'text-emerald-400',
    lightColor: '#059669',
    glowRgb: '16,185,129',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    examples: ['Siri / Alexa', 'Voice transcription', 'Language dubbing'],
  },
  {
    title: 'Autonomous Systems',
    description: 'Self-driving vehicles, drones, and robotic control through perception and planning.',
    icon: <Car className="h-6 w-6" />,
    color: 'text-amber-400',
    lightColor: '#d97706',
    glowRgb: '245,158,11',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    examples: ['Tesla Autopilot', 'Warehouse robots', 'Delivery drones'],
  },
  {
    title: 'Healthcare & BioTech',
    description: 'Drug discovery, diagnostic imaging, and personalized treatment plans.',
    icon: <HeartPulse className="h-6 w-6" />,
    color: 'text-rose-400',
    lightColor: '#e11d48',
    glowRgb: '244,63,94',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    examples: ['AlphaFold', 'Cancer detection', 'Drug interaction prediction'],
  },
  {
    title: 'Gaming & Simulation',
    description: 'Intelligent NPCs, procedural content generation, and game AI agents.',
    icon: <Gamepad2 className="h-6 w-6" />,
    color: 'text-brand-400',
    lightColor: '#4f46e5',
    glowRgb: '99,102,241',
    bgColor: 'bg-brand-500/10',
    borderColor: 'border-brand-500/20',
    examples: ['AlphaGo', 'AI game bots', 'Physics simulation'],
  },
  {
    title: 'Cybersecurity',
    description: 'Threat detection, anomaly identification, and fraud prevention systems.',
    icon: <ShieldCheck className="h-6 w-6" />,
    color: 'text-cyan-400',
    lightColor: '#0891b2',
    glowRgb: '6,182,212',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    examples: ['Fraud detection', 'Malware analysis', 'Network monitoring'],
  },
  {
    title: 'Generative AI',
    description: 'Creating new images, music, text, and code from learned patterns.',
    icon: <Image className="h-6 w-6" />,
    color: 'text-emerald-400',
    lightColor: '#059669',
    glowRgb: '16,185,129',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    examples: ['DALL-E / Midjourney', 'GitHub Copilot', 'Music generation'],
  },
];

export function ApplicationsSection() {
  const header = useScrollReveal();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const calcMax = () => {
      const cardWidth = 340;
      const gap = 24;
      const totalStripWidth = applications.length * (cardWidth + gap) - gap;
      const viewportWidth = window.innerWidth;
      setMaxTranslate(Math.max(0, totalStripWidth - viewportWidth + 80));
    };
    calcMax();
    window.addEventListener('resize', calcMax);
    return () => window.removeEventListener('resize', calcMax);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalScrollDistance = sectionHeight - windowHeight;
      if (totalScrollDistance <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateX = -scrollProgress * maxTranslate;

  return (
    <section
      ref={sectionRef}
      className="relative"
      id="applications"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-10 px-4 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div ref={header.ref} className={`reveal ${header.isVisible ? 'visible' : ''}`}>
              <SectionHeader
                badge="Applications"
                title="Real-World Applications of Deep Learning"
                subtitle="Deep learning powers transformative applications across virtually every industry."
              />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Left edge fade */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 sm:w-32"
            style={{
              background: `linear-gradient(to right, var(--th-bg), transparent)`,
              opacity: scrollProgress > 0.02 ? 1 : 0,
              transition: 'opacity 0.3s',
            }}
          />
          {/* Right edge fade */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 sm:w-32"
            style={{
              background: `linear-gradient(to left, var(--th-bg), transparent)`,
              opacity: scrollProgress < 0.98 ? 1 : 0,
              transition: 'opacity 0.3s',
            }}
          />

          <div
            className="flex px-8 sm:px-16"
            style={{
              gap: '24px',
              transform: `translateX(${translateX}px)`,
              willChange: 'transform',
              transition: 'transform 0.15s linear',
            }}
          >
            {applications.map((app, i) => (
              <AppCard
                key={app.title}
                app={app}
                index={i}
                isDark={isDark}
                progress={scrollProgress}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-10 w-48 sm:w-64">
          <div
            className="h-1 overflow-hidden rounded-full"
            style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${scrollProgress * 100}%`,
                background: 'linear-gradient(90deg, #6366f1, #06b6d4, #10b981)',
                transition: 'width 0.15s linear',
              }}
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-4 flex justify-center"
          style={{
            opacity: scrollProgress < 0.05 ? 1 : 0,
            transform: scrollProgress < 0.05 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s, transform 0.4s',
          }}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs" style={{ color: 'var(--th-text-muted)' }}>
              Scroll to explore
            </span>
            <ChevronDown
              className="h-4 w-4 animate-bounce"
              style={{ color: 'var(--th-text-muted)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppCard({
  app,
  index,
  isDark,
  progress,
}: {
  app: Application;
  index: number;
  isDark: boolean;
  progress: number;
}) {
  const cardThreshold = index * 0.03;
  const cardVisible = progress > cardThreshold;
  const r = app.glowRgb;

  const innerGlowStyle: React.CSSProperties = {
    boxShadow: isDark
      ? [
          `inset 0 0 45px -12px rgba(${r}, 0.1)`,
          `inset 0 1px 0 0 rgba(${r}, 0.08)`,
          `0 0 0 1px rgba(${r}, 0.05)`,
        ].join(', ')
      : [
          `inset 0 0 35px -10px rgba(${r}, 0.07)`,
          `inset 0 1px 0 0 rgba(${r}, 0.06)`,
          `0 1px 4px rgba(0,0,0,0.03)`,
          `0 0 0 1px rgba(${r}, 0.04)`,
        ].join(', '),
  };

  return (
    <div
      className="group relative flex-shrink-0 overflow-hidden rounded-3xl border p-6 backdrop-blur-sm"
      style={{
        width: '340px',
        minHeight: '280px',
        ...innerGlowStyle,
        backgroundColor: 'var(--th-card-bg)',
        borderColor: isDark ? `rgba(${r}, 0.1)` : `rgba(${r}, 0.07)`,
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition:
          'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Subtle inner radial glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: isDark
            ? `radial-gradient(ellipse at 20% 10%, rgba(${r}, 0.08) 0%, transparent 55%)`
            : `radial-gradient(ellipse at 20% 10%, rgba(${r}, 0.05) 0%, transparent 55%)`,
        }}
      />

      {/* Subtle top edge glow line */}
      <div
        className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${r}, ${isDark ? 0.15 : 0.1}), transparent)`,
        }}
      />

      <div className="relative z-10">
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${app.bgColor}`}
          style={{ color: isDark ? undefined : app.lightColor }}
        >
          <span className={isDark ? app.color : ''}>{app.icon}</span>
        </div>

        <h3 className="mb-2 text-base font-bold" style={{ color: 'var(--th-text-primary)' }}>
          {app.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--th-text-tertiary)' }}>
          {app.description}
        </p>

        <div className="space-y-1.5">
          {app.examples.map((ex) => (
            <div key={ex} className="flex items-center gap-2">
              <div
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: isDark ? `rgb(${r})` : app.lightColor }}
              />
              <span className="text-xs" style={{ color: 'var(--th-text-muted)' }}>
                {ex}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
