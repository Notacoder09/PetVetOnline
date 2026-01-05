import React, { useState, useEffect } from 'react';

const AFFILIATE_URL = "https://afflat3e3.com/trk/lnk/C0D1E8E4-CA5B-4BE0-8D1E-274667C72991/?o=21094&c=918277&a=779726&k=6BDB2C5AE0354C49F6BEA312EA3FB005&l=22023";
const BRAND_NAME = "PetHelpLine";

type PetType = "dog" | "cat";

// Conversion-optimized copy for dog and cat
const COPY = {
  dog: {
    heroHeadline: "Is Your Dog Vomiting, Acting Strange, or Just 'Not Right'?",
    heroSubhead: "Get guidance from a licensed vet in minutes — before you spend hundreds at the ER or lose sleep wondering if it's urgent.",
    // 3 compact trust bullets for above the fold
    trustBullets: [
      "Licensed vets reply in under 2 minutes, 24/7",
      "Helps you decide: ER now or monitor at home",
      "Verified professionals, secure chat"
    ],
    // Urgency-focused CTA (not generic "describe symptoms")
    primaryCta: "Get Guidance Now",
    // Short testimonials for near first CTA (name + pet + 1-line outcome)
    shortTestimonials: [
      {
        name: "Amanda R.",
        pet: "Bella, 3-year-old Beagle",
        outcome: "Avoided unnecessary ER trip — saved money and panic"
      },
      {
        name: "Sara L.",
        pet: "Milo, 4-year-old Golden",
        outcome: "Got clear plan in minutes when I saw blood in vomit"
      },
      {
        name: "Michael C.",
        pet: "Max, 5-year-old German Shepherd",
        outcome: "Vet identified urgency immediately — saved his life"
      }
    ],
    // Cat-specific messaging (cats hide pain)
    catNote: null,
    // Final CTA (same text as primary)
    finalCta: "Get Guidance Now",
    stickyCta: "Get Guidance Now"
  },
  cat: {
    heroHeadline: "Is Your Cat Not Eating, Hiding, or Acting 'Off'?",
    heroSubhead: "Cats hide pain. Get guidance from a licensed vet in minutes — before panic (or an expensive ER visit).",
    trustBullets: [
      "Licensed vets reply in under 2 minutes, 24/7",
      "Helps you decide: ER now or monitor at home",
      "Verified professionals, secure chat"
    ],
    primaryCta: "Get Guidance Now",
    shortTestimonials: [
      {
        name: "Emma K.",
        pet: "Whiskers, 5-year-old Tabby",
        outcome: "Avoided panic ER trip — got clear signs to watch for"
      },
      {
        name: "David M.",
        pet: "Luna, 3-year-old Siamese",
        outcome: "Understood urgency immediately — knew when to seek care"
      },
      {
        name: "Chris T.",
        pet: "Shadow, 4-year-old Maine Coon",
        outcome: "Quick assessment was spot on — helped decide ER visit"
      }
    ],
    catNote: "Cats hide pain until it's serious. Early guidance can prevent dangerous delays.",
    finalCta: "Get Guidance Now",
    stickyCta: "Get Guidance Now"
  },
};

// Symptom options (moved far below first CTA, optional/not required)
const SYMPTOM_OPTIONS = {
  dog: [
    { label: "Vomiting / nausea", icon: "🤢", value: "vomiting" },
    { label: "Ate chocolate or toxin", icon: "🍫", value: "toxin" },
    { label: "Diarrhea / blood in stool", icon: "❤️‍🩹", value: "diarrhea" },
    { label: "Won't eat or drink", icon: "⚠️", value: "not-eating" },
    { label: "Limping / pain / injury", icon: "💉", value: "injury" },
    { label: "Something just feels off", icon: "🐶", value: "general" },
  ],
  cat: [
    { label: "Not eating / not drinking", icon: "🍽️", value: "not-eating" },
    { label: "Hiding more than usual", icon: "🙈", value: "hiding" },
    { label: "Vomiting / hairballs / nausea", icon: "🤢", value: "vomiting" },
    { label: "Litter box changes", icon: "🚽", value: "litter-box" },
    { label: "Lethargic / low energy", icon: "😴", value: "lethargic" },
    { label: "Something just feels off", icon: "🐱", value: "general" },
  ],
};

