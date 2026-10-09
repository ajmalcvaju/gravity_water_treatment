import {
  Layers,
  Sliders,
  FlaskConical,
  Building2,
  MessageSquareCheck,
  CheckCircle,
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Layers,
      title: 'Complete Product Portfolio',
      description:
        'From compact domestic RO filters to high-capacity industrial RO plants and whole-house filtration vessels.',
    },
    {
      icon: FlaskConical,
      title: 'Pre-Installation Water Testing',
      description:
        'We test your source water parameters (iron, TDS, hardness, turbidity, microbial presence) to select the exact filtration media required.',
    },
    {
      icon: Sliders,
      title: 'Scalable Capacities & Media Options',
      description:
        'Flexible equipment sizing from 15 LPH domestic drinking units up to 10,000+ LPH industrial processing plants.',
    },
    {
      icon: Building2,
      title: 'Domestic, Commercial & Industrial Solutions',
      description:
        'Proven setups for residential homes, apartments, restaurants, schools, marriage halls, hospitals, and manufacturing factories.',
    },
    {
      icon: MessageSquareCheck,
      title: 'Direct WhatsApp Consultation',
      description:
        'Fast response, transparent equipment information, and prompt sizing guidance directly via WhatsApp click-to-chat.',
    },
    {
      icon: CheckCircle,
      title: 'Genuine Components & Service Support',
      description:
        'Built with trusted Pentair and TATA FRP composite vessels, high-rejection membranes, and dedicated local technician support.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-bg-light/60 border-y border-slate-200/60" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-blue mb-2">
            ENGINEERING EXCELLENCE
          </p>
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Why Choose Gravity Water Treatment?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            We deliver targeted water treatment engineering tailored to your raw water chemistry, daily consumption, and application requirements.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center text-brand-blue border border-brand-blue/20 flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
