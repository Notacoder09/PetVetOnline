import React from 'react';

const AFFILIATE_URL = "https://afflat3c2.com/trk/lnk/C0D1E8E4-CA5B-4BE0-8D1E-274667C72991/?o=21098&c=918271&a=779726&k=D930AC5A038E7A43BE4A632737DD63BE&l=22029";
const BRAND_NAME = "PetHelpLine";
const MAIN_OFFER_NAME = "Instant Vet Chat for Worried Pet Parents";

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
    "Late‑night drives across town with a scared, possibly nauseous dog in the back seat.",
    "Crowded waiting rooms, long lines, and no clear idea how long you'll be there.",
    "You're panicking, your dog is miserable, and you still don't know if it's truly life‑threatening.",
    "Symptoms can escalate while you're unsure what to do.",
  ],
  online: [
    "Licensed vets respond in minutes, 24/7 — even at 2 AM.",
    "A vet helps you decide if it's ER‑urgent or safe to monitor at home.",
    "May save you an unnecessary $500+ emergency visit.",
    "Your dog stays where they feel safest: at home, with you, while you get answers.",
    "Immediate guidance so you're not guessing during critical moments.",
  ],
};

const trustBadges = [
  "Verified Veterinarians",
  "24/7 Immediate Access",
  "Secure & Private Chat",
  "Trusted by Millions",
  "Reviewed by Pet Owners",
  "Typical reply < 2 minutes",
];

const testimonials = [
  {
    name: "Amanda R.",
    dog: "Bella, 3-year-old Beagle",
    caseType: "Ate something possibly toxic",
    story:
      "Bella suddenly started vomiting and wouldn't settle. I was ready to bolt to the ER. The online vet walked me through questions and helped me realize it could wait until morning. It saved us money and a ton of panic.",
    featured: true,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face&auto=format",
    urgencyTag: "Avoided unnecessary ER trip",
  },
  {
    name: "James T.",
    dog: "Rocky, 1-year-old Lab mix",
    caseType: "Swallowed part of a toy",
    story:
      "Rocky swallowed part of a toy and I was freaking out. I sent a photo and the vet explained exactly what to watch for and when to go in. Having clear guidance in minutes was priceless.",
    featured: false,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    urgencyTag: "Resolved early",
  },
  {
    name: "Danielle P.",
    dog: "Luna, 6-year-old Husky",
    caseType: "Acting strange & whining",
    story:
      "Luna was acting off and whining, but I didn't know if it was serious. The vet chat helped me rule out a few scary things and gave me a step‑by‑step plan. I finally felt like I wasn't guessing alone.",
    featured: false,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
    urgencyTag: "Identified urgency quickly",
  },
  {
    name: "Sara L.",
    dog: "Milo, 4-year-old Golden Retriever",
    caseType: "Vomiting foam with specks of blood",
    story:
      "Milo started vomiting foam with a little blood and my heart dropped. Within minutes, the vet explained what might be happening, what to watch closely, and the exact moment we should head to the ER if things changed. That calm, clear plan turned a meltdown into something we could handle.",
    featured: false,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
    urgencyTag: "Resolved early",
  },
  {
    name: "Michael C.",
    dog: "Max, 5-year-old German Shepherd",
    caseType: "Rapid breathing & lethargy",
    story:
      "Max was getting worse by the hour — breathing faster, not moving much. I didn't know if it was an emergency or if I was overreacting. The online vet asked specific questions and immediately told me to go to the ER right away. Turned out he had a serious issue that needed immediate care. The vet's quick assessment probably saved his life.",
    featured: false,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    urgencyTag: "Identified urgency quickly",
  },
];

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
      "Yes. One of the most valuable parts of this service is helping you decide if it's an emergency. If the vet thinks your dog needs hands‑on care, they'll tell you clearly and urgently.",
  },
  {
    question: "What if I'm not sure how urgent my dog's symptoms are?",
    answer:
      "That's exactly what the vet helps with. They guide you through what to watch for and whether you should seek emergency care immediately or monitor at home.",
  },
];