const steps = [
  {
    title: "Tell them what's going on",
    description:
      "Share what you're seeing—vomiting, blood, odd behavior, or anything else—through a quick chat with a friendly assistant.",
  },
  {
    title: "Get matched with the right vet",
    description:
      "The system routes you to a licensed veterinarian who handles your type of issue, so you're not repeating yourself.",
  },
  {
    title: "Chat, ask, and get real answers",
    description:
      "Send messages, photos, and follow-up questions until you feel confident about the next step. Most pet concerns can be triaged within minutes.",
  },
];

const comparison = {
  traditional: [
    "Emergency visit fees often start at $300–$500 before any tests or treatment.",
    "Late‑night drives across town with a scared, possibly nauseous pet in the back seat.",
    "Crowded waiting rooms, long lines, and no clear idea how long you'll be there.",
    "You're panicking, your pet is miserable, and you still don't know if it's truly life‑threatening.",
    "Symptoms can escalate while you're unsure what to do.",
  ],
  online: [
    "Licensed vets respond in minutes, 24/7 — even at 2 AM.",
    "A vet helps you decide if it's ER‑urgent or safe to monitor at home.",
    "May save you an unnecessary $500+ emergency visit.",
    "Your pet stays where they feel safest: at home, with you, while you get answers.",
    "Immediate guidance so you're not guessing during critical moments.",
  ],
};

// Full testimonials (for lower on page, optional)
const fullTestimonials = {
  dog: [
    {
      name: "Amanda R.",
      pet: "Bella, 3-year-old Beagle",
      caseType: "Ate something possibly toxic",
      story:
        "Bella suddenly started vomiting and wouldn't settle. I was ready to bolt to the ER. The online vet walked me through questions and helped me realize it could wait until morning. It saved us money and a ton of panic.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Sara L.",
      pet: "Milo, 4-year-old Golden Retriever",
      caseType: "Vomiting foam with specks of blood",
      story:
        "Milo started vomiting foam with a little blood and my heart dropped. Within minutes, the vet explained what might be happening, what to watch closely, and the exact moment we should head to the ER if things changed. That calm, clear plan turned a meltdown into something we could handle.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Michael C.",
      pet: "Max, 5-year-old German Shepherd",
      caseType: "Rapid breathing & lethargy",
      story:
        "Max was getting worse by the hour — breathing faster, not moving much. I didn't know if it was an emergency or if I was overreacting. The online vet asked specific questions and immediately told me to go to the ER right away. Turned out he had a serious issue that needed immediate care. The vet's quick assessment probably saved his life.",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    },
  ],
  cat: [
    {
      name: "Emma K.",
      pet: "Whiskers, 5-year-old Tabby",
      caseType: "Not eating for 2 days",
      story:
        "Whiskers stopped eating and was hiding under the bed. I was terrified something was seriously wrong. The online vet asked about her behavior and helped me understand it might be stress-related, but also gave me clear signs to watch for that would mean an emergency. Having that guidance saved me from a panic trip to the ER.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "David M.",
      pet: "Luna, 3-year-old Siamese",
      caseType: "Litter box issues & hiding",
      story:
        "Luna was straining in the litter box and hiding more than usual. I didn't know if it was a UTI or something worse. The vet chat helped me understand the urgency and what to do immediately. They guided me through what to watch for and when to seek emergency care. That clarity was exactly what I needed.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Chris T.",
      pet: "Shadow, 4-year-old Maine Coon",
      caseType: "Lethargic and not drinking",
      story:
        "Shadow was suddenly very lethargic and not drinking water. I was panicking because cats can get dehydrated quickly. The vet chat helped me assess the situation and gave me clear next steps. They helped me decide it was time for an ER visit, and I'm so glad I listened. The vet's quick assessment was spot on.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
    },
  ],
};

