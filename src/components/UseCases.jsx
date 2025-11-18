import React from 'react'

const cases = [
  { title: 'Commute', body: 'Lightweight comfort for daily travel.' },
  { title: 'Office', body: 'Quiet airflow for focused work.' },
  { title: 'Travel', body: 'Compact, carry-friendly design.' },
  { title: 'Recovery', body: 'Gentle support for rest. (TBD)' },
]

export default function UseCases() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Use Cases</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
