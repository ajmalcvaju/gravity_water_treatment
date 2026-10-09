import { FlaskConical, CheckCircle2, ShieldCheck } from 'lucide-react';
import TdsCalculator from '@/components/home/TdsCalculator';

export default function WaterTestingBanner() {
  const commonIssues = [
    { title: 'Iron Content & Reddish Mud', desc: 'Stains bathroom tiles, sanitary ware & clothes' },
    { title: 'High Hardness & Scaling', desc: 'Chokes geysers, showerheads & damages plumbing' },
    { title: 'Turbidity & Muddy Odor', desc: 'Murky well/borewell water with foul smell' },
    { title: 'E. Coli & Coliform Bacteria', desc: 'Contamination from surface run-offs or septic leaks' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0B1E36] text-white relative overflow-hidden" aria-labelledby="water-testing-heading">
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0088cc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C2E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Two-Column Grid Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/80 text-xs font-bold text-[#00C2E8] uppercase tracking-wider">
                <FlaskConical className="w-4 h-4 text-[#00C2E8]" />
                <span>Scientific Water Testing Facility Available</span>
              </span>
            </div>

            <h2 id="water-testing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Facing Muddy, Smelly, or Hard Borewell Water?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Gravity Water Treatment, we never guess. We first conduct a comprehensive raw water test to assess iron concentration, hardness, pH, and turbidity. Then we engineer the precise FRP filtration media with genuine <strong className="text-white">Pentair</strong> and <strong className="text-white">TATA Steel</strong> FRP composite vessels.
            </p>

            {/* 4 Issues Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {commonIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="bg-[#07172B] rounded-2xl p-4 sm:p-5 border border-slate-800 flex items-start space-x-3.5 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00C2E8] flex-shrink-0 mt-0.5 stroke-[2.2]" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{issue.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Quality & Service Guarantee Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#07172B] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center space-x-3.5 border-b border-slate-800 pb-5">
                <ShieldCheck className="w-9 h-9 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">Quality &amp; Service Guarantee</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Serving Vadakkencherry &amp; Palakkad Since 2018</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#00C2E8] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">All Water Purifier Brands:</strong> Complete sales, filter replacement, repair &amp; AMC services.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#00C2E8] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Exchange Offers:</strong> Upgrade your old or non-working domestic water purifier to an advanced RO+UV system.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#00C2E8] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Authorized FRP Media:</strong> Heavy-duty TATA &amp; Pentair vessels engineered for high-pressure durability.
                  </span>
                </div>
              </div>

              {/* Direct Branch Location */}
              <div className="p-4 rounded-2xl bg-[#0B2545]/80 border border-sky-900/60 text-xs text-blue-200 text-center">
                <span className="font-bold text-white block mb-0.5">Direct Branch Location:</span>
                Royal Junction, Vadakkencherry, Palakkad District, Kerala
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Interactive TDS Water Quality Calculator */}
        <TdsCalculator />

      </div>
    </section>
  );
}
