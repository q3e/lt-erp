import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, MessageSquare, FileText, Phone, BarChart3, Receipt, Database, Users } from 'lucide-react';

export const TheChaosMap = () => {
  const { t } = useTranslation();
  
  return (
    <section id="chaos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-veritas-navy">{t('chaos_map.title')}</h2>
          <div className="w-24 h-1.5 veritas-gradient mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100">
              <div className="w-10 h-10 veritas-gradient rounded-full animate-pulse" />
            </div>
          </div>

          {/* The Mess */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-200 relative"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="text-red-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">{t('chaos_map.mess')}</h3>
            </div>

            <div className="space-y-6">
              {[
                { icon: <MessageSquare className="text-red-400" />, text: t('chaos_map.mess_items.0') },
                { icon: <FileText className="text-red-400" />, text: t('chaos_map.mess_items.1') },
                { icon: <Phone className="text-red-400" />, text: t('chaos_map.mess_items.2') },
                { icon: <BarChart3 className="text-red-400" />, text: t('chaos_map.mess_items.3') },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-600">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Veritas Way */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-veritas-navy rounded-[3rem] p-10 md:p-16 border border-veritas-navy relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-veritas-emerald/10 blur-[100px] rounded-full" />
            
            <div className="flex items-center gap-4 mb-12 relative z-10">
              <div className="w-12 h-12 bg-veritas-emerald rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('chaos_map.veritas')}</h3>
            </div>

            <div className="space-y-6 relative z-10">
              {[
                { icon: <Database className="text-veritas-emerald" />, text: t('chaos_map.veritas_items.0') },
                { icon: <Users className="text-veritas-emerald" />, text: t('chaos_map.veritas_items.1') },
                { icon: <BarChart3 className="text-veritas-emerald" />, text: t('chaos_map.veritas_items.2') },
                { icon: <Receipt className="text-veritas-emerald" />, text: t('chaos_map.veritas_items.3') },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-200">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
