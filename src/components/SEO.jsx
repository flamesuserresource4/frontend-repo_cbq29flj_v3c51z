import { useEffect } from 'react'

export default function SEO({ title, description, url = '', image = '/placeholder-hero.jpg' }) {
  useEffect(() => {
    if (title) document.title = title

    function setMeta(name, content) {
      let el = document.querySelector(`meta[name='${name}']`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    function setOG(property, content) {
      let el = document.querySelector(`meta[property='${property}']`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    if (description) setMeta('description', description)
    if (title) setOG('og:title', title)
    if (description) setOG('og:description', description)
    if (url) setOG('og:url', url)
    if (image) setOG('og:image', image)
    setOG('og:type', 'website')
  }, [title, description, url, image])

  return null
}
