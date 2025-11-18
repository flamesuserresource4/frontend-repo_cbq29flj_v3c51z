import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../lib/data'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} onClick={() => navigate(`/products/${p.slug}`)} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
