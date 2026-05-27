
import { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, SlidersHorizontal, Star } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/cart-context';

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [activeToast, setActiveToast] = useState('');

  const categories = useMemo(
    () => ['all', ...new Set(products.map((product) => product.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesQuery =
          !normalizedQuery ||
          [product.name, product.brand, product.description].some((value) =>
            value.toLowerCase().includes(normalizedQuery)
          );

        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return Number(b.isFeatured) - Number(a.isFeatured) || a.id - b.id;
      });
  }, [category, query, sortBy]);

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product, 1, product.sizes[0] || 'M');
    setActiveToast(product.name);
    setTimeout(() => setActiveToast(''), 2200);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-16">
      {activeToast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl animate-reveal">
          Added "{activeToast}" to cart
        </div>
      )}

      {/* Hero Section with transparent navbar overlap */}
      <section 
        className="relative h-[85vh] bg-cover bg-center flex items-center pt-20 px-6 sm:px-12 lg:px-24 border-b border-neutral-900"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/shopheader.avif')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-2xl space-y-6 animate-reveal">
          <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-brand backdrop-blur-md border border-brand/30">
            Velvet Vogue Catalog
          </span>
          <h1 className="text-4xl font-black leading-tight text-white drop-shadow-xl sm:text-5xl md:text-6xl">
            Shop premium summer wear, footwear, and seasonal essentials
          </h1>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mt-4">
        <div className="mb-8 grid gap-4 rounded-2xl border border-neutral-900 bg-neutral-900/50 p-4 md:grid-cols-[1fr_auto_auto]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, brands, styles"
              className="h-12 w-full rounded-xl border border-neutral-800 bg-neutral-950 pl-11 pr-4 text-sm text-white outline-none transition focus:border-brand"
            />
          </label>

          <label className="relative block">
            <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 w-full rounded-xl border border-neutral-800 bg-neutral-950 pl-11 pr-10 text-sm font-semibold capitalize text-white outline-none transition focus:border-brand md:w-48"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === 'all' ? 'All Categories' : item}
                </option>
              ))}
            </select>
          </label>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="h-12 rounded-xl border border-neutral-800 bg-neutral-950 px-4 text-sm font-semibold text-white outline-none transition focus:border-brand md:w-48"
          >
            <option value="featured">Featured first</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-neutral-400">
            Showing <span className="text-white">{filteredProducts.length}</span> products
          </p>
          <Link to="/cart" className="text-sm font-bold text-brand hover:text-brand-light">
            View cart
          </Link>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-12 text-center">
            <h2 className="text-2xl font-bold text-white">No products found</h2>
            <p className="mt-2 text-neutral-400">Try a different search term or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group flex cursor-pointer flex-col rounded-2xl border border-neutral-900 bg-neutral-900/45 p-4 transition hover:-translate-y-1 hover:border-neutral-800 hover:bg-neutral-900/80 hover:shadow-premium"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-950">
                  <img
                    src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-950/70 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand backdrop-blur">
                    {product.brand}
                  </span>
                </div>

                <div className="flex flex-1 flex-col pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{product.category}</p>
                  <h2 className="mt-1 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-white transition group-hover:text-brand">
                    {product.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-1 text-amber-500">
                    {[...Array(product.rating)].map((_, index) => (
                      <Star key={index} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-lg font-black text-brand">Rs. {product.price.toLocaleString()}</span>
                    <button
                      type="button"
                      onClick={(event) => handleAddToCart(event, product)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 text-brand transition hover:bg-brand hover:text-white"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
