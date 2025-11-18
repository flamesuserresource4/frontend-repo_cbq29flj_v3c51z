import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({ product, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="group text-left bg-white rounded-2xl p-5 ring-1 ring-slate-200 hover:ring-sky-200 transition focus:outline-none focus:ring-2 focus:ring-sky-500"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
    >
      <div className="aspect-[4/3] w-full rounded-xl bg-white ring-1 ring-slate-200 mb-4 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <motion.img
          src={`/placeholder-${product.slug}.jpg`}
          alt=""
          className="h-full w-full object-cover"
          onError={(e)=>{e.currentTarget.src='/placeholder-hero.jpg'}}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
        />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-1 text-slate-600">{product.oneLiner}</p>
    </motion.button>
  )
}
