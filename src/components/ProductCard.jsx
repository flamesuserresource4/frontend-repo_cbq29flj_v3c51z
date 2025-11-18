import React from 'react'

export default function ProductCard({ product, onClick }) {
  return (
    <button onClick={onClick} className="group text-left bg-white rounded-2xl p-5 ring-1 ring-slate-200 hover:ring-sky-200 transition shadow-[0_8px_30px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-sky-500">
      <div className="aspect-[4/3] w-full rounded-xl bg-white ring-1 ring-slate-200 mb-4 overflow-hidden">
        <img src={`/placeholder-${product.slug}.jpg`} alt="" className="h-full w-full object-cover" onError={(e)=>{e.currentTarget.src='/placeholder-hero.jpg'}}/>
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-1 text-slate-600">{product.oneLiner}</p>
    </button>
  )
}