const faqs = [
  {
    question: "Is this legit?",
    answer:
      `${BRAND_NAME} partners with trusted platforms like JustAnswer where every veterinarian is verified. You're chatting with real licensed professionals.`,
  },
  {
    question: "Can they really help with vomiting, diarrhea, or weird symptoms?",
    answer:
      "Yes. They walk you through what to monitor, what photos or details matter, and whether you should head to emergency care now.",
  },
  {
    question: "What if it's an emergency?",
    answer:
      "If your pet is in immediate danger, go to an emergency vet. This service helps you decide urgency fast, but it's not a replacement for hands-on care.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Most pet parents start with a low introductory fee to open the chat. After that, the membership is optional and you can cancel whenever you want.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Absolutely. You stay in control—cancel anytime directly in your account or by contacting support. No long‑term contracts.",
  },
  {
    question: "Will the vet tell me if I should go to the ER?",
    answer:
      "Yes. One of the most valuable parts of this service is helping you decide if it's an emergency. If the vet thinks your pet needs hands‑on care, they'll tell you clearly and urgently.",
  },
];

// Pet Selector Component
const PetSelector = ({ petType, onSelect }: { petType: PetType; onSelect: (type: PetType) => void }) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <button
        onClick={() => onSelect("dog")}
        className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
          petType === "dog"
            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
            : "bg-white/90 text-slate-700 border border-emerald-100 hover:bg-emerald-50"
        }`}
        aria-pressed={petType === "dog"}
      >
        🐶 Dog
      </button>
      <button
        onClick={() => onSelect("cat")}
        className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
          petType === "cat"
            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
            : "bg-white/90 text-slate-700 border border-emerald-100 hover:bg-emerald-50"
        }`}
        aria-pressed={petType === "cat"}
      >
        🐱 Cat
      </button>
    </div>
  );
};

