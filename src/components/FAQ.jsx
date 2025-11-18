import React from 'react'

const items = [
  { q: 'When are products available?', a: 'TBD. Join the list to hear about pilots and releases.' },
  { q: 'Medical device?', a: 'No medical claims. Consumer devices under development.' },
  { q: 'App support?', a: 'iOS and Android planned. Features marked TBD may change.' },
]

export default function FAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200">
          {items.map((it) => (
            <details key={it.q} className="group">
              <summary className="cursor-pointer py-4 list-none font-medium text-slate-900 flex items-center justify-between">
                {it.q}
                <span className="text-sky-700">+</span>
              </summary>
              <p className="pb-4 text-slate-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
