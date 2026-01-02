import React from "react";

const CTA_URL =
  "https://afflat3e3.com/trk/lnk/C0D1E8E4-CA5B-4BE0-8D1E-274667C72991/?o=21094&c=918277&a=779726&k=BA8B9E962376A262096F4FB61F8DAB47&l=22023";

type CtaVariant = "primary" | "secondary";

type CTAButtonProps = {
  label: string;
  variant?: CtaVariant;
};

const CTAButton = ({ label, variant = "primary" }: CTAButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants: Record<CtaVariant, string> = {
    primary:
      "bg-orange-400 text-slate-900 shadow-glow hover:bg-orange-300 focus-visible:outline-orange-200",
    secondary:
      "bg-transparent text-orange-200 border border-orange-300/60 hover:bg-orange-300/10 focus-visible:outline-orange-200"
  };

  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </a>
  );
};

const problemPoints = [
  "Google makes everything look deadly",
  "Emergency vet clinics cost $150–$500+",
  "Most vet offices are closed when you need help most"
];

const reliefPoints = [
  "Real vets available 24/7",
  "Clear “this is serious / this is normal” answers",
  "Step-by-step guidance you can actually follow",
  "No appointments or waiting rooms",
  "Answers for $1 to start"
];

const valueStack = [
  "✔️ Answers in minutes, 24/7",
  "✔️ Flexible membership",
  "• Initial fee → cancel anytime",
  "• Continue if you love it",
  "✔️ Savings on vet daycare, grooming, training & more",
  "✔️ Discounts on prescriptions & preventatives",
  "✔️ Expert guidance BEFORE you spend hundreds at a clinic"
];

const emotionalBenefits = [
  "Stop worrying when your dog shows weird symptoms",
  "Know exactly when it’s a real emergency",
  "Save money on unnecessary visits",
  "Feel like the best, most responsible dog parent",
  "Get peace of mind anytime — even late at night"
];

const socialProof = [
  "🐾 “Saved me $350 — vet told me it was minor.”",
  "🐾 “Answered in 60 seconds. Crazy fast.”",
  "🐾 “Finally someone who actually explains things clearly.”"
];

const trustBadges = ["Google ★★★★☆ 4.8", "BBB Accredited", "TrustScore 4.6"];

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <header className="hero-grid rounded-3xl px-6 py-10 shadow-glow sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Is My Dog Okay? (24/7 Vet Answers in Minutes)
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Dog Acting Weird? A Real Vet Can Tell You Exactly What’s Wrong — In Minutes.
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Skip Google. Skip expensive emergency visits. <br className="hidden sm:block" />
            Get fast answers from a certified vet — anytime, even at 2AM.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg sm:flex-row sm:items-center">
            <div>
              <p className="flex items-center gap-2 text-sm text-emerald-300">
                <span className="text-xl">✔️</span> 10+ Dog Veterinarians are online right now
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                <span className="relative inline-flex items-center">
                  <span className="flex -space-x-3">
                    {["AL", "DG", "AN"].map((initials) => (
                      <span
                        key={initials}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white"
                      >
                        {initials}
                      </span>
                    ))}
                  </span>
                  <span className="absolute -right-1 -top-1 block h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
                </span>
                Dr. Andy, DVM — 32,838 satisfied pet owners helped
              </p>
            </div>
            <div className="sm:ml-auto">
              <CTAButton label="🔥 Tap to Ask a Dog Vet Immediately →" />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between">
            <p>⭐ Rated 4.8 ★ by pet owners</p>
            <p>✔️ Safe. Fast. 100% confidential.</p>
          </div>
        </header>

        <section className="glass-panel rounded-3xl p-6 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            ⭐ Section 2 — Pattern Interrupt Story
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-100">
            “Last night my dog kept whining and licking his paws nonstop…”
          </p>
          <p className="mt-4 text-slate-200">
            I panicked. Google told me everything from allergies to cancer.
          </p>
          <p className="mt-2 text-slate-200">
            I didn’t want to wake anyone or spend $300 at the emergency vet.
          </p>
          <p className="mt-2 text-slate-200">I tried JustAnswer Dog Vets…</p>
          <p className="mt-2 text-slate-100">
            Within 2 minutes, a real vet replied:
            <br />
            “Totally normal. Here’s what to check and what to do next.”
          </p>
          <p className="mt-2 font-semibold text-emerald-200">Instant peace of mind.</p>
          <div className="mt-6">
            <CTAButton label="👉 See how fast the vet replies" variant="secondary" />
          </div>
        </section>

        <section className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            ⭐ Section 3 — Why Your Pet Needs This
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xl font-semibold text-white">The Problem (Agitate the fear lightly)</p>
              <p className="mt-3 text-sm text-slate-300">
                When your dog acts strange, you get hit with 3 problems:
              </p>
              <ul className="mt-4 space-y-2 text-base text-slate-100">
                {problemPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-orange-300">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <p className="text-xl font-semibold text-white">The Relief (Position JustAnswer as the easy fix)</p>
              <p className="mt-3 text-sm text-slate-200">JustAnswer gives you:</p>
              <ul className="mt-4 space-y-2 text-base text-slate-50">
                {reliefPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-emerald-300">✔️</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <CTAButton label="🐾 Ask a Dog Vet Now → Get your answer in minutes" />
          </div>
        </section>

        <section className="rounded-3xl border border-white/5 bg-white/5 p-6 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            ⭐ Section 4 — Value Stack (Matches Merchant Messaging)
          </h2>
          <p className="mt-4 text-2xl font-semibold text-white">What You Get When You Talk to a Vet:</p>
          <ul className="mt-6 space-y-2 text-base text-slate-100">
            {valueStack.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-200">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 px-4 py-2 text-center"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/5 bg-slate-900/80 p-6 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            ⭐ Section 5 — Emotional Benefits (5 bullets)
          </h2>
          <ul className="mt-6 space-y-3 text-base text-slate-100">
            {emotionalBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="text-emerald-300">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/5 bg-white/5 p-6 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            ⭐ Section 6 — Light Social Proof (Short & punchy)
          </h2>
          <p className="mt-4 text-base text-slate-200">Real dog owners are using this daily:</p>
          <div className="mt-6 space-y-4">
            {socialProof.map((quote) => (
              <p key={quote} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-slate-50">
                {quote}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-orange-300/40 bg-gradient-to-b from-orange-500/20 via-rose-500/10 to-transparent p-6 text-slate-900 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
            ⭐ Section 7 — Final CTA Section (Hard Sell)
          </h2>
          <p className="mt-4 text-3xl font-bold text-white">
            Your Dog Can’t Explain What’s Wrong… But a Vet Can.
          </p>
          <p className="mt-3 text-lg text-white">Don’t wait.</p>
          <p className="text-lg text-white">Don’t guess.</p>
          <p className="text-lg text-white">Don’t panic-Google.</p>
          <p className="mt-4 text-base text-white">
            The vets are online right now waiting to help.
          </p>
          <div className="mt-6">
            <CTAButton label="🔥 Tap Here to Ask a Dog Vet Now →" />
          </div>
          <p className="mt-4 text-sm text-white/90">
            Secure checkout.
            <br />
            Cancel anytime.
            <br />
            100% confidential.
          </p>
          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white">
            💥 THIS PAGE IS DESIGNED TO DO 3 THINGS:
            <br />
            Warm them up emotionally
            <br />
            Build trust BEFORE sending to the merchant’s credit card form
            <br />
            Boost conversions by removing fear, doubt, and confusion
          </div>
        </section>
      </div>
    </main>
  );
}

