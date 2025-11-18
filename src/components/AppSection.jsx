import React from 'react'
import { motion } from 'framer-motion'

export default function AppSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">App & Platform</h2>
            <p className="mt-3 text-slate-600">One app to setup, tune, and update all VitAir devices. Profiles, routines, and fleet controls for teams. Some capabilities are TBD.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Quick pairing, Bluetooth LE + Wi‑Fi</li>
              <li>OTA firmware updates</li>
              <li>Privacy-first design (TBD)</li>
            </ul>
          </div>
          <motion.div
            className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            aria-hidden
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2 }}
          />
        </div>
      </div>
    </section>
  )
}
