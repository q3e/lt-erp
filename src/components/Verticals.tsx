import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, ShoppingCart, ArrowUpRight } from 'lucide-react';

export const Verticals = () => {
  const { t } = useTranslation();
  
  const verticals = [
    {
      id: 'pharma',
      icon: <ShieldCheck className="w-8 h-8" />,
      name: t('verticals.pharma.name'),
      desc: t('verticals.pharma.desc'),
      features: ['21 CFR Part 11', 'Batch Traceability', 'GxP Standards']
    },
    {
      id: 'agri',
      icon: <Leaf className="w-8 h-8" />,
      name: t('verticals.agri.name'),
      desc: t('verticals.agri.desc'),
      features: ['Farm-to-Fork Traceability', 'Chemical Inventory', 'Export Compliance']
    },
    {
      id: 'fmcg',
      icon: <ShoppingCart className="w-8 h-8" />,
      name: t('verticals.fmcg.name'),
      desc: t('verticals.fmcg.desc'),
      features: ['Sales Force Automation', 'Route Optimization', 'Secondary Sales Tracking']
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-veritas-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-veritas-navy mb-6 tracking-tight">
              {t('verticals.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just implement software; we build industry-specific operational engines designed for the African market reality.
            </p>
          </div>
          <button className="flex items-center gap-2 text-veritas-emerald font-bold hover:gap-4 transition-all">
            View All Industries <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-veritas-emerald transition-all hover:shadow-2xl hover:shadow-emerald-900/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-veritas-emerald group-hover:text-white transition-all">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold text-veritas-navy mb-4">{v.name}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                {v.desc}
              </p>
              <div className="space-y-3">
                {v.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-veritas-emerald" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