const PetVetBridgePage = () => {
  // Get pet type from URL param, default to "dog"
  const [petType, setPetType] = useState<PetType>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pet = params.get('pet');
      if (pet === 'cat' || pet === 'dog') {
        return pet as PetType;
      }
    }
    return 'dog';
  });

  // Update URL param when pet type changes (without page reload)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('pet', petType);
      window.history.replaceState({}, '', url.toString());
    }
  }, [petType]);

  // Primary CTA handler with Meta Pixel tracking
  // This tracks the outbound click event for LPV→Outbound CTR measurement
  const handlePrimaryClick = (symptom?: string) => {
    // Track Meta Pixel event for outbound click
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'OutboundClick',
        content_category: petType,
        value: 1,
        currency: 'USD'
      });
      // Also track as custom event for easier filtering
      (window as any).fbq('trackCustom', 'OutboundClick', {
        pet_type: petType,
        symptom: symptom || 'none'
      });
    }

    // Build affiliate URL
    let url = AFFILIATE_URL;
    if (symptom) {
      const separator = url.includes('?') ? '&' : '?';
      url = `${url}${separator}pet=${petType}&symptom=${symptom}`;
    } else {
      const separator = url.includes('?') ? '&' : '?';
      url = `${url}${separator}pet=${petType}`;
    }

    // Direct navigation (no blockers, no overlays)
    // Using window.location.href ensures real navigation that works on mobile Safari
    window.location.href = url;
  };

  const currentCopy = COPY[petType];
  const currentSymptoms = SYMPTOM_OPTIONS[petType];
  const currentTestimonials = fullTestimonials[petType];

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-slate-50 to-emerald-100 text-slate-900 min-h-screen flex flex-col pb-28 md:pb-16">
      {/* URGENCY BANNER */}
      <div className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-b border-amber-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <p className="text-center text-[11px] sm:text-xs text-amber-800/90 font-medium">
            ⚠️ Many pet owners wait too long to check symptoms — early guidance can prevent emergencies.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        
        {/* PRIMARY CONVERSION BLOCK - Above the fold, mobile-first */}
        <section className="space-y-6">
          {/* Brand + Pet Selector */}
          <div className="text-center space-y-4">
            <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-emerald-800 uppercase bg-emerald-50/80 border border-emerald-100 rounded-full px-3 py-1 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{BRAND_NAME} · Powered by JustAnswer • Verified licensed veterinarians</span>
            </p>
            <PetSelector petType={petType} onSelect={setPetType} />
          </div>

          {/* 1 Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 tracking-tight text-center">
            {currentCopy.heroHeadline}
          </h1>

          {/* 1 Short Subhead */}
          <p className="text-base sm:text-lg text-slate-700/90 text-center max-w-2xl mx-auto">
            {currentCopy.heroSubhead}
          </p>

          {/* Cat-specific note (if applicable) */}
          {currentCopy.catNote && (
            <p className="text-sm text-amber-700/80 bg-amber-50/60 border border-amber-100 rounded-lg px-4 py-2 max-w-2xl mx-auto text-center">
              {currentCopy.catNote}
            </p>
          )}

          {/* 3 Compact Trust Bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {currentCopy.trustBullets.map((bullet, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-emerald-100 shadow-sm text-sm text-slate-700"
              >
                <span className="text-emerald-500">✔️</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* 1 Strong CTA Button (above the fold on mobile) */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => handlePrimaryClick()}
              className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-lg shadow-lg shadow-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center gap-2">
                {currentCopy.primaryCta}
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </button>
            
            {/* Micro-proof line near CTA */}
            <p className="text-xs text-slate-500 text-center">
              Typical reply time: under 2 minutes · Available 24/7
            </p>

            {/* Pricing footnote (tiny, below CTA) */}
            <p className="text-[11px] text-slate-500 text-center max-w-md">
              Low intro fee to start · Cancel anytime · Review pricing on next page
            </p>
          </div>

          {/* 2-3 Short Testimonials (condensed, near first CTA) */}
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto pt-4">
            {currentCopy.shortTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/95 rounded-xl border border-emerald-100 p-4 shadow-sm text-center"
              >
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500 mb-2">{testimonial.pet}</p>
                <p className="text-xs text-slate-700 leading-relaxed">{testimonial.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPLIANCE SAFETY LINE (below primary conversion block) */}
        <div className="text-center">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto bg-slate-50/80 border border-slate-200 rounded-lg px-4 py-2">
            <strong>Not a replacement for emergency care.</strong> If your pet is in immediate danger, go to an emergency vet. This service helps you decide urgency fast.
          </p>
        </div>

        {/* HOW IT WORKS (moved below first CTA) */}
        <section id="how-it-works" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">How It Works (About 2 Minutes)</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              It's the same kind of calm, structured conversation you'd have in an exam room — just from your phone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white/95 rounded-2xl border border-emerald-100/80 p-6 shadow-sm"
              >
                <div className="relative w-11 h-11 mb-4 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 text-white font-semibold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-base text-slate-900 mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY ONLINE VETS FIRST */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Before You Rush to the ER, Talk to an Online Vet First</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Emergency vets are life‑saving — but they're also expensive, overwhelming, and not always necessary. A quick online chat can help you decide the right move.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 via-white to-rose-50 rounded-2xl border border-rose-100 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="text-rose-500 text-xl">❌</span>
                <span>Emergency vet stress</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {comparison.traditional.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-rose-500 text-base">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl border border-emerald-100 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="text-emerald-500 text-xl">✔️</span>
                <span>Online vet clarity</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {comparison.online.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-emerald-500 text-base">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="px-4 py-3 rounded-2xl bg-white/90 border border-slate-100 shadow-sm text-slate-800 text-center">
              <p className="font-semibold">Typical emergency vet visit</p>
              <p className="text-xs text-slate-500 mt-1">Exam + basic tests</p>
              <p className="mt-1 text-base font-bold text-rose-500">$500–$2,000+</p>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-500/40 text-center">
              <p className="font-semibold">Online vet chat</p>
              <p className="text-xs text-emerald-100 mt-1">Intro offers often under</p>
              <p className="mt-1 text-base font-bold">$20 to get started</p>
            </div>
          </div>
        </section>

        {/* OPTIONAL SYMPTOM SELECTOR (moved far below, not required) */}
        {/* REMOVED: Symptom selector that forces self-diagnosis. 
            Symptom triage belongs inside the vet chat, not on the bridge page.
            If kept, it must NOT be required to proceed and must NOT add hesitation.
            Keeping it here as optional for users who want to pre-select, but it's not blocking the CTA. */}
        <section className="space-y-4 pt-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900">
              {petType === "dog" ? "What's Going On With Your Dog?" : "What's Going On With Your Cat?"}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Optional: Tap a symptom to get started faster. You can also just click the button above — you'll explain everything in your own words once you're inside the vet chat.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {currentSymptoms.map((symptom) => (
              <button
                key={symptom.value}
                onClick={() => handlePrimaryClick(symptom.value)}
                className="group flex flex-col items-center justify-center gap-1 text-xs sm:text-sm px-3 sm:px-4 py-2.5 rounded-2xl border border-emerald-100/70 bg-white/90 hover:bg-emerald-50 text-slate-800 font-medium shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="text-lg sm:text-xl">{symptom.icon}</span>
                <span className="text-[11px] sm:text-xs text-center leading-snug">{symptom.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* FULL TESTIMONIALS (optional, lower on page) */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Real Pet Parents, Real Peace of Mind</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {currentTestimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white/95 rounded-2xl border border-slate-100 p-5 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center shadow-md ring-2 ring-emerald-200">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.pet}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-1">{t.caseType}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{t.story}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Common Questions</h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white/95 rounded-2xl border border-slate-100 p-5 shadow-sm"
              >
                <dt className="flex items-start gap-2 mb-2">
                  <span className="mt-0.5 text-slate-500 text-sm">❓</span>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">{faq.question}</p>
                </dt>
                <dd className="text-sm text-slate-600 ml-6">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* FINAL CTA (same text as primary, repeated) */}
        <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 px-5 py-7 sm:px-8 sm:py-9 text-center text-white shadow-xl shadow-emerald-500/50">
          <h2 className="text-2xl sm:text-[1.7rem] font-bold tracking-tight">
            Don't Wait. Get a Vet's Guidance Before Symptoms Worsen.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Early advice can prevent unnecessary panic — or help you avoid a dangerous delay.
          </p>
          <div className="mt-6">
            <button
              onClick={() => handlePrimaryClick()}
              className="group w-full sm:w-auto bg-white text-emerald-800 font-semibold text-lg py-4 px-8 rounded-xl shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center gap-2">
                {currentCopy.finalCta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </button>
            <p className="mt-3 text-xs text-emerald-100">
              Licensed vet available right now · Replies in minutes
            </p>
          </div>
        </section>
      </div>

      {/* STICKY MOBILE CTA (same primary CTA) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur border-t border-slate-200 shadow-2xl shadow-slate-900/15 p-3 flex items-center justify-between gap-3 z-50">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
            <span className="text-lg">{petType === "dog" ? "🐶" : "🐱"}</span>
            <span>Worried about your {petType}?</span>
          </div>
          <p className="text-[11px] text-slate-500">Instant help available · Don't wait and worry</p>
        </div>
        <button
          onClick={() => handlePrimaryClick()}
          className="group bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-md shadow-emerald-400/40 flex items-center gap-1.5"
        >
          <span>{currentCopy.stickyCta}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </div>
  );
};

export default PetVetBridgePage;
