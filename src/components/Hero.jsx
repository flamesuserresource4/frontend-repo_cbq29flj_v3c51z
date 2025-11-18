import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()
  const container = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="relative isolate bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <motion.p className="text-sm tracking-widest text-sky-700 uppercase" initial={{opacity:0,y:reduce?0:8}} animate={{opacity:1,y:0}} transition={{delay:0.05,duration:0.5}}>VitAir</motion.p>
            <motion.h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl" initial={{opacity:0,y:reduce?0:8}} animate={{opacity:1,y:0}} transition={{delay:0.15,duration:0.6}}>
              Air, designed for human vitality
            </motion.h1>
            <motion.p className="mt-5 text-slate-600" initial={{opacity:0,y:reduce?0:8}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.6}}>
              A family of wearable and spatial air systems. Clean white design, whisper-quiet performance, and app-connected control. All details TBD — under active development.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative aspect-[4/3] rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-slate-200"
            aria-hidden
            initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ y: reduce ? 0 : -2, boxShadow: '0 14px 60px rgba(0,0,0,0.10)' }}
          >
            <img src="/placeholder-hero.jpg" alt="VitAir devices (placeholder)" className="h-full w-full object-cover rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