const PetVetBridgePage = () => {
  const handlePrimaryClick = () => {
    window.location.href = AFFILIATE_URL;
  };

  const handleScroll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  const symptomOptions = [
    { label: "Vomiting or nausea", icon: "🤢" },
    { label: "Ate chocolate or toxin", icon: "🍫" },
    { label: "Diarrhea or blood in stool", icon: "❤️‍🩹" },
    { label: "Won't eat or drink", icon: "⚠️" },
    { label: "Limping, pain, or injury", icon: "💉" },
    { label: "Something just feels off", icon: "🐶" },
  ];

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-sky-50 to-white border border-emerald-100 shadow-xl shadow-emerald-100/70">
          {/* Decorative medical gradient panel */}
          <div className="pointer-events-none absolute inset-y-0 right-[-10%] w-1/2 bg-gradient-to-bl from-emerald-200/60 via-sky-100/40 to-white opacity-70 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center gap-10 p-6 sm:p-10">
            {/* Left: Copy + CTA */}
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-emerald-800 uppercase bg-emerald-50/80 border border-emerald-100 rounded-full px-3 py-1 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {BRAND_NAME} · {MAIN_OFFER_NAME}
                </span>
              </p>
              <h1 className="text-3xl sm:text-[2.4rem] lg:text-[2.8rem] font-bold leading-tight text-slate-900 tracking-tight">
                Is Your Dog Vomiting, Acting Strange, or Just &quot;Not Right&quot;?
              </h1>
              <p className="text-base sm:text-lg text-slate-700/90 max-w-xl">
                Talk to a licensed vet online in minutes — before you spend hundreds at the emergency clinic or lose sleep
                wondering if you&apos;re missing something serious.
              </p>
              <p className="text-sm text-amber-700/80 bg-amber-50/60 border border-amber-100 rounded-lg px-3 py-2 max-w-xl">
                If your dog&apos;s symptoms worsen quickly, getting guidance now can help you decide what to do.
              </p>

              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 text-emerald-500">✔️</span>
                  <span>Instant answers from verified veterinarians</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-emerald-500">✔️</span>
                  <span>Simple chat — explain symptoms in plain language</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-emerald-500">✔️</span>
                  <span>Available 24/7, no appointments</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full">
                <button
                  onClick={handlePrimaryClick}
                  className="group w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-base sm:text-lg shadow-lg shadow-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    Describe Your Dog&apos;s Symptoms
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </button>
                <button
                  onClick={handleScroll}
                  className="text-emerald-800 text-xs sm:text-sm underline underline-offset-4 hover:text-emerald-900 flex items-center gap-1"
                >
                  See how the vet chat works
                  <span aria-hidden="true">↓</span>
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-700 text-xs font-medium w-fit">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Vet is online now</span>
                </div>
                <p className="text-xs text-slate-500">
                  Licensed vets respond within minutes — availability can vary during peak hours.
                </p>
                <p className="text-xs text-slate-500">
                  You&apos;ll answer a few quick questions, then be connected with a licensed veterinarian in a secure,
                  private chat.
                </p>
              </div>
            </div>

            {/* Right: Chat mockup */}
            <div className="flex-1 w-full md:w-auto">
              <div className="mx-auto max-w-xs sm:max-w-sm rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl shadow-emerald-200/70 border border-emerald-100 p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center shadow-md ring-2 ring-emerald-200">
                      <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&auto=format"
                        alt="Dr. Sarah, DVM"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-white">
                        ✓
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Dr. Sarah, DVM</p>
                      <p className="text-[11px] text-slate-500">Emergency vet · Online now</p>
                      <p className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50/80 rounded-full px-2 py-0.5 mt-1">
                        <span>🛡️</span>
                        <span>Vet verified</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-right gap-1">
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                      Live vet chat
                    </span>
                    <span className="text-[10px] text-slate-400">Typical reply &lt; 2 minutes</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-emerald-50 text-slate-800 px-3 py-2 shadow-sm shadow-emerald-100">
                    <p>Hi, I&apos;m Dr. Sarah. Tell me what&apos;s going on with your dog.</p>
                    <p className="mt-1 text-[10px] text-slate-400">10:41 PM</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[88%] rounded-2xl rounded-br-sm bg-slate-900 text-white px-3 py-2 shadow-sm shadow-slate-900/40">
                      <p>
                        He&apos;s been vomiting and I saw a little blood. I&apos;m scared it might be something serious.
                      </p>
                      <p className="mt-1 text-[10px] text-slate-300 text-right">10:42 PM</p>
                    </div>
                  </div>
                  <div className="max-w-[86%] rounded-2xl rounded-bl-sm bg-emerald-50 text-slate-800 px-3 py-2 shadow-sm shadow-emerald-100/80">
                    <p>
                      Thank you for sharing that. I&apos;ll ask a few quick questions so we can decide together if this is an
                      emergency or if you can monitor at home.
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">10:43 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-200 animate-pulse" />
                  </div>
                  <p className="text-[10px] text-slate-500 ml-1">Vet is typing…</p>
                </div>
                <p className="text-[10px] text-slate-400 text-center">
                  This is a visual example. Actual live vets typically reply in under 2 minutes.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* SYMPTOM SELECTOR GRID */}
        <section className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              What&apos;s Going On With Your Dog?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl mx-auto">
              Tap the closest option — you&apos;ll be able to explain everything in your own words once you&apos;re inside the
              vet chat.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {symptomOptions.map((symptom) => (
              <button
                key={symptom.label}
                onClick={handlePrimaryClick}
                className="group flex flex-col items-center justify-center gap-1 text-xs sm:text-sm px-3 sm:px-4 py-2.5 rounded-2xl border border-emerald-100/70 bg-white/90 hover:bg-emerald-50 text-slate-800 font-medium shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span className="text-lg sm:text-xl">
                  {symptom.icon}
                </span>
                <span className="text-[11px] sm:text-xs text-center leading-snug">
                  {symptom.label}
                </span>
              </button>
            ))}
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 text-center">
            Choosing your dog&apos;s main symptom helps the vet determine urgency faster.
          </p>
        </section>

        {/* TRUST BADGES */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((label, index) => {
              const icon =
                index === 0
                  ? "✔️"
                  : index === 1
                  ? "🕒"
                  : index === 2
                  ? "🔒"
                  : index === 3
                  ? "⭐"
                  : index === 4
                  ? "🐾"
                  : "⚡";
              return (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-emerald-100 shadow-sm shadow-emerald-100/60 text-[11px] sm:text-xs text-slate-700"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t border-emerald-100/70" />
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              How the Online Vet Chat Works (About 2 Minutes)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              It&apos;s the same kind of calm, structured conversation you&apos;d have in an exam room — just from your phone.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 bg-gradient-to-br from-emerald-100/40 via-transparent to-sky-100/40 blur-3xl opacity-70" />
            <div className="relative grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-white/95 rounded-2xl border border-emerald-100/80 p-6 shadow-sm shadow-emerald-100/70 hover:shadow-md hover:-translate-y-1 transition-transform"
                >
                  <div className="relative w-11 h-11 mb-4 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 text-white font-semibold flex items-center justify-center shadow-lg shadow-emerald-400/60">
                    {index + 1}
                    <div className="absolute inset-0 rounded-full border border-white/40" />
                    <div className="absolute inset-0 rounded-full ring-2 ring-emerald-300/30 motion-safe:animate-pulse" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-slate-900 mb-2 text-center md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-center md:text-left">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 text-center">
            The process is quick, safe, and overseen by licensed professionals.
          </p>
          <p className="text-[11px] sm:text-xs text-amber-700/80 text-center max-w-2xl mx-auto bg-amber-50/50 border border-amber-100 rounded-lg px-4 py-2">
            Getting early advice can prevent costly or dangerous delays.
          </p>
        </section>

        {/* WHY ONLINE VETS FIRST */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Before You Rush to the ER, Talk to an Online Vet First
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Emergency vets are life‑saving — but they&apos;re also expensive, overwhelming, and not always necessary. A
              quick online chat can help you decide the right move.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 via-white to-rose-50 rounded-2xl border border-rose-100 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="text-rose-500 text-xl">❌</span>
                <span>Emergency vet stress</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex gap-3">
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
                {comparison.online.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-emerald-500 text-base">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-50/80 via-yellow-50/60 to-amber-50/80 border border-amber-200/60 rounded-2xl p-4 text-center">
            <p className="text-sm text-amber-800/90 font-medium">
              Even mild symptoms can become urgent unexpectedly — checking early is the safest option.
            </p>
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
          <p className="text-center font-semibold text-slate-700 text-sm sm:text-base">
            This is NOT a replacement for emergency care — but it can help you know when it truly is an emergency.
          </p>
        </section>

        {/* SOCIAL PROOF TESTIMONIALS */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Real Pet Parents, Real Peace of Mind
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              These are the moments when you don&apos;t want to guess alone. Here&apos;s what other pet parents experienced.
            </p>
          </div>

          {/* Featured testimonial */}
          {featuredTestimonial && (
            <div className="bg-white/95 rounded-3xl border-2 border-emerald-400/80 shadow-lg shadow-emerald-200/70 p-6 sm:p-7 flex flex-col md:flex-row gap-5">
              <div className="flex items-start gap-3 sm:gap-4 md:w-1/3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center shadow-md ring-2 ring-emerald-200">
                  <img
                    src={featuredTestimonial.avatarUrl}
                    alt={featuredTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{featuredTestimonial.dog}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800">
                      <span>✅</span>
                      <span>Verified pet parent</span>
                    </span>
                    {featuredTestimonial.urgencyTag && (
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        <span>{featuredTestimonial.urgencyTag}</span>
                      </span>
                    )}
                    {featuredTestimonial.caseType && (
                      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-50">
                        <span>Case:</span>
                        <span>{featuredTestimonial.caseType}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-emerald-500 text-3xl leading-none mb-2">&ldquo;</div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {featuredTestimonial.story}
                </p>
              </div>
            </div>
          )}

          {/* Other testimonials */}
          <div className="grid gap-6 md:grid-cols-3">
            {regularTestimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/95 rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform flex flex-col gap-3"
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
                    <p className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.dog}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.urgencyTag && (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      <span>{t.urgencyTag}</span>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-800">
                    <span>✅</span>
                    <span>Verified pet parent</span>
                  </span>
                  {t.caseType && (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-50">
                      <span>Case:</span>
                      <span>{t.caseType}</span>
                    </span>
                  )}
                </div>
                <div className="mt-1">
                  <div className="text-emerald-500 text-2xl leading-none mb-1">"</div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {t.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VET HIGHLIGHT STRIP */}
        <section className="space-y-5">
          <p className="text-center text-sm sm:text-base font-medium text-slate-800">
            The vets you&apos;ll meet are real people with years of experience helping worried pet parents.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Dr. Sarah K., DVM",
                role: "Emergency Vet · 7 years",
                icon: "🩺",
                avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&auto=format",
              },
              {
                name: "Dr. Miguel T., DVM",
                role: "Internal Medicine · Complex cases",
                icon: "🎓",
                avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face&auto=format",
              },
              {
                name: "Dr. Jenna L., DVM",
                role: "General Practice · Everyday concerns",
                icon: "🐾",
                avatarUrl: "https://images.pexels.com/photos/19218034/pexels-photo-19218034.jpeg",
              },
            ].map((vet) => (
              <div
                key={vet.name}
                className="bg-white/95 rounded-2xl border border-emerald-100 shadow-sm px-4 py-4 text-sm text-slate-800 flex flex-col items-center text-center gap-2"
              >
                <div className="h-16 w-16 rounded-full overflow-hidden bg-emerald-50 flex items-center justify-center shadow-md ring-2 ring-emerald-200">
                  <img
                    src={vet.avatarUrl}
                    alt={vet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-slate-900 text-sm">{vet.name}</p>
                <p className="text-[11px] text-slate-600">{vet.role}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 text-center">
            All vets undergo strict verification and licensing checks before answering questions on the platform.
          </p>
          <p className="text-[11px] sm:text-xs text-slate-700 font-medium text-center">
            Our vets handle urgent symptom assessments every day.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Common Questions Before You Click &quot;Chat&quot;
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white/95 rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <dt className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-slate-500 text-sm">❓</span>
                    <p className="font-semibold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </p>
                  </div>
                  <span className="hidden sm:inline text-[11px] text-slate-400">
                    Tap to read
                  </span>
                </dt>
                <dd className="mt-2 pt-2 border-t border-slate-100 text-sm text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* FINAL CTA */}
        <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 px-5 py-7 sm:px-8 sm:py-9 text-center text-white shadow-xl shadow-emerald-500/50">
          <h2 className="text-2xl sm:text-[1.7rem] font-bold tracking-tight">
            Don&apos;t Wait. Get a Vet&apos;s Guidance Before Symptoms Worsen.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Early advice can prevent unnecessary panic — or help you avoid a dangerous delay.
          </p>

          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-emerald-100">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-800/40 border border-emerald-300/40">
                <span>🛡️</span>
                <span>Licensed professionals only</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-800/40 border border-emerald-300/40">
                <span>🔒</span>
                <span>Private &amp; secure</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-800/40 border border-emerald-300/40">
                <span>🐶</span>
                <span>Clear next steps for your dog</span>
              </span>
            </div>

            <div className="w-full sm:w-auto max-w-md mx-auto mt-2">
              <button
                onClick={handlePrimaryClick}
                className="group w-full bg-white text-emerald-800 font-semibold text-base sm:text-lg py-4 rounded-xl shadow-lg shadow-emerald-900/30 hover:bg-emerald-50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  Chat with a Vet Now
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
              <p className="mt-2 text-[11px] sm:text-xs text-emerald-100">
                Licensed vet available right now · Replies in minutes
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-emerald-200/80">
                Answer a few quick questions to be matched with the right veterinarian for your dog&apos;s situation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur border-t border-slate-200 shadow-2xl shadow-slate-900/15 p-3 flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
            <span className="text-lg">🐶</span>
            <span>Worried about your dog?</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Instant help available · Don&apos;t wait and worry
          </p>
        </div>
        <button
          onClick={handlePrimaryClick}
          className="group bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-md shadow-emerald-400/40 flex items-center gap-1.5 animate-pulse"
        >
          <span>Chat with a Vet</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default PetVetBridgePage;

