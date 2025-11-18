import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../lib/data'
import { useNavigate } from 'react-router-dom'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Product Suite</h2>
            <p className="text-slate-600">Four focused devices built on one platform.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} onClick={() => navigate(`/products/${p.slug}`)} />
          ))}
        </div>
      </div>
    </section>
  )
}
