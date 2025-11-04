import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-400/40 via-orange-300/30 to-amber-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
              <Sparkles size={14} className="text-rose-500" />
              <span>Purpose-built AI for restaurants</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Fill more tables with an AI team that never sleeps
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              We deploy AI agents that handle reservations, upsell specials, respond to reviews, and predict demand—so you can focus on unforgettable guest experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white font-semibold shadow hover:bg-gray-800">
                Book a 20‑minute demo
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-900">3–5x</span> more reservations from web & phone
              </div>
              <div>
                <span className="font-semibold text-gray-900">24/7</span> instant responses to guests
              </div>
            </div>
          </div>

          <div className="relative lg:h-[520px] h-72 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1">
            <div className="h-full w-full rounded-[1rem] bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.2),transparent_40%)]">
              <div className="h-full w-full grid grid-rows-3 grid-cols-2 gap-3 p-4">
                <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">AI Host</p>
                  <p className="mt-1 text-sm text-white/90">"Hi! Looking for a table for 4 at 7:30? Patio or dining room?"</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Specials</p>
                  <p className="mt-1 text-sm text-white/90">Suggests seasonal dishes to increase check size.</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Reviews</p>
                  <p className="mt-1 text-sm text-white/90">Crafts on-brand replies across Google, Yelp, IG.</p>
                </div>
                <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Forecast</p>
                  <p className="mt-1 text-sm text-white/90">Predicts foot traffic and preps the perfect staffing plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
