import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertCircle, TrendingDown, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const questions = [
  {
    id: 'meetings',
    label: 'Average daily meeting length?',
    options: [
      { label: '0-2 hours', weight: 0 },
      { label: '2-4 hours', weight: 15 },
      { label: '4-6 hours', weight: 25 },
      { label: '6+ hours', weight: 40 },
    ]
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp usage for operations?',
    options: [
      { label: 'Low (Internal only)', weight: 0 },
      { label: 'Medium (Some orders)', weight: 15 },
      { label: 'High (Most orders)', weight: 30 },
      { label: 'Everything is a group chat', weight: 50 },
    ]
  },
  {
    id: 'bank',
    label: 'Manual Bank Reconciliation?',
    options: [
      { label: 'No (Automated)', weight: 0 },
      { label: 'Yes (Manual)', weight: 20 },
    ]
  },
  {
    id: 'commissions',
    label: 'Excel-based Sales Commissions?',
    options: [
      { label: 'No', weight: 0 },
      { label: 'Yes', weight: 20 },
    ]
  },
  {
    id: 'kra',
    label: 'KRA/Tax Compliance Stress?',
    options: [
      { label: 'Low', weight: 0 },
      { label: 'Medium', weight: 10 },
      { label: 'High', weight: 20 },
      { label: 'Panic', weight: 40 },
    ]
  }
];

export const AuditTool = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [revenue, setRevenue] = useState(100000);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const totalSteps = questions.length + 2; // Revenue + Questions + Results

  const chaosScore = useMemo(() => {
    return Object.values(answers).reduce((acc, curr) => acc + curr, 0);
  }, [answers]);

  const annualLeakage = useMemo(() => {
    return revenue * 0.12 * 12;
  }, [revenue]);

  const handleAnswer = (questionId: string, weight: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: weight }));
    setStep(prev => prev + 1);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 veritas-gradient rounded-xl flex items-center justify-center">
                  <Calculator className="text-white w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-veritas-navy">Operational Health Check</h2>
              </div>
              <div className="text-sm font-bold text-slate-400">
                Step {step + 1} of {totalSteps}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold leading-tight">What is your average monthly revenue (USD)?</h3>
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-veritas-navy">${revenue.toLocaleString()}</div>
                    <input 
                      type="range" min="10000" max="2000000" step="10000" value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-veritas-emerald"
                    />
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <span>$10k</span>
                      <span>$2M+</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full bg-veritas-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    Next <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step > 0 && step <= questions.length && (
                <motion.div
                  key={`step${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold leading-tight">{questions[step - 1].label}</h3>
                  <div className="grid gap-4">
                    {questions[step - 1].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(questions[step - 1].id, opt.weight)}
                        className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-veritas-emerald hover:bg-emerald-50 transition-all group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-700 group-hover:text-veritas-emerald">{opt.label}</span>
                          <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-veritas-emerald flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-veritas-emerald scale-0 group-hover:scale-100 transition-transform" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(prev => prev - 1)}
                    className="text-slate-400 font-bold text-sm flex items-center gap-2 hover:text-slate-600 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                </motion.div>
              )}

              {step > questions.length && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-10"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold">
                      <AlertCircle className="w-4 h-4" />
                      Critical Friction Detected
                    </div>
                    <h3 className="text-3xl font-bold">Your Operational Diagnostic</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                      <div className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">Chaos Score</div>
                      <div className="text-5xl font-bold text-veritas-navy">{Math.min(100, chaosScore)}%</div>
                      <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-500 transition-all duration-1000" 
                          style={{ width: `${Math.min(100, chaosScore)}%` }}
                        />
                      </div>
                    </div>
                    <div className="bg-veritas-navy p-8 rounded-3xl text-white">
                      <div className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">Est. Annual Leakage</div>
                      <div className="text-4xl font-bold text-veritas-emerald">${Math.round(annualLeakage).toLocaleString()}</div>
                      <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                        Based on 12% average revenue loss due to manual friction and inventory shrinkage.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full veritas-gradient text-white py-6 rounded-2xl font-bold text-xl shadow-xl shadow-emerald-900/20 hover:scale-[1.02] transition-transform">
                      Rescue My Operations
                    </button>
                    <button 
                      onClick={() => setStep(0)}
                      className="w-full text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
                    >
                      Restart Audit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
