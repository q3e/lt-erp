import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AuditTool } from './components/AuditTool';
import { 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Smartphone, 
  WifiOff, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Calculator,
  Users,
  MessageSquare,
  FileText,
  AlertTriangle,
  Globe,
  ChevronDown,
  LayoutDashboard,
  Headphones,
  BookOpen,
  Wrench,
  GraduationCap,
  RefreshCw,
  Building2,
  Package,
  Banknote,
  ShoppingCart,
  Cog,
  Target,
  FolderKanban,
  MessageCircle,
  Layout
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sw', name: 'Swahili' },
    { code: 'am', name: 'Amharic' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية', dir: 'rtl' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.dir = currentLang.dir || 'ltr';
    document.documentElement.lang = currentLang.code;
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLang]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 veritas-gradient rounded-lg flex items-center justify-center">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-veritas-navy">LUL<span className="text-veritas-emerald">TECH</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#chaos" className="text-sm font-medium text-slate-600 hover:text-veritas-emerald transition-colors">{t('solutions')}</a>
          <a href="#compliance" className="text-sm font-medium text-slate-600 hover:text-veritas-emerald transition-colors">{t('tax_benefits')}</a>
          <a href="#audit" className="text-sm font-medium text-slate-600 hover:text-veritas-emerald transition-colors">{t('calculator')}</a>
          
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-sm font-bold uppercase text-slate-600 hover:text-veritas-emerald transition-colors"
            >
              <Globe className="w-4 h-4" />
              {currentLang.code}
              <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code} 
                      onClick={() => changeLanguage(l.code)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${i18n.language === l.code ? 'text-veritas-emerald font-bold' : 'text-slate-600'}`}
                    >
                      {l.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#contact" className="bg-veritas-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            {t('demo')}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-slate-100">
              {languages.map((l) => (
                <button 
                  key={l.code} 
                  onClick={() => changeLanguage(l.code)} 
                  className={`text-xs font-bold uppercase ${i18n.language === l.code ? 'text-veritas-emerald' : 'text-slate-400'}`}
                >
                  {l.code}
                </button>
              ))}
            </div>
            <a href="#chaos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">{t('solutions')}</a>
            <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">{t('tax_benefits')}</a>
            <a href="#audit" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">{t('calculator')}</a>
            <a href="#contact" className="block text-center bg-veritas-emerald text-white w-full py-4 rounded-xl font-bold">{t('demo')}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ChaosClarity = () => {
  const { t } = useTranslation();
  
  return (
    <section id="chaos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('chaos_title')}</h2>
          <p className="text-lg text-veritas-emerald font-semibold mt-4">{t('human_bridge')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="text-red-600 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-red-900">{t('mess_title')}</h3>
            </div>
            <div className="space-y-4">
              {(t('mess_items', { returnObjects: true }) as string[]).map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-veritas-navy rounded-[2.5rem] p-8 border border-veritas-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-veritas-emerald/10 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-veritas-emerald rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{t('veritas_title')}</h3>
            </div>
            <div className="space-y-4">
              {(t('veritas_items', { returnObjects: true }) as string[]).map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-veritas-emerald" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ROICalculator = ({ onRescue }: { onRescue: () => void }) => {
  const { t } = useTranslation();
  const [turnover, setTurnover] = useState(100000);

  const leakage = useMemo(() => {
    // 10% average leakage in fragmented systems
    return turnover * 0.10 * 12;
  }, [turnover]);

  return (
    <section id="calculator" className="py-24 bg-veritas-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-veritas-emerald text-xs font-bold uppercase tracking-wider mb-6">
              <Calculator className="w-3 h-3" />
              {t('ssot')}
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">{t('calc_title')}</h2>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-semibold text-slate-700">{t('calc_label')}</label>
                  <span className="text-veritas-navy font-bold text-xl">${turnover.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="10000" max="1000000" step="10000" value={turnover}
                  onChange={(e) => setTurnover(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-veritas-emerald"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 profit-gradient opacity-10 blur-3xl rounded-[3rem]"></div>
            <div className="relative bg-veritas-navy rounded-[3rem] p-12 text-white shadow-2xl border border-white/5">
              <h3 className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-4">{t('calc_result')}</h3>
              <div className="text-5xl md:text-7xl font-bold mb-10 text-veritas-emerald">
                ${Math.round(leakage).toLocaleString()}
              </div>
              <button 
                onClick={onRescue}
                className="w-full profit-gradient text-white py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-emerald-900/20"
              >
                {t('calc_cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  <ShieldCheck className="text-veritas-navy w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Lultech</h4>
                  <p className="text-slate-500">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[2.5rem] shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('contact.name')}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-veritas-emerald outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('contact.company')}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-veritas-emerald outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('contact.email')}</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-veritas-emerald outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('contact.message')}</label>
                <textarea className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-veritas-emerald outline-none transition-all h-32"></textarea>
              </div>
              <button className="w-full bg-veritas-navy text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAudit = () => {
    document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-veritas-emerald/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-veritas-navy/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-veritas-emerald text-sm font-bold mb-10 border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-veritas-emerald animate-pulse"></span>
              {t('ssot')}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-veritas-navy mb-8 tracking-tight max-w-5xl mx-auto leading-[1.05]">
              {t('hero')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed">
              {t('sub')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={scrollToAudit}
                className="bg-veritas-navy text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-300 flex items-center gap-3 group"
              >
                {t('audit')} <ArrowRight className={`w-6 h-6 group-hover:translate-x-2 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button 
                onClick={scrollToCalculator}
                className="bg-white text-veritas-navy border-2 border-slate-200 px-12 py-6 rounded-2xl font-bold text-xl hover:border-veritas-emerald hover:bg-veritas-surface transition-all flex items-center gap-3"
              >
                <Calculator className="w-6 h-6" />
                {t('calc_roi')}
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold text-slate-500">
              <span>{t('meeting_hook')}</span>
              <span className="text-slate-300">•</span>
              <span>{t('bank_hook')}</span>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-20 bg-veritas-surface border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-100">
              <AlertTriangle className="w-3 h-3" />
              The State of the Market
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-veritas-navy mt-6 mb-10">
              {t('state_of_market_title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('state_of_market_1')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('state_of_market_2')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('state_of_market_3')}
            </p>
          </div>
        </div>
      </section>

      <AuditTool onRescue={scrollToContact} />

      <ChaosClarity />

      <section id="pillars" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-veritas-navy mb-4">
              {t('pillars_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('pillars_subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, titleKey: 'pillar1_title', itemsKey: 'pillar1_items' },
              { icon: LayoutDashboard, titleKey: 'pillar2_title', itemsKey: 'pillar2_items' },
              { icon: Headphones, titleKey: 'pillar3_title', itemsKey: 'pillar3_items' },
            ].map((pillar) => (
              <div key={pillar.titleKey} className="glass-panel p-8 rounded-[2rem] hover:border-veritas-emerald transition-all">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  <pillar.icon className="text-veritas-emerald w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-veritas-navy mb-6">{t(pillar.titleKey)}</h3>
                <ul className="space-y-4">
                  {(t(pillar.itemsKey, { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-veritas-emerald flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3" />
                KRA eTIMS Compliant
              </div>
              <h2 className="text-4xl font-bold leading-tight">{t('etims.title')}</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('etims.desc')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <WifiOff className="w-5 h-5" />, text: t('etims.feature2') },
                  { icon: <Zap className="w-5 h-5" />, text: t('etims.feature1') },
                  { icon: <Users className="w-5 h-5" />, text: t('etims.feature3') },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Buyer-Initiated Invoicing" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-veritas-emerald">{item.icon}</div>
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 veritas-gradient opacity-5 blur-3xl rounded-[3rem]"></div>
              <div className="relative glass-panel p-10 rounded-[3rem] border-veritas-emerald/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="text-veritas-emerald w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('tax.title')}</h3>
                </div>
                <p className="text-slate-600 mb-8">
                  {t('tax.desc')}
                </p>
                <ul className="space-y-4">
                  {[t('tax.benefit1'), t('tax.benefit2'), t('tax.benefit3')].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-veritas-emerald w-4 h-4" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-500 italic">
                  "ERP software is classified under 'Computer Software' for tax purposes. Claim a 20% annual wear and tear allowance over five years."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-ROI Features */}
      <section className="py-24 bg-veritas-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: 'eTIMS Integration', desc: 'Issue KRA-compliant invoices directly from ERPNext. Real-time transmission even during internet downtime.' },
              { icon: <Smartphone />, title: 'M-Pesa & Bank Sync', desc: t('feature_bank_desc') },
              { icon: <ShieldCheck />, title: 'Tax-Optimized Workflows', desc: 'Proper expense capturing to maximize your 20% annual wear and tear allowance and VAT claims.' }
            ].map((f, i) => (
              <div key={i} className="glass-panel p-8 rounded-[2rem] hover:border-veritas-emerald transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-veritas-emerald group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="erp-modules" className="py-24 bg-veritas-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-veritas-navy mb-4">
              Save time and money through automation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              One ERP. Every module your growing business needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Banknote, title: 'Financial Accounting', desc: 'Get a real-time view of your cash flow. Full-fledged accounting module covering every aspect of bookkeeping.' },
              { icon: ShoppingCart, title: 'Order Management', desc: 'Increase productivity and lower costs by managing your sales and purchase cycles, from purchase to sales orders.' },
              { icon: Users, title: 'HR and Payroll', desc: 'Manage full employee life cycle right from onboarding, payroll, attendance, expense claims, assets to separation.' },
              { icon: Cog, title: 'Manufacturing', desc: 'Effectively maintain and manage multilevel bill of materials, production planning, job cards & inventory.' },
              { icon: Target, title: 'CRM', desc: 'Win and retain more customers by optimizing the sales process. Track leads, opportunities, and send quotes on the go.' },
              { icon: FolderKanban, title: 'Projects', desc: 'Deliver both internal and external projects on time, budget, and profitability. Track tasks, timesheets, and issues by project.' },
              { icon: MessageCircle, title: 'Helpdesk', desc: 'Deliver a better service experience with an intuitive issue tracker and an integrated knowledge base.' },
              { icon: Package, title: 'Asset Management', desc: 'Maintain and manage details of assets, their movement, value adjustment, and depreciation.' },
              { icon: Layout, title: 'Website', desc: 'ERPNext comes with fully-featured content management with blogs, web pages, and forms.' },
            ].map((mod) => (
              <div key={mod.title} className="glass-panel p-6 rounded-2xl hover:border-veritas-emerald transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-veritas-emerald group-hover:text-white transition-all">
                  <mod.icon className="text-veritas-emerald w-6 h-6 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-veritas-navy mb-2">{mod.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{mod.desc}</p>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="text-veritas-emerald font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-veritas-navy mb-4">
              {t('comparison_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('comparison_sub')}
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-veritas-navy text-white">
                  <th className="text-left py-4 px-6 font-bold">Aspect</th>
                  <th className="text-left py-4 px-6 font-bold">KRA Portal Only</th>
                  <th className="text-left py-4 px-6 font-bold">Lultech ERP</th>
                </tr>
              </thead>
              <tbody>
                {(t('comparison_rows', { returnObjects: true }) as { aspect: string; kra: string; us: string }[]).map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={`border-b border-slate-100 ${i % 2 === 1 ? 'bg-veritas-surface' : ''}`}
                  >
                    <td className="py-4 px-6 font-semibold text-veritas-navy">{row.aspect}</td>
                    <td className="py-4 px-6 text-slate-600">{row.kra}</td>
                    <td className="py-4 px-6 text-veritas-navy font-medium">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-veritas-emerald flex-shrink-0" />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 bg-veritas-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-veritas-navy mb-4">
              {t('cases_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('cases_subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-[2rem] border-slate-200">
              <div className="w-14 h-14 rounded-2xl bg-veritas-navy flex items-center justify-center mb-6">
                <Building2 className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-veritas-navy mb-3">{t('case_contractor_title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('case_contractor_desc')}
              </p>
            </div>
            <div className="glass-panel p-8 rounded-[2rem] border-slate-200">
              <div className="w-14 h-14 rounded-2xl veritas-gradient flex items-center justify-center mb-6">
                <Package className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-veritas-navy mb-3">{t('case_distributor_title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('case_distributor_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-24 bg-veritas-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('roadmap_title')}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {t('roadmap_sub')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, titleKey: 'roadmap_discovery', descKey: 'roadmap_discovery_desc' },
              { icon: Wrench, titleKey: 'roadmap_build', descKey: 'roadmap_build_desc' },
              { icon: GraduationCap, titleKey: 'roadmap_train', descKey: 'roadmap_train_desc' },
              { icon: RefreshCw, titleKey: 'roadmap_sustain', descKey: 'roadmap_sustain_desc' },
            ].map((step) => (
              <div key={step.titleKey} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="w-14 h-14 veritas-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t(step.titleKey)}</h3>
                <p className="text-white/60 text-sm">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator onRescue={scrollToContact} />

      <ContactForm />

      {/* Footer */}
      <footer className="bg-veritas-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 pb-16 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t('footer_cta')}
            </h2>
            <p className="text-white/60 mb-6 text-lg">
              {t('footer_cta_sub')}
            </p>
            <p className="text-veritas-emerald font-semibold text-sm mb-10 flex flex-wrap items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              {t('footer_dual_label')}
              <LayoutDashboard className="w-4 h-4" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToContact(); }}
                className="inline-flex items-center justify-center gap-2 bg-veritas-emerald text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-colors"
              >
                {t('audit')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#calculator"
                onClick={(e) => { e.preventDefault(); scrollToCalculator(); }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                {t('calc_roi')}
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-veritas-emerald w-6 h-6" />
                <span className="text-2xl font-bold text-white">LUL<span className="text-veritas-emerald">TECH</span></span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Bespoke ERPNext implementations for Kenyan distributors and manufacturers. We eliminate revenue leakage and operational chaos.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#chaos" className="hover:text-veritas-emerald transition-colors">Workflow Rescue</a></li>
                <li><a href="#compliance" className="hover:text-veritas-emerald transition-colors">eTIMS Integration</a></li>
                <li><a href="#compliance" className="hover:text-veritas-emerald transition-colors">Tax Planning</a></li>
                <li><a href="#calculator" className="hover:text-veritas-emerald transition-colors">ROI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-veritas-emerald transition-colors">About Lultech</a></li>
                <li><a href="#contact" className="hover:text-veritas-emerald transition-colors">Contact Us</a></li>
                <li><a href="https://lultech.com" className="hover:text-veritas-emerald transition-colors">lultech.com</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 text-slate-500 text-sm">
            <p>© 2026 Lultech. Nairobi, Kenya. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}