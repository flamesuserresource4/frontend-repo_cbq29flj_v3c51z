import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">VitAir</Link>
          <nav className="text-sm text-slate-700">
            <a href="#products" className="px-3 py-2 rounded-md hover:text-sky-700">Products</a>
            <a href="#how" className="px-3 py-2 rounded-md hover:text-sky-700">How It Works</a>
            <a href="#compare" className="px-3 py-2 rounded-md hover:text-sky-700">Compare</a>
            <a href="#contact" className="px-3 py-2 rounded-md hover:text-sky-700">Contact</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          VitAir product family — concept site. All content TBD, non‑medical, under development.
        </div>
      </footer>
    </div>
  )
}
