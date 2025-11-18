import React from 'react'

export default function Hero() {
  return (
    <section className="relative isolate bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-widest text-sky-700 uppercase">VitAir</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Air, designed for human vitality</h1>
            <p className="mt-5 text-slate-600">A family of wearable and spatial air systems. Clean white design, whisper-quiet performance, and app-connected control. All details TBD — under active development.</p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-slate-200" aria-hidden>
            <img src="/placeholder-hero.jpg" alt="VitAir devices (placeholder)" className="h-full w-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
