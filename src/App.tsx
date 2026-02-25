import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Users, 
  FileText, 
  TrendingDown, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Globe,
  Calculator,
  LayoutDashboard,
  Banknote,
  Scale,
  Eye,
  Clock,
  Zap,
  CreditCard,
  Send,
  WifiOff,
  Percent,
  Gavel
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [revenue, setRevenue] = useState<number>(50000);
  const [days, setDays] = useState<number>(5);
  const [profitDrain, setProfitDrain] = useState<number>(0);
  const contactRef = useRef<HTMLElement>(null);

  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const drain = ((revenue * 0.02) + (days * 500)) * 12;
    setProfitDrain(drain);
  }, [revenue, days]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'sw', label: 'SW' },
    { code: 'am', label: 'AM' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <div className={cn("min-h-screen selection:bg-accent-blue/30", isRTL && "rtl")}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-pharma-clean/80 backdrop-blur-md border-b border-executive-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-executive-blue rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-executive-blue">LULTECH</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-executive-light p-1 rounded-full border border-executive-blue/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium transition-all",
                      i18n.language === lang.code 
                        ? "bg-executive-blue text-white shadow-sm" 
                        : "text-executive-blue/60 hover:text-executive-blue"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <button 
                onClick={scrollToContact}
                className="hidden sm:block bg-executive-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-executive-blue/90 transition-colors"
              >
                {t('cta')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent-blue/10 text-executive-blue text-xs font-bold uppercase tracking-widest border border-accent-blue/20">
              Lultech Africa
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold text-executive-blue leading-[1.1] mb-8 tracking-tight">
              {t('hero')}
            </h1>
            <p className="text-xl text-executive-blue/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t('sub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-executive-blue text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-executive-blue/20"
              >
                {t('cta')}
                <ArrowRight className={cn("w-5 h-5", isRTL && "rotate-180")} />
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-white text-executive-blue border border-executive-blue/10 px-8 py-4 rounded-xl font-bold hover:bg-executive-light transition-colors"
              >
                ERPNext Solutions
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* KRA Stress & Disconnected Data - Center Stage */}
      <section className="py-20 bg-executive-light border-y border-executive-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-executive-blue rounded-[3rem] p-12 sm:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/20 to-transparent opacity-50" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/30 mb-8">
                  <AlertCircle className="w-4 h-4" />
                  High Risk Alert
                </div>
                <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
                  {t('kra_trap_title')}
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-10">
                  {t('kra_trap_sub')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <TrendingDown className="text-red-400 w-8 h-8 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg mb-1">Profit Leakage</p>
                      <p className="text-sm text-white/40">Disconnected records hide missing revenue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <ShieldCheck className="text-accent-blue w-8 h-8 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg mb-1">Audit Risk</p>
                      <p className="text-sm text-white/40">Manual eTIMS entry leads to costly penalties.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Sales Data", status: "Disconnected", color: "text-red-400" },
                  { label: "Bank Records", status: "Manual", color: "text-yellow-400" },
                  { label: "Tax Filing", status: "Delayed", color: "text-red-400" },
                  { label: "Inventory", status: "Blind", color: "text-red-400" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{item.label}</p>
                    <p className={cn("text-2xl font-bold", item.color)}>{item.status}</p>
                  </motion.div>
                ))}
                <div className="col-span-2 p-8 rounded-3xl bg-accent-blue text-executive-blue text-center font-bold">
                  The Solution: Expert ERPNext Implementation by Lultech
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits & Compliance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-executive-light border border-executive-blue/5 shadow-sm">
              <div className="w-14 h-14 bg-executive-blue rounded-2xl flex items-center justify-center mb-8">
                <Percent className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-executive-blue mb-4">{t('tax_deduction_title')}</h3>
              <p className="text-executive-blue/60 leading-relaxed mb-6">{t('tax_deduction_sub')}</p>
              <ul className="space-y-3 text-sm text-executive-blue/80 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-blue" /> 20% Annual Wear & Tear</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-blue" /> 5-Year Straight Line Basis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-blue" /> 30% Allowance on Hardware</li>
              </ul>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-executive-blue text-white shadow-xl">
              <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck className="text-executive-blue w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('etims_direct_title')}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{t('etims_direct_sub')}</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs leading-relaxed text-white/40">
                "From Jan 1, 2026, KRA validates all income/expenses via eTIMS. Non-compliant systems risk disallowed expenses and double-tax penalties."
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-executive-light border border-executive-blue/5 shadow-sm">
              <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center mb-8">
                <Gavel className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-executive-blue mb-4">{t('penalty_title')}</h3>
              <p className="text-executive-blue/60 leading-relaxed mb-6">{t('penalty_sub')}</p>
              <ul className="space-y-3 text-sm text-executive-blue/80 font-medium">
                <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-500" /> Fines up to KSh 2,000,000</li>
                <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-500" /> Disallowed Business Expenses</li>
                <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-red-500" /> Denial of Tax Compliance Cert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Capabilities Section */}
      <section className="py-24 bg-executive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 sm:p-20 border border-executive-blue/5 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-executive-blue rounded-2xl flex items-center justify-center mb-8">
                  <WifiOff className="text-white w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-executive-blue mb-6">{t('offline_title')}</h2>
                <p className="text-xl text-executive-blue/60 leading-relaxed mb-8">{t('offline_sub')}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-executive-light border border-executive-blue/5">
                    <div className="w-2 h-2 bg-accent-blue rounded-full" />
                    <p className="text-sm font-bold text-executive-blue">VSCU & eTIMS Client Support</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-executive-light border border-executive-blue/5">
                    <div className="w-2 h-2 bg-accent-blue rounded-full" />
                    <p className="text-sm font-bold text-executive-blue">Automatic Sync on Connectivity</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-executive-light border border-executive-blue/5">
                    <div className="w-2 h-2 bg-accent-blue rounded-full" />
                    <p className="text-sm font-bold text-executive-blue">USSD Invoicing (*222#) Support</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video bg-executive-blue rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-transparent" />
                  <Zap className="w-20 h-20 text-accent-blue animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Visibility & Meeting Reduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-executive-blue mb-6">Total Control, Zero Blind Spots</h2>
            <p className="text-xl text-executive-blue/60 max-w-3xl mx-auto">We eliminate the "Meeting Trap" by giving you real-time visibility into your sales team and revenue stream.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-executive-light border border-executive-blue/5 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-executive-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Eye className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-executive-blue mb-4">{t('sales_visibility')}</h3>
              <p className="text-executive-blue/60 leading-relaxed">{t('sales_visibility_desc')}</p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-executive-light border border-executive-blue/5 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Clock className="text-executive-blue w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-executive-blue mb-4">{t('meeting_reduction')}</h3>
              <p className="text-executive-blue/60 leading-relaxed">{t('meeting_reduction_desc')}</p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-executive-light border border-executive-blue/5 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-executive-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-executive-blue mb-4">Instant Commission Truth</h3>
              <p className="text-executive-blue/60 leading-relaxed">Automated commission calculations based on verified bank payments. No more disputes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-executive-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">{t('integrations_title')}</h2>
              <p className="text-xl text-white/60 mb-10">Lultech integrates ERPNext with the tools your team and customers already use. Native support for East African payment and communication rails.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "M-Pesa", icon: Zap },
                  { name: "Telebirr", icon: Zap },
                  { name: "Visa/Mastercard", icon: CreditCard },
                  { name: "Telegram", icon: Send },
                  { name: "WhatsApp", icon: MessageSquare },
                  { name: "eTIMS", icon: ShieldCheck },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <item.icon className="w-5 h-5 text-accent-blue" />
                    <span className="font-bold text-sm tracking-wide">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex-shrink-0">
              <div className="w-80 h-80 bg-accent-blue/10 rounded-full flex items-center justify-center relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                />
                <ShieldCheck className="w-24 h-24 text-accent-blue" />
                
                {/* Orbiting Icons */}
                {[0, 72, 144, 216, 288].map((angle, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl"
                    style={{
                      transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`
                    }}
                  >
                    <div className="w-2 h-2 bg-executive-blue rounded-full" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-executive-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-16 shadow-2xl border border-executive-blue/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="text-accent-blue w-8 h-8" />
                  <h2 className="text-3xl font-bold text-executive-blue">{t('calc_title')}</h2>
                </div>
                <p className="text-lg text-executive-blue/60 mb-10">{t('calc_sub')}</p>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-executive-blue/40 uppercase tracking-widest mb-4">
                      {t('rev_label')}
                    </label>
                    <input 
                      type="range" 
                      min="10000" 
                      max="1000000" 
                      step="10000"
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full h-2 bg-executive-light rounded-lg appearance-none cursor-pointer accent-executive-blue"
                    />
                    <div className="flex justify-between mt-4">
                      <span className="text-2xl font-bold text-executive-blue">${revenue.toLocaleString()}</span>
                      <span className="text-executive-blue/40 font-medium">$1M+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-executive-blue/40 uppercase tracking-widest mb-4">
                      {t('days_label')}
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full h-2 bg-executive-light rounded-lg appearance-none cursor-pointer accent-executive-blue"
                    />
                    <div className="flex justify-between mt-4">
                      <span className="text-2xl font-bold text-executive-blue">{days} Days</span>
                      <span className="text-executive-blue/40 font-medium">30 Days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-executive-blue rounded-3xl p-10 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-4">{t('result_label')}</p>
                <motion.p 
                  key={profitDrain}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-5xl sm:text-7xl font-bold mb-8 text-accent-blue"
                >
                  ${profitDrain.toLocaleString()}
                </motion.p>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {t('calc_drain_desc')}
                </p>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-white text-executive-blue py-4 rounded-xl font-bold hover:bg-accent-blue hover:text-white transition-all"
                >
                  {t('calc_cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-executive-blue mb-4">{t('compliance_title')}</h2>
              <p className="text-lg text-executive-blue/60">{t('compliance_sub')}</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-executive-light rounded-full border border-executive-blue/5 font-bold text-sm">KRA Certified</div>
              <div className="px-6 py-3 bg-executive-light rounded-full border border-executive-blue/5 font-bold text-sm">eTIMS Ready</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kenya (KRA)", desc: "Full eTIMS integration and automated VAT filing for large enterprises." },
              { title: t('missing_payments_title'), desc: t('missing_payments_sub') },
              { title: "Regional Hubs", desc: "Supporting operations in Uganda, Tanzania, and Rwanda." },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-executive-light border border-executive-blue/5">
                <div className="w-10 h-10 bg-executive-blue rounded-lg flex items-center justify-center mb-6">
                  <Globe className="text-white w-5 h-5" />
                </div>
                <h3 className="font-bold text-xl text-executive-blue mb-3">{item.title}</h3>
                <p className="text-executive-blue/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} className="bg-executive-blue text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="text-accent-blue w-8 h-8" />
                <span className="font-bold text-2xl tracking-tight">LULTECH</span>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                Building the Single Source of Truth for East African enterprises. We are experts in ERPNext Implementation, rescuing businesses from operational chaos.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10" title="M-Pesa">
                  <Zap className="text-accent-blue w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10" title="Visa/Mastercard">
                  <CreditCard className="text-accent-blue w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10" title="Telegram">
                  <Send className="text-accent-blue w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Solutions</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-accent-blue transition-colors">ERPNext Implementation</a></li>
                <li><a href="#" className="hover:text-accent-blue transition-colors">WhatsApp Integration</a></li>
                <li><a href="#" className="hover:text-accent-blue transition-colors">KRA/eTIMS Compliance</a></li>
                <li><a href="#" className="hover:text-accent-blue transition-colors">Tax Planning & Advisory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Contact</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-accent-blue" /> Nairobi, Kenya</li>
                <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-accent-blue" /> +254 700 000 000</li>
                <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-accent-blue" /> info@lultech.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 font-bold uppercase tracking-widest">
            <p>© 2026 Lultech Africa. All Rights Reserved.</p>
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
