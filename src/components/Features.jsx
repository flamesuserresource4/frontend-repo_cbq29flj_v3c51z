import React from 'react'

const features = [
  { title: 'Whisper Quiet', body: 'Low acoustic footprint for all-day wear. (TBD)' },
  { title: 'Smart Sensors', body: 'Learns context to adapt airflow. (TBD)' },
  { title: 'App Control', body: 'Profiles, schedules, and OTA updates.' },
  { title: 'Hygienic Design', body: 'Easy to clean, replaceable elements. (TBD)' },
]

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Key Features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
