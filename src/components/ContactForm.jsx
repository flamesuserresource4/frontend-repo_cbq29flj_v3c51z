import React, { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!email) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
    if (message && message.length > 500) e.message = 'Keep it under 500 chars'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <h3 className="text-lg font-semibold text-slate-900">Thanks — we’ll be in touch.</h3>
        <p className="mt-2 text-sm text-slate-600">We’ve received your interest. This demo site does not send email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border-slate-300 bg-white text-slate-900 focus:ring-sky-500 focus:border-sky-500" placeholder="you@company.com" required />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-700">Message (optional)</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-md border-slate-300 bg-white text-slate-900 focus:ring-sky-500 focus:border-sky-500" placeholder="TBD: Tell us about your use case" />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">Request demo</button>
    </form>
  )
}
