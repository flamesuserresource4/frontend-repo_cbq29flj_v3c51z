export async function fetchProducts() {
  const res = await fetch('/data/products.json');
  const json = await res.json();
  return json.products || [];
}

export async function fetchProductBySlug(slug) {
  const products = await fetchProducts();
  return products.find(p => p.slug === slug);
}
