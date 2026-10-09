'use client';

import { useState, useEffect, useRef } from 'react';
import { Building2, Home, Users, ShieldCheck } from 'lucide-react';

function AnimatedCounter({ value, duration = 2000, isVisible, isDecimal = false, hasComma = false, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(isDecimal ? '0.0' : '0');

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic: fast start, smooth deceleration to finish
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = easeProgress * value;

      if (isDecimal) {
        setDisplayValue(currentNumber.toFixed(1));
      } else {
        const rounded = Math.floor(currentNumber);
        if (hasComma) {
          setDisplayValue(rounded.toLocaleString('en-IN'));
        } else {
          setDisplayValue(rounded.toString());
        }
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Guarantee final exact number
        if (isDecimal) {
          setDisplayValue(value.toFixed(1));
        } else if (hasComma) {
          setDisplayValue(value.toLocaleString('en-IN'));
        } else {
          setDisplayValue(value.toString());
        }
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, value, duration, isDecimal, hasComma]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TrackRecord({ className = '' }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once on scroll into view
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'commercial',
      icon: Building2,
      target: 1000,
      suffix: '+',
      isDecimal: false,
      hasComma: false,
      label: 'Commercial Projects',
      sublabel: 'Hotels, Hospitals & Offices',
      delay: '100ms',
    },
    {
      id: 'residential',
      icon: Home,
      target: 2000,
      suffix: '+',
      isDecimal: false,
      hasComma: false,
      label: 'Residential Projects',
      sublabel: 'Villas & Apartments',
      delay: '250ms',
    },
    {
      id: 'customers',
      icon: Users,
      target: 3000,
      suffix: '+',
      isDecimal: false,
      hasComma: true,
      label: 'Happy Customers',
      sublabel: 'Trusted Across Kerala',
      delay: '400ms',
    },
    {
      id: 'purity',
      icon: ShieldCheck,
      target: 99.9,
      suffix: '%',
      isDecimal: true,
      hasComma: false,
      label: 'Purity Guaranteed',
      sublabel: 'Certified Water Standards',
      delay: '550ms',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-[#F1F8FC] transition-colors duration-500 ${className}`}
      aria-labelledby="track-record-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-sky-100 text-[#0088cc] mb-3">
            PROVEN TRACK RECORD
          </span>
          <h2 id="track-record-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Trusted Water Solutions Across Kerala
          </h2>
          <div className="w-12 h-1 bg-[#0088cc] mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Animated Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                style={{ transitionDelay: isVisible ? stat.delay : '0ms' }}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-700 flex flex-col items-center text-center group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Icon in Rounded Cyan/Blue Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#0088cc] text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>

                {/* Animated Big Stat Number */}
                <p className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-1.5 tabular-nums">
                  <AnimatedCounter
                    value={stat.target}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                    hasComma={stat.hasComma}
                    isVisible={isVisible}
                    duration={2000}
                  />
                </p>

                {/* Primary Label */}
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  {stat.label}
                </h3>

                {/* Secondary Subtitle */}
                <p className="text-xs text-slate-500 font-medium">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
