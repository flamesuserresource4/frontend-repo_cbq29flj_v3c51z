import React from 'react'

const steps = [
  { title: 'Generate', body: 'Efficient airflow modules sized for daily wear. (TBD)', icon: '⚙️' },
  { title: 'Purify', body: 'Multi-stage filtration for cleaner intake. (TBD)', icon: '🧪' },
  { title: 'Control', body: 'Quiet, precise output profiles you can tune. (TBD)', icon: '🎛️' },
  { title: 'Connect', body: 'App + platform integrate devices and updates.', icon: '📲' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How It Works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="text-sky-700 text-2xl" aria-hidden>{s.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
