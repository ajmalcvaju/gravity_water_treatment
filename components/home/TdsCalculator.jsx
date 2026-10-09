'use client';

import { useState, useMemo } from 'react';
import { SlidersHorizontal, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TdsCalculator() {
  const [tds, setTds] = useState(450);

  // Dynamic recommendations according to TDS levels
  const recommendation = useMemo(() => {
    if (tds <= 250) {
      return {
        badge: 'LOW TDS / SWEET WATER (MUNICIPAL / WELL)',
        badgeColor: 'border-emerald-400/50 text-emerald-400 bg-emerald-950/40',
        description:
          'Naturally sweet water with low dissolved salts. Does not require severe demineralization, but essential microbial disinfection and sediment protection is recommended.',
        title: 'Gravity Multi-Stage UV + UF Pathogen Disinfection System',
        bullets: [
          'High-Intensity Quartz UV Chamber',
          '0.01 Micron Ultra-Filtration (UF) Membrane',
          'Zero Water Wastage / 100% Mineral Retention',
          'Silver-Impregnated Activated Carbon Filter',
        ],
      };
    } else if (tds <= 750) {
      return {
        badge: 'MODERATE HARDNESS / DISSOLVED SALTS',
        badgeColor: 'border-[#00C2E8]/50 text-[#00C2E8] bg-sky-950/50',
        description:
          'Standard municipal or borewell water. Multi-stage RO with Mineral Booster and TDS Controller is ideal for healthy taste and safety.',
        title: 'Nice Grand RO + UV + UF + TDS Controller (Copper & Alkaline)',
        bullets: [
          'Multi-Stage RO Membrane',
          'Active Copper Cartridge',
          'Alkaline pH Balance (7.5–8.5)',
          'TDS Adjuster',
        ],
      };
    } else if (tds <= 1500) {
      return {
        badge: 'HARD BOREWELL WATER / SCALE FORMATION',
        badgeColor: 'border-amber-400/50 text-amber-400 bg-amber-950/40',
        description:
          'High mineral hardness and dissolved solids causing heavy scaling on geysers, pipe choking, and white deposits. Requires heavy-duty RO with pre-treatment.',
        title: 'High-Rejection RO System + FRP Whole-House Softener Unit',
        bullets: [
          '80 GPD High-TDS Recovery RO Membrane',
          'Pentair / TATA FRP Ion-Exchange Media',
          'Anti-Scaling Mineral Guard Protection',
          'TDS Controller with Biomineral Fortification',
        ],
      };
    } else {
      return {
        badge: 'EXTREME HARDNESS / BRACKISH WATER',
        badgeColor: 'border-rose-400/50 text-rose-400 bg-rose-950/40',
        description:
          'Severe mineral salinity, high brackish solids, and corrosive hardness. Demands commercial-grade high-pressure reverse osmosis skids.',
        title: 'Commercial Skid RO Plant (250–500 LPH High-Pressure)',
        bullets: [
          'Industrial 4040 Dow / Hydranautics High-Rejection Membrane',
          'Vertical Stainless Steel Multistage Booster Pump',
          'Electronic Antiscalant Metering Dosing Pump',
          'Digital Online Conductivity & TDS Monitor',
        ],
      };
    }
  }, [tds]);

  // Build WhatsApp inquiry link
  const waUrl = useMemo(() => {
    const message = `Hello Gravity Water Treatment, I checked my raw water TDS level at ${tds} PPM on your website calculator.\n\nRecommended: ${recommendation.title}\n\nPlease share pricing, installation details, and arrange a water sample consultation.`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [tds, recommendation.title]);

  return (
    <div className="mt-14 pt-12 border-t border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Interactive Slider Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2.5">
            <SlidersHorizontal className="w-6 h-6 text-[#00C2E8]" />
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Test Your Input Water TDS (PPM)
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Slide to your area&apos;s raw water TDS level to get instant purification recommendations from our water engineering team.
          </p>

          {/* Hardness Display Card */}
          <div className="bg-[#07172B] rounded-2xl p-5 sm:p-6 border border-slate-800 flex items-center justify-between shadow-inner">
            <span className="text-sm sm:text-base font-bold text-slate-300">
              Input Raw Water Hardness:
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-3xl sm:text-4xl font-black text-[#00C2E8] tracking-tight">
                {tds}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase">
                PPM
              </span>
            </div>
          </div>

          {/* Range Slider Container */}
          <div className="space-y-3 pt-2">
            <div className="relative">
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={tds}
                onChange={(e) => setTds(Number(e.target.value))}
                aria-label="Adjust input water TDS in PPM"
                className="w-full h-3.5 rounded-full appearance-none cursor-pointer focus:outline-none custom-tds-slider"
                style={{
                  background: 'linear-gradient(to right, #10B981 0%, #00C2E8 25%, #38BDF8 50%, #EF4444 100%)',
                }}
              />
            </div>

            {/* Milepost Indicators */}
            <div className="flex justify-between text-[11px] sm:text-xs font-semibold text-slate-400 pt-1">
              <span className={tds <= 250 ? 'text-emerald-400 font-bold' : ''}>50 PPM (Soft)</span>
              <span className={tds > 250 && tds <= 750 ? 'text-[#00C2E8] font-bold' : ''}>500 PPM (Moderate)</span>
              <span className={tds > 750 && tds <= 1500 ? 'text-amber-400 font-bold' : ''}>1200 PPM (Hard Borewell)</span>
              <span className={tds > 1500 ? 'text-rose-400 font-bold' : ''}>2500 PPM (Brackish)</span>
            </div>
          </div>

          {/* Unsure Notice Card */}
          <div className="bg-[#07172B]/70 rounded-xl p-4 border border-slate-800/80 flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              Unsure of your exact TDS? Book our{' '}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Gravity Water Treatment, I would like to book a Free Doorstep Water Quality Test for my home/premises.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C2E8] font-bold hover:underline"
              >
                Free Doorstep Water Quality Test
              </a>{' '}
              in Vadakkencherry, Palakkad &amp; surrounding areas.
            </p>
          </div>
        </div>

        {/* Right Recommendation Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#07172B] border border-sky-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Category Pill Tag */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border ${recommendation.badgeColor}`}
                >
                  {recommendation.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {recommendation.description}
              </p>

              {/* Recommendation Label & Title */}
              <div className="mb-6">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1.5">
                  ENGINEERED RECOMMENDATION:
                </p>
                <h4 className="text-xl sm:text-2xl font-black text-[#00C2E8] leading-tight">
                  {recommendation.title}
                </h4>
              </div>

              {/* Bullets with Green Checkmarks */}
              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-200">
                {recommendation.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 stroke-[2.5]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blue Gradient CTA Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#00A3E0] to-[#0066FF] hover:from-[#0092cc] hover:to-[#0055ee] shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all transform active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#00A3E0]"
            >
              <span>Get Free Quote for This TDS Level</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .custom-tds-slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #00c2e8;
          border: 3px solid #ffffff;
          box-shadow: 0 0 10px rgba(0, 194, 232, 0.7);
          cursor: pointer;
          transition: transform 0.15s ease-in-out;
        }
        .custom-tds-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .custom-tds-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #00c2e8;
          border: 3px solid #ffffff;
          box-shadow: 0 0 10px rgba(0, 194, 232, 0.7);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
