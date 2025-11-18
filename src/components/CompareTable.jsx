import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/data'

const columns = [
  'Oxygen', 'Filtration', 'Noise', 'Runtime', 'Sensors', 'App', 'Hygiene', 'Primary Use'
]

export default function CompareTable() {
  const [products, setProducts] = useState([])
  useEffect(() => { fetchProducts().then(setProducts) }, [])

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Compare Products</h2>
        <div className="mt-6 overflow-auto rounded-2xl ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Product</th>
                {columns.map((c) => (
                  <th key={c} className="px-4 py-3 text-left font-semibold text-slate-900">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {products.map((p) => (
                <tr key={p.slug} className="bg-white">
                  <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                  {columns.map((c) => (
                    <td key={c} className="px-4 py-3 text-slate-700">{p.specs?.[c] || 'TBD'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
