import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { fetchProductBySlug } from '../lib/data'
import SpecsPanel from '../components/SpecsPanel'

export default function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchProductBySlug(slug).then(setProduct)
  }, [slug])

  if (!product) return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-slate-600">Loading…</p>
      </div>
    </Layout>
  )

  return (
    <Layout>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link to="/" className="text-sky-700">← All products</Link>
          <div className="mt-4 grid gap-10 md:grid-cols-2 items-start">
            <div className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <img src={`/placeholder-${product.slug}.jpg`} alt="" className="h-full w-full object-cover rounded-2xl" onError={(e)=>{e.currentTarget.src='/placeholder-hero.jpg'}} />
            </div>
            <div>
              <p className="text-sm tracking-widest text-sky-700 uppercase">{product.name}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight">{product.oneLiner}</h1>
              <p className="mt-4 text-slate-600">{product.long}</p>
              {product.modes?.length ? (
                <div className="mt-6">
                  <div className="text-sm font-medium text-slate-900">Modes</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.modes.map(m => (
                      <span key={m} className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">{m}</span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-6">
                <div className="text-sm font-medium text-slate-900">Core Functions</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.coreFunctions?.map(m => (
                    <span key={m} className="inline-flex items-center rounded-md bg-white ring-1 ring-slate-200 px-3 py-1 text-sm text-slate-700 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SpecsPanel product={product} />
    </Layout>
  )
}
