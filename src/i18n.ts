import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero": "Stop Running Your $1M+ Enterprise on Blind Sales Data and Manual Paperwork.",
      "sub": "Rescue your operations from unreliable systems. Lultech provides expert ERPNext Implementation for total sales visibility and KRA compliance.",
      "kra_trap_title": "The KRA Compliance Trap",
      "kra_trap_sub": "Disconnected data isn't just a headache—it's a liability. From Jan 1, 2026, expenses without eTIMS invoices are NOT tax-deductible.",
      "sales_visibility": "Total Sales Visibility",
      "sales_visibility_desc": "Real-time tracking of every lead, commission, and payment. No more blind spots.",
      "meeting_reduction": "75% Reduction in Weekly Meetings",
      "meeting_reduction_desc": "Monday mornings should take 15 minutes, not 6 hours. Get the truth instantly.",
      "integrations_title": "Native East African Integrations",
      "reconcile": "Manual Reconciliation Rescue",
      "tax": "KRA/Tax Compliance (eTIMS)",
      "meeting": "Kill the 6-Hour Meeting",
      "cta": "Request Business Audit",
      "chaos_title": "The Chaos Map",
      "chaos_sub": "Why $1M+ businesses in East Africa struggle to scale.",
      "bridge_title": "The Lultech Bridge",
      "bridge_sub": "Standardizing the 'Human-Centric' workflow with ERPNext.",
      "calc_title": "Leakage & Reconciliation Calculator",
      "calc_sub": "Calculate the hidden cost of manual operations.",
      "rev_label": "Monthly Revenue (USD)",
      "days_label": "Days Spent on Reconciliation",
      "result_label": "Estimated Annual Profit Drain",
      "compliance_title": "East African Compliance",
      "compliance_sub": "Certified experts in KRA, eTIMS, and regional tax laws.",
      "bridge_whatsapp": "WhatsApp/ERP Integration",
      "bridge_whatsapp_desc": "Capture data where the team already talks. No more manual entry.",
      "bridge_meeting_desc": "Real-time 'Who Sold What' dashboard. Monday meetings take 15 minutes.",
      "bridge_bank": "Manual-Bank-Workflow",
      "bridge_bank_desc": "Standardized processes for bank confirmations without needing APIs.",
      "bridge_tax_desc": "Built-in KRA eTIMS integration and tax optimization advisory.",
      "calc_drain_desc": "This is the 'Profit Drain' caused by human error, manual checking, and operational silos.",
      "calc_cta": "Stop the Leakage Now",
      "tax_deduction_title": "ERP Software is Tax Deductible",
      "tax_deduction_sub": "Under Kenyan law, ERP software qualifies for a 20% annual wear and tear allowance.",
      "etims_direct_title": "Issue eTIMS Directly from Your Software",
      "etims_direct_sub": "Issue eTIMS on behalf of your suppliers and ask them to confirm using KRA's new buyer-initiated invoicing.",
      "offline_title": "Invoicing During Downtime",
      "offline_sub": "With VSCU integration, invoicing continues during internet downtime, transmitting once connectivity is restored.",
      "penalty_title": "The Cost of Non-Compliance",
      "penalty_sub": "Fines up to KSh 2,000,000 and disallowed expenses can cripple your business.",
      "missing_payments_title": "Missing Payment Reconciliation",
      "missing_payments_sub": "We help reconcile missing payments made via ITMS, CCRS, and direct credits to CBK during system migrations."
    }
  },
  sw: {
    translation: {
      "hero": "Acha Kuendesha Biashara Yako ya $1M+ kwa Data ya Mauzo Isiyo na Uwazi na Karatasi za Mwongozo.",
      "sub": "Okoa operesheni zako kutoka kwa mifumo isiyoaminika. VivaERP inakupa mwonekano kamili wa mauzo, uzingatiaji wa KRA, na Chanzo Kimoja cha Ukweli.",
      "kra_trap_title": "Mtego wa Uzingatiaji wa KRA",
      "kra_trap_sub": "Data iliyotenganishwa si maumivu ya kichwa tu—ni dhima. Wakati mauzo yako, benki, na rekodi za kodi hazizungumzi, unaendesha biashara bila kuona.",
      "sales_visibility": "Mwonekano Kamili wa Mauzo",
      "sales_visibility_desc": "Ufuatiliaji wa wakati halisi wa kila kiongozi, tume, na malipo. Hakuna tena maeneo yasiyoonekana.",
      "meeting_reduction": "Punguzo la 75% la Mikutano ya Kila Wiki",
      "meeting_reduction_desc": "Asubuhi za Jumatatu zinapaswa kuchukua dakika 15, si saa 6. Pata ukweli papo hapo.",
      "integrations_title": "Ujumuishaji wa Asili wa Afrika Mashariki",
      "reconcile": "Uokoaji wa Usuluhishi wa Mwongozo",
      "tax": "Uzingatiaji wa Kodi (eTIMS)",
      "meeting": "Maliza Mikutano ya Saa 6",
      "cta": "Omba Ukaguzi wa Biashara",
      "chaos_title": "Ramani ya Machafuko",
      "chaos_sub": "Kwa nini biashara za $1M+ Afrika Mashariki zinapata shida kukua.",
      "bridge_title": "Daraja la Veritas",
      "bridge_sub": "Kusanifisha mtiririko wa kazi unaozingatia binadamu.",
      "calc_title": "Kikokotoo cha Uvujaji na Usuluhishi",
      "calc_sub": "Kokotoa gharama iliyofichwa ya operesheni za mwongozo.",
      "rev_label": "Mapato ya Kila Mwezi (USD)",
      "days_label": "Siku Zinazotumika Kwenye Usuluhishi",
      "result_label": "Makadirio ya Upotezaji wa Faida wa Kila Mwaka",
      "compliance_title": "Uzingatiaji wa Afrika Mashariki",
      "compliance_sub": "Wataalam walioidhinishwa katika KRA, eTIMS, na sheria za kodi za kikanda.",
      "bridge_whatsapp": "Ujumuishaji wa WhatsApp/ERP",
      "bridge_whatsapp_desc": "Nasa data ambapo timu tayari inazungumza. Hakuna tena uingizaji wa mwongozo.",
      "bridge_meeting_desc": "Dashibodi ya wakati halisi ya 'Nani Aliuza Nini'. Mikutano ya Jumatatu inachukua dakika 15.",
      "bridge_bank": "Mtiririko wa Kazi wa Benki ya Mwongozo",
      "bridge_bank_desc": "Michakato iliyosanifishwa ya uthibitishaji wa benki bila kuhitaji API.",
      "bridge_tax_desc": "Ujumuishaji wa ndani wa KRA eTIMS na ushauri wa uboreshaji wa kodi.",
      "calc_drain_desc": "Huu ni 'Upotezaji wa Faida' unaosababishwa na makosa ya kibinadamu, ukaguzi wa mwongozo, na maghala ya operesheni.",
      "calc_cta": "Acha Uvujaji Sasa"
    }
  },
  am: {
    translation: {
      "hero": "ንግድዎን ከስራ መመሰቃቀል የሚታደገው ERP።",
      "sub": "የ$1M+ ንግድዎን በዋትስአፕ እና በ'Digital Duct-Tape' መምራት ያቁሙ። VivaERP ለምስራቅ አፍሪካ መሪዎች አንድ የታመነ የሁኔታዎች ምንጭ ይሰጣል።",
      "reconcile": "የሂሳብ ማስታረቅ መፍትሄ",
      "tax": "የግብር ተገዢነት",
      "meeting": "የ6 ሰአት ስብሰባዎችን ያስቀሩ",
      "cta": "የንግድ ኦዲት ይጠይቁ",
      "chaos_title": "የግርግር ካርታ",
      "chaos_sub": "ለምን በምስራቅ አፍሪካ ያሉ ትላልቅ ንግዶች ለማደግ ይቸገራሉ።",
      "bridge_title": "የቬሪታስ ድልድይ",
      "bridge_sub": "ሰውን ማእከል ያደረገ የስራ ሂደትን ደረጃውን የጠበቀ ማድረግ።",
      "calc_title": "የገቢ ፍሳሽ እና የሂሳብ ማስታረቅ ማስያ",
      "calc_sub": "በእጅ የሚሰሩ ስራዎች ድብቅ ወጪን ያሰሉ።",
      "rev_label": "ወርሃዊ ገቢ (USD)",
      "days_label": "ለሂሳብ ማስታረቅ የሚፈጅ ቀናት",
      "result_label": "የሚገመት አመታዊ የትርፍ ኪሳራ",
      "compliance_title": "የምስራቅ አፍሪካ ተገዢነት",
      "compliance_sub": "ንግድዎን ከስራ መመሰቃቀል የሚታደገው ERP።",
      "kra_trap_title": "የKRA ተገዢነት ወጥመድ",
      "kra_trap_sub": "የተቆራረጠ መረጃ ራስ ምታት ብቻ አይደለም - ተጠያቂነትም ነው። ሽያጭዎ፣ ባንክዎ እና የታክስ መዝገቦችዎ የማይገናኙ ከሆነ በጭፍን እየነዱ ነው።",
      "sales_visibility": "የተሟላ የሽያጭ ታይነት",
      "sales_visibility_desc": "የእያንዳንዱን መሪ፣ ኮሚሽን እና ክፍያ የእውነተኛ ጊዜ ክትትል። ከእንግዲህ ጭፍን ቦታዎች የሉም።",
      "meeting_reduction": "የሳምንታዊ ስብሰባዎች በ75% መቀነስ",
      "meeting_reduction_desc": "የሰኞ ጥዋት ስብሰባዎች 15 ደቂቃ እንጂ 6 ሰአት መውሰድ የለባቸውም። እውነቱን ወዲያውኑ ያግኙ።",
      "integrations_title": "የምስራቅ አፍሪካ የክፍያ ውህደቶች",
      "calc_drain_desc": "ይህ በሰው ስህተት፣ በእጅ መፈተሽ እና በስራ መከፋፈል ምክንያት የሚመጣ 'የትርፍ ፍሳሽ' ነው።",
      "calc_cta": "አሁን ፍሳሹን ያቁሙ"
    }
  },
  fr: {
    translation: {
      "hero": "Arrêtez de gérer votre entreprise de plus d'un million de dollars sur des données de vente aveugles et de la paperasse manuelle.",
      "sub": "Sauvez vos opérations des systèmes peu fiables. VivaERP vous offre une visibilité totale sur les ventes, la conformité KRA et une source unique de vérité.",
      "kra_trap_title": "Le piège de la conformité KRA",
      "kra_trap_sub": "Des données déconnectées ne sont pas seulement un casse-tête, c'est une responsabilité. Lorsque vos ventes, votre banque et vos dossiers fiscaux ne communiquent pas, vous pilotez à vue.",
      "sales_visibility": "Visibilité totale des ventes",
      "sales_visibility_desc": "Suivi en temps réel de chaque prospect, commission et paiement. Plus de zones d'ombre.",
      "meeting_reduction": "Réduction de 75% des réunions hebdomadaires",
      "meeting_reduction_desc": "Le lundi matin devrait prendre 15 minutes, pas 6 heures. Obtenez la vérité instantanément.",
      "integrations_title": "Intégrations natives en Afrique de l'Est",
      "reconcile": "Sauvetage de la réconciliation manuelle",
      "tax": "Conformité fiscale (eTIMS)",
      "meeting": "Tuez la réunion de 6 heures",
      "cta": "Demander un audit d'entreprise",
      "chaos_title": "La carte du chaos",
      "chaos_sub": "Pourquoi les entreprises de plus d'un million de dollars en Afrique de l'Est ont du mal à se développer.",
      "bridge_title": "Le pont VivaERP",
      "bridge_sub": "Standardiser le flux de travail centré sur l'humain.",
      "calc_title": "Calculateur de fuites et de réconciliation",
      "calc_sub": "Calculez le coût caché des opérations manuelles.",
      "rev_label": "Revenu mensuel (USD)",
      "days_label": "Jours passés sur la réconciliation",
      "result_label": "Perte de profit annuelle estimée",
      "compliance_title": "Conformité en Afrique de l'Est",
      "compliance_sub": "Experts certifiés en KRA, eTIMS et lois fiscales régionales.",
      "calc_drain_desc": "C'est la 'fuite de profit' causée par l'erreur humaine, le contrôle manuel et les silos opérationnels.",
      "calc_cta": "Arrêtez la fuite maintenant"
    }
  },
  ar: {
    translation: {
      "hero": "توقف عن إدارة مؤسستك التي تبلغ قيمتها مليون دولار فأكثر عبر بيانات مبيعات عمياء وأعمال ورقية يدوية.",
      "sub": "أنقذ عملياتك من الأنظمة غير الموثوقة. يمنحك VivaERP رؤية كاملة للمبيعات، والامتثال لـ KRA، ومصدراً واحداً للحقيقة.",
      "kra_trap_title": "فخ الامتثال الضريبي (KRA)",
      "kra_trap_sub": "البيانات المنفصلة ليست مجرد صداع، بل هي مسؤولية قانونية. عندما لا تتواصل سجلات مبيعاتك وبنكك وضرائبك، فأنت تعمل بشكل أعمى.",
      "sales_visibility": "رؤية كاملة للمبيعات",
      "sales_visibility_desc": "تتبع في الوقت الفعلي لكل عميل محتمل وعمولة ودفع. لا مزيد من النقاط العمياء.",
      "meeting_reduction": "تقليل الاجتماعات الأسبوعية بنسبة 75%",
      "meeting_reduction_desc": "يجب أن تستغرق صباحات الاثنين 15 دقيقة، وليس 6 ساعات. احصل على الحقيقة فوراً.",
      "integrations_title": "تكاملات شرق إفريقيا الأصلية",
      "reconcile": "إنقاذ التسوية اليدوية",
      "tax": "الامتثال الضريبي (eTIMS)",
      "meeting": "تخلص من الاجتماعات التي تستغرق 6 ساعات",
      "cta": "طلب تدقيق للأعمال",
      "chaos_title": "خريطة الفوضى",
      "chaos_sub": "لماذا تواجه الشركات التي تزيد قيمتها عن مليون دولار في شرق إفريقيا صعوبة في التوسع.",
      "bridge_title": "جسر VivaERP",
      "bridge_sub": "توحيد سير العمل المتمحور حول الإنسان.",
      "calc_title": "حاسبة التسرب والتسوية",
      "calc_sub": "احسب التكلفة الخفية للعمليات اليدوية.",
      "rev_label": "الإيرادات الشهرية (USD)",
      "days_label": "الأيام التي تقضيها في التسوية",
      "result_label": "خسارة الأرباح السنوية المقدرة",
      "compliance_title": "الامتثال في شرق إفريقيا",
      "compliance_sub": "خبراء معتمدون في KRA و eTIMS وقوانين الضرائب الإقليمية.",
      "calc_drain_desc": "هذا هو 'تسرب الأرباح' الناتج عن الخطأ البشري والتدقيق اليدوي والصوامع التشغيلية.",
      "calc_cta": "أوقف التسرب الآن"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
