import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero": "Stop Running Your Business on Chaos. Automate with Clarity.",
      "hero_erp": "One Full ERP: Compliance + Total Visibility.",
      "sub": "We bridge the gap between high-speed communication and ERP structure. Single source of truth for Sales, Warehouse, and Compliance.",
      "meeting_hook": "Kill the 6-Hour Meeting.",
      "bank_hook": "No Bank API? No Problem. We automate manual reconciliation.",
      "human_bridge": "We don't ban WhatsApp—we integrate it.",
      "zero_api": "Manual PDF or branch visit? We optimize workflows without requiring bank APIs.",
      "feature_bank_desc": "Automated reconciliation for Kenyan payment methods. Manual PDF or branch visit? We optimize workflows without requiring bank APIs.",
      "hero_dual_1": "KRA eTIMS compliant",
      "hero_dual_2": "Sales, commissions & inventory in one place",
      "leakage": "Revenue Leakage",
      "ssot": "Premium Solution for Kenyan SMEs",
      "audit": "Book a Demo",
      "calc_roi": "Calculate ROI",
      "solutions": "Solutions",
      "calculator": "ROI Calculator",
      "tax_benefits": "Tax Benefits",
      "demo": "Book a Demo",
      "state_of_market_title": "Why Kenyan SMEs Are Struggling",
      "state_of_market_1": "eTIMS has made compliance mandatory, but the complexity is real. Business owners juggle spreadsheets, the KRA portal, and paper receipts—and one missed deadline or wrong figure can trigger penalties that hurt. You built your business with your hands; you shouldn't lose sleep over a portal.",
      "state_of_market_2": "The risk of KRA penalties isn't just a fine—it's disallowed expenses, double taxation, and a damaged reputation. Manual entry means errors. Errors mean audits. And audits mean time and money you'd rather spend growing.",
      "state_of_market_3": "When you grew from 3 people to 12 or more, something broke. Invoices sit in someone's inbox. Stock doesn't match the books. Payments get \"held\" because the paperwork isn't right. That's leakage—and it's solvable with one system that ties sales, inventory, projects, and tax together.",
      "pillars_title": "The Three Pillars",
      "pillars_subtitle": "Built for Kenyan SMEs who need compliance and control, not more complexity.",
      "pillar1_title": "Bulletproof Compliance",
      "pillar1_items": ["VSCU/OSCU handshake with KRA—receipts sync automatically, no manual uploads.", "Automated eTIMS receipts from every sale and purchase inside ERPNext.", "Reverse Invoicing for informal labour: capture casual workers and generate compliant documentation."],
      "pillar2_title": "Total Operational Visibility",
      "pillar2_items": ["Real-time inventory across stores and sites—no more \"someone said it was in the store\".", "Project costing for Mjengo and site work: materials, labour, and margins per project.", "Live cash flow: see what's owed, what's paid, and what's stuck in approval."],
      "pillar3_title": "Locally Supported Growth",
      "pillar3_items": ["On-site training so your staff actually use the system, not just log in once.", "24/7 Kenyan-based support: when KRA changes a rule, we update your setup.", "No ticket queues to overseas teams—your growth is our priority."],
      "comparison_title": "KRA Portal vs. Your Own Powerful ERP",
      "comparison_sub": "Why a custom ERP beats the public portal for a growing business.",
      "comparison_rows": [
        { "aspect": "Speed", "kra": "Manual entry, portal delays", "us": "One-click from ERPNext" },
        { "aspect": "Offline capability", "kra": "None—portal needs internet", "us": "VSCU sync when back online" },
        { "aspect": "Business intelligence", "kra": "Tax data only", "us": "Sales, inventory, projects, cash flow" },
        { "aspect": "Audit trail", "kra": "Fragmented across systems", "us": "Single source of truth" },
        { "aspect": "Staff adoption", "kra": "Extra step, often skipped", "us": "Built into daily workflow" }
      ],
      "cases_title": "Vertical-Specific Results",
      "cases_subtitle": "Real challenges, real solutions—for businesses like yours.",
      "case_contractor_title": "The Contractor",
      "case_contractor_desc": "How a Mombasa-based supplier unlocked 5M KES in held payments by automating their eTIMS flow. Invoices that used to sit in email are now issued and validated in one step—payments released faster, audits avoided.",
      "case_distributor_title": "The Distributor",
      "case_distributor_desc": "How a manufacturing SME reduced stock-outs and manual accounting errors by 80%. One dashboard for inventory, orders, and purchases—no more \"we thought we had it\" or mismatched spreadsheets.",
      "roadmap_title": "Implementation Roadmap",
      "roadmap_sub": "We don't drop software and leave. We build trust step by step.",
      "roadmap_discovery": "Discovery",
      "roadmap_discovery_desc": "We learn your flow",
      "roadmap_build": "Build",
      "roadmap_build_desc": "We customize ERPNext",
      "roadmap_train": "Train",
      "roadmap_train_desc": "Your team masters the tool",
      "roadmap_sustain": "Sustain",
      "roadmap_sustain_desc": "Continuous KRA updates",
      "footer_cta": "KRA is moving to real-time. Don't let your business be left behind.",
      "footer_cta_sub": "Get a full ERP: eTIMS compliance plus real-time insight into sales, commissions, and inventory. Book a demo or calculate your ROI—and stop running on fear.",
      "footer_dual_label": "KRA compliance + full visibility into sales, commissions & inventory",
      "chaos_title": "Chaos vs. Clarity",
      "mess_title": "The Mess (Current State)",
      "veritas_title": "The Lultech Way",
      "mess_items": ["WhatsApp & Telegram as order inbox", "Paper receipts & manual filing", "Bank deposit slips & branch visits", "Excel errors & broken formulas"],
      "veritas_items": ["ERPNext dashboards in one place", "Automated sales commissions", "eTIMS & KRA compliance", "15-minute meetings, not 6-hour marathons"],
      "calc_title": "How much are you losing?",
      "calc_label": "Monthly Turnover (USD)",
      "calc_result": "Annual Recoverable Profit",
      "calc_cta": "Rescue My Operations",
      "etims": {
        "title": "Issue eTIMS Directly from Your Software",
        "desc": "Our ERPNext implementations are fully eTIMS-compliant. For VSCU solutions, invoicing can continue during internet downtime, with invoices transmitted once connectivity is restored. Invoicing via USSD (*222#) is also supported.",
        "feature1": "Real-time KRA Transmission",
        "feature2": "Offline Invoicing Support",
        "feature3": "Buyer-Initiated Invoicing"
      },
      "tax": {
        "title": "20% Annual Tax Deduction",
        "desc": "ERP software in Kenya qualifies for a 20% annual wear and tear allowance. Lower your corporate tax burden while improving efficiency.",
        "benefit1": "20% Wear & Tear Allowance",
        "benefit2": "30% Hardware Allowance",
        "benefit3": "VAT Input Credit Support"
      },
      "auditTool": {
        "title": "Operational Health Check",
        "step_of": "Step {{current}} of {{total}}",
        "revenue_question": "What is your average monthly revenue (USD)?",
        "revenue_next": "Next",
        "back": "Back",
        "q1": "Weekly hours spent in 'Update Meetings'?",
        "q2": "Are orders captured on WhatsApp/TG/IG/FB before the system?",
        "q3": "Bank recon method?",
        "q4": "Tax status?",
        "q1_0": "0–2 hours",
        "q1_1": "2–4 hours",
        "q1_2": "4–6 hours",
        "q1_3": "6+ hours",
        "q2_0": "No",
        "q2_1": "Sometimes",
        "q2_2": "Yes, most orders",
        "q2_3": "Everything is chat-first",
        "q3_0": "API or automated",
        "q3_1": "Manual PDF",
        "q3_2": "Branch visit",
        "q4_0": "Automated / compliant",
        "q4_1": "Manual Excel",
        "q4_2": "KRA eTIMS stress",
        "result_badge": "Critical Friction Detected",
        "result_title": "Your Operational Diagnostic",
        "chaos_score": "Chaos Score",
        "leaking": "Your business is leaking {{percent}}% of revenue.",
        "annual_leakage": "Est. Annual Leakage",
        "rescue_cta": "Rescue My Operations",
        "restart": "Restart Audit"
      },
      "contact": {
        "title": "Ready to Scale?",
        "subtitle": "Our team of certified ERPNext architects in Nairobi is ready to help you eliminate the mess.",
        "name": "Full Name",
        "email": "Work Email",
        "company": "Company Name",
        "message": "Message",
        "send": "Send Message"
      },
      "lultech_diff_title": "The Lultech Difference",
      "lultech_diff_subtitle": "Board-ready, KRA-safe ERPNext implementations for Kenyan SMEs.",
      "lultech_diff_items": [
        "One-button eTIMS sync: issue KRA-verified tax invoices directly from ERPNext—no manual portal work.",
        "Reverse invoicing for casuals: automate buyer-initiated invoicing so labour costs remain tax-deductible.",
        "Project-based costing for \"mjengo\": track materials, labour, and margins per site before leakage destroys profit."
      ]
    }
  },
  sw: {
    translation: {
      "hero": "Acha kutumia WhatsApp kuendesha biashara. Pata mfumo mmoja wa ukweli.",
      "sub": "Utekelezaji wa ERPNext kwa wasambazaji na watengenezaji wa Kenya. Unganisha mauzo, ghala, na uhasibu katika mfumo mmoja.",
      "leakage": "Upotevu wa Mapato",
      "ssot": "Chanzo Kimoja cha Ukweli",
      "audit": "Weka Ukaguzi wa Bure",
      "solutions": "Suluhisho",
      "calculator": "Kikokotoo cha ROI",
      "tax_benefits": "Faida za Kodi",
      "demo": "Omba Onyesho",
      "chaos_title": "Machafuko dhidi ya Uwazi",
      "mess_title": "Machafuko (Hali ya Sasa)",
      "veritas_title": "Njia ya Lultech",
      "mess_items": ["Maagizo ya WhatsApp yaliyozikwa", "Machafuko ya Telegram", "Makosa ya Excel", "Ankara za karatasi"],
      "veritas_items": ["Dashibodi za Wakati Halisi", "Kamisheni za Kiotomatiki", "Ankara za Kidijitali", "Utekelezaji wa eTIMS & KRA"],
      "calc_title": "Unapoteza kiasi gani?",
      "calc_label": "Mauzo ya Kila Mwezi (USD)",
      "calc_result": "Faida ya Mwaka Inayoweza Kurejeshwa",
      "calc_cta": "Okoa Operesheni Zangu",
      "etims": {
        "title": "Toa eTIMS Moja kwa Moja kutoka kwa Programu Yako",
        "desc": "Utekelezaji wetu wa ERPNext unatii eTIMS kikamilifu. Kwa suluhisho za VSCU, utoaji wa ankara unaweza kuendelea wakati wa hitilafu ya mtandao, na ankara zitatumwa mara tu muunganisho utakapopatikana.",
        "feature1": "Uwasilishaji wa KRA wa Wakati Halisi",
        "feature2": "Msaada wa Ankara Nje ya Mtandao",
        "feature3": "Ankara Inayoanzishwa na Mnunuzi"
      },
      "tax": {
        "title": "Punguzo la Kodi la 20% Kila Mwaka",
        "desc": "Programu ya ERP nchini Kenya inastahili posho ya 20% ya uchakavu wa kila mwaka. Punguza mzigo wako wa kodi ya shirika.",
        "benefit1": "20% Posho ya Uchakavu",
        "benefit2": "30% Posho ya Vifaa",
        "benefit3": "Msaada wa Mikopo ya VAT"
      },
      "contact": {
        "title": "Uko Tayari Kukua?",
        "subtitle": "Timu yetu ya wasanifu wa ERPNext jijini Nairobi iko tayari kukusaidia kuondoa machafuko.",
        "name": "Jina Kamili",
        "email": "Barua Pepe ya Kazi",
        "company": "Jina la Kampuni",
        "message": "Ujumbe",
        "send": "Tuma Ujumbe"
      },
      "footer_dual_label": "Uzingatiaji wa KRA + uangalizi kamili wa mauzo, kamisheni na hesabu ya bidhaa"
    }
  },
  am: {
    translation: {
      "hero": "ንግድዎን በዋትስአፕ (WhatsApp) መምራት ያቁሙ። በግልፅነት ማደግ ይጀምሩ።",
      "sub": "ለየተለያዩ ንግዶች የ ERPNext ትግበራ። የሽያጭ፣ የመጋዘን እና የሂሳብ አያያዝዎን ወደ አንድ ስርዓት ያማክሩ።",
      "leakage": "የገቢ መፍሰስ (ኪሳራ)",
      "ssot": "አንድ የሁኔታዎች ምንጭ",
      "audit": "ነፃ ኦዲት ያስይዙ",
      "solutions": "መፍትሄዎች",
      "calculator": "የትርፍ ማስያ",
      "tax_benefits": "የግብር ጥቅሞች",
      "demo": "ማሳያ ይጠይቁ",
      "chaos_title": "ውጥንቅጥ vs ግልጽነት",
      "mess_title": "ውጥንቅጥ (የአሁኑ ሁኔታ)",
      "veritas_title": "የኩልቴክ መንገድ",
      "mess_items": ["በዋትስአፕ የተቀበሩ ትዕዛዞች", "የቴሌግራም ውዥንብር", "የኤክሴል ስህተቶች", "በወረቀት ላይ የተመሰረቱ ደረሰኞች"],
      "veritas_items": ["የእውነተኛ ጊዜ ዳሽቦርዶች", "አውቶማቲክ የሽያጭ ኮሚሽኖች", "የአንድ ጠቅታ ዲጂታል ደረሰኝ", "ተገቢ የግብር መመሪያዎች መከተል"],
      "calc_title": "ምን ያህል እያጡ ነው?",
      "calc_label": "ወርሃዊ ገቢ (USD)",
      "calc_result": "ዓመታዊ ሊመለስ የሚችል ትርፍ",
      "calc_cta": "ስራዬን ይታደጉ",
      "etims": {
        "title": "ደረሰኞችን በቀጥታ ከስርዓትዎ ያውጡ",
        "desc": "የ ERPNext ትግበራዎቻችን የግብር መመሪያዎችን በመከተል የንግድዎን ውሂብ በውስጣዊ ሂደት ላይ ማስተናገድ ይረዳሉ።",
        "feature1": "የዕቃ እና የሽያጭ መረጃን በአንድ ስፍራ ማስቀመጥ",
        "feature2": "ያለ ተለመዱ እጅግ ብዙ እርምጃዎች መቀነስ",
        "feature3": "ከስርዓቱ ውስጥ የሚጀምሩ ደረሰኞች"
      },
      "tax": {
        "title": "የግብር እና ፋይናንስ ግልጽነት",
        "desc": "ትክክለኛ የፋይናንስ ሬኮርዶች ለንግድዎ ግብር መቀነስና ዕቅድ ለመውሰድ ይረዳሉ።",
        "benefit1": "የወጪ እና ገቢ ግልጽ ቅኝት",
        "benefit2": "ቀላል የፋይናንስ መመዝገብ",
        "benefit3": "ከግብር ባለሥልጣን ጋር ቀላል መግባባት"
      },
      "contact": {
        "title": "ለማደግ ዝግጁ ነዎት?",
        "subtitle": "የ ERPNext ባለሙያዎቻችን የንግድዎን ውዥንብር ለማስወገድ ሊረዱዎት ዝግጁ ናቸው።",
        "name": "ሙሉ ስም",
        "email": "የስራ ኢሜል",
        "company": "የኩባንያ ስም",
        "message": "መልዕክት",
        "send": "መልዕክት ላክ"
      },
      "footer_dual_label": "ወደ ሽያጭ፣ ኮሚሽኖች እና እቃ ሒሳብ ሙሉ ታይነት"
    }
  },
  fr: {
    translation: {
      "hero": "Arrêtez de gérer votre entreprise sur WhatsApp. Centralisez vos opérations.",
      "sub": "Implémentations ERPNext sur mesure pour les entreprises en croissance. Unifiez vos ventes, votre entrepôt et votre comptabilité.",
      "leakage": "Fuite de Revenus",
      "ssot": "Source Unique de Vérité",
      "audit": "Réserver un Audit Gratuit",
      "solutions": "Solutions",
      "calculator": "Calculateur ROI",
      "tax_benefits": "Avantages Fiscaux",
      "demo": "Demander Démo",
      "chaos_title": "Chaos vs Clarté",
      "mess_title": "Le Désordre (État Actuel)",
      "veritas_title": "La Méthode Lultech",
      "mess_items": ["Commandes WhatsApp perdues", "Confusion sur Telegram", "Erreurs Excel", "Factures papier manuelles"],
      "veritas_items": ["Tableaux de Bord en Temps Réel", "Commissions Automatisées", "Facturation en 1 Clic", "Suivi conforme aux règles fiscales"],
      "calc_title": "Combien perdez-vous ?",
      "calc_label": "Chiffre d'Affaires Mensuel (USD)",
      "calc_result": "Profit Annuel Récupérable",
      "calc_cta": "Sauver mes Opérations",
      "etims": {
        "title": "Émettez vos factures directement depuis votre logiciel",
        "desc": "Nos implémentations ERPNext aident à structurer vos flux de facturation et de reporting pour respecter les exigences de votre administration fiscale.",
        "feature1": "Transmission centralisée des données",
        "feature2": "Support de facturation même avec une connexion instable",
        "feature3": "Facturation déclenchée depuis le flux de vente"
      },
      "tax": {
        "title": "Visibilité fiscale améliorée",
        "desc": "Un ERP bien configuré réduit les erreurs manuelles et facilite la préparation de vos déclarations fiscales.",
        "benefit1": "Suivi précis des charges",
        "benefit2": "Rapports financiers clairs",
        "benefit3": "Aide à la préparation des déclarations"
      },
      "contact": {
        "title": "Prêt à Scaler ?",
        "subtitle": "Notre équipe d'architectes ERPNext est prête à vous aider à éliminer le désordre dans vos opérations.",
        "name": "Nom Complet",
        "email": "Email Professionnel",
        "company": "Nom de l'Entreprise",
        "message": "Message",
        "send": "Envoyer le Message"
      },
      "footer_dual_label": "Visibilité complète sur les ventes, commissions et stocks"
    }
  },
  ar: {
    translation: {
      "hero": "توقف عن إدارة عملك عبر واتساب. ابدأ التوسع بوضوح.",
      "sub": "تطبيقات ERPNext مخصصة للشركات النامية. قم بمركزية مبيعاتك ومستودعاتك ومحاسبتك.",
      "leakage": "تسرب الإيرادات",
      "ssot": "مصدر واحد للحقيقة",
      "audit": "احجز تدقيقاً مجانياً",
      "solutions": "الحلول",
      "calculator": "حاسبة العائد",
      "tax_benefits": "المزايا الضريبية",
      "demo": "طلب عرض",
      "chaos_title": "الفوضى مقابل الوضوح",
      "mess_title": "الفوضى (الوضع الحالي)",
      "veritas_title": "طريقة كولتيك",
      "mess_items": ["طلبات واتساب مدفونة", "ارتباك تيليجرام", "أخطاء إكسل", "فواتير ورقية يدوية"],
      "veritas_items": ["لوحات معلومات فورية", "عمولات مبيعات مؤتمتة", "فواتير رقمية بضغطة واحدة", "الالتزام بإرشادات الجهة الضريبية"],
      "calc_title": "كم تخسر؟",
      "calc_label": "الإيرادات الشهرية (دولار)",
      "calc_result": "الربح السنوي القابل للاسترداد",
      "calc_cta": "إنقاذ عملياتي",
      "etims": {
        "title": "إصدار فواتيرك مباشرة من نظامك",
        "desc": "تطبيقات ERPNext لدينا تساعدك على تنظيم الفوترة والتقارير لتتلاءم مع متطلبات هيئة الضرائب في بلدك.",
        "feature1": "تجميع البيانات في نقطة مركزية",
        "feature2": "دعم الفوترة حتى مع اتصال غير مستقر",
        "feature3": "فواتير يتم إنشاؤها من داخل مسار المبيعات"
      },
      "tax": {
        "title": "رؤية أوضح للضرائب",
        "desc": "سجلات مالية دقيقة تقلل الأخطاء وتُسهّل إعداد الإقرارات الضريبية.",
        "benefit1": "متابعة دقيقة للمصروفات",
        "benefit2": "تقارير مالية واضحة",
        "benefit3": "مساعدة في التعامل مع هيئة الضرائب"
      },
      "contact": {
        "title": "هل أنت مستعد للتوسع؟",
        "subtitle": "فريقنا من مهندسي ERPNext مستعد لمساعدتك في القضاء على الفوضى في عملياتك.",
        "name": "الاسم الكامل",
        "email": "البريد الإلكتروني للعمل",
        "company": "اسم الشركة",
        "message": "الرسالة",
        "send": "إرسال الرسالة"
      },
      "footer_dual_label": "رؤية كاملة للمبيعات والعمولات والمخزون"
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
      escapeValue: false,
    },
  });

export default i18n;
