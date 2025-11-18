import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import AppSection from '../components/AppSection'
import CompareTable from '../components/CompareTable'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <Layout>
      <div id="hero"><Hero /></div>
      <div id="products"><ProductGrid /></div>
      <div id="how"><HowItWorks /></div>
      <Features />
      <UseCases />
      <AppSection />
      <div id="compare"><CompareTable /></div>
      <div id="contact" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Contact / Demo</h2>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
