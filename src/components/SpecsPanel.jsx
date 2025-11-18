import React from 'react'
import { motion } from 'framer-motion'

export default function SpecsPanel({ product }) {
  if (!product) return null
  const entries = Object.entries(product.specs || {})
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">Design & Specs</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {entries.map(([k, v], i) => (
            <motion.div
              key={k}
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
            >
              <div className="text-sm text-slate-500">{k}</div>
              <div className="mt-1 font-medium text-slate-900">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
