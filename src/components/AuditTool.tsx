import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const questionKeys = ['q1', 'q2', 'q3', 'q4'] as const;

const optionWeights: Record<string, number[]> = {
  q1: [0, 15, 25, 40],
  q2: [0, 15, 30, 50],
  q3: [0, 25, 40],
  q4: [0, 20, 40],
};

function chaosToLeakPercent(chaosScore: number): number {
  if (chaosScore <= 20) return 5;
  if (chaosScore <= 40) return 12;
  if (chaosScore <= 60) return 18;
  if (chaosScore <= 80) return 25;
  return 32;
}

export function AuditTool({ onRescue }: { onRescue?: () => void }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [revenue, setRevenue] = useState(100000);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const totalSteps = questionKeys.length + 2;
  const chaosScore = useMemo(
    () => Math.min(100, (Object.values(answers) as number[]).reduce((a, b) => a + b, 0)),
    [answers]
  );
  const leakPercent = useMemo(() => chaosToLeakPercent(chaosScore), [chaosScore]);
  const annualLeakage = useMemo(
    () => (revenue * (leakPercent / 100)) * 12,
    [revenue, leakPercent]
  );

  const handleAnswer = (questionId: string, weight: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: weight }));
    setStep((prev) => prev + 1);
  };

  const currentQuestion = step >= 1 && step <= questionKeys.length ? questionKeys[step - 1] : null;
  const options = currentQuestion ? optionWeights[currentQuestion] : [];
  const optionLabels = currentQuestion
    ? (optionWeights[currentQuestion].map((_, i) => t(`auditTool.${currentQuestion}_${i}`)) as string[])
    : [];

  return (
    <section id="audit" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 veritas-gradient rounded-xl flex items-center justify-center">
                  <Calculator className="text-white w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-veritas-navy">{t('auditTool.title')}</h2>
              </div>
              <div className="text-sm font-bold text-slate-400">
                {t('auditTool.step_of', { current: step + 1, total: totalSteps })}
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
                  <h3 className="text-2xl font-bold leading-tight">
                    {t('auditTool.revenue_question')}
                  </h3>
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-veritas-navy">
                      ${revenue.toLocaleString()}
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="2000000"
                      step="10000"
                      value={revenue}
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
                    {t('auditTool.revenue_next')} <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {currentQuestion && options.length > 0 && (
                <motion.div
                  key={`step-${currentQuestion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold leading-tight">
                    {t(`auditTool.${currentQuestion}`)}
                  </h3>
                  <div className="grid gap-4">
                    {options.map((weight, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(currentQuestion, weight)}
                        className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-veritas-emerald hover:bg-emerald-50 transition-all group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-700 group-hover:text-veritas-emerald">
                            {optionLabels[i]}
                          </span>
                          <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-veritas-emerald flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-veritas-emerald scale-0 group-hover:scale-100 transition-transform" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep((prev) => prev - 1)}
                    className="text-slate-400 font-bold text-sm flex items-center gap-2 hover:text-slate-600 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> {t('auditTool.back')}
                  </button>
                </motion.div>
              )}

              {step > questionKeys.length && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-10"
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold">
                      <AlertCircle className="w-4 h-4" />
                      {t('auditTool.result_badge')}
                    </div>
                    <h3 className="text-3xl font-bold">{t('auditTool.result_title')}</h3>
                  </div>

                  <p className="text-xl font-semibold text-veritas-navy text-center">
                    {t('auditTool.leaking', { percent: leakPercent })}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                      <div className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">
                        {t('auditTool.chaos_score')}
                      </div>
                      <div className="text-5xl font-bold text-veritas-navy">{chaosScore}%</div>
                      <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 transition-all duration-1000"
                          style={{ width: `${chaosScore}%` }}
                        />
                      </div>
                    </div>
                    <div className="bg-veritas-navy p-8 rounded-3xl text-white">
                      <div className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">
                        {t('auditTool.annual_leakage')}
                      </div>
                      <div className="text-4xl font-bold text-veritas-emerald">
                        ${Math.round(annualLeakage).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={onRescue}
                      className="w-full veritas-gradient text-white py-6 rounded-2xl font-bold text-xl shadow-xl shadow-emerald-900/20 hover:scale-[1.02] transition-transform"
                    >
                      {t('auditTool.rescue_cta')}
                    </button>
                    <button
                      onClick={() => {
                        setStep(0);
                        setAnswers({});
                      }}
                      className="w-full text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
                    >
                      {t('auditTool.restart')}
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
}
