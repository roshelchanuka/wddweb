import { useContext, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart, Star, Truck, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/cart-context';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === Number(id));
  const relatedProducts = useMemo(
    () =>
      product
        ? products
            .filter((item) => item.category === product.category && item.id !== product.id)
            .slice(0, 4)
        : [],
    [product]
  );
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-950 px-4 pt-32 text-center text-neutral-300">
        <h1 className="text-3xl font-black text-white">Product not found</h1>
        <p className="mx-auto mt-3 max-w-md text-neutral-400">This product may have moved or no longer exists in the catalog.</p>
        <Link to="/shop" className="mt-8 inline-flex rounded-xl bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="min-h-screen bg-neutral-950 pt-28 text-neutral-200">
      {added && (
        <div className="fixed bottom-5 right-5 z-50 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl animate-reveal">
          Added to cart
        </div>
      )}

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-neutral-400 transition hover:text-brand"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-900/40 p-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-neutral-950">
              <img
                src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-brand">{product.brand}</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">{product.name}</h1>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(product.rating)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-400">
                {product.category}
              </span>
              <span className="rounded-full bg-emerald-950/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                In stock
              </span>
            </div>

            <p className="mt-6 text-4xl font-black text-brand">Rs. {product.price.toLocaleString()}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-400">{product.description}</p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-black uppercase tracking-wider text-neutral-300">Select size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 min-w-12 rounded-xl border px-4 text-sm font-black transition ${
                      selectedSize === size
                        ? 'border-brand bg-brand text-white'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-brand hover:text-brand'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex h-14 w-40 items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 px-2">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-brand"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="font-black text-white">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-brand"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex h-14 flex-1 items-center justify-center gap-3 rounded-xl bg-brand px-6 font-black text-white shadow-lg transition hover:bg-brand-dark sm:flex-none"
              >
                <ShoppingCart size={19} />
                Add to cart
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-neutral-900 bg-neutral-900/40 p-4">
                <Truck className="mt-0.5 text-brand" size={22} />
                <div>
                  <h2 className="text-sm font-bold text-white">Islandwide delivery</h2>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">Standard, express, and pickup options available at checkout.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-neutral-900 bg-neutral-900/40 p-4">
                <ShieldCheck className="mt-0.5 text-brand" size={22} />
                <div>
                  <h2 className="text-sm font-bold text-white">Secure checkout</h2>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">Cart data is saved locally until the order is placed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-black text-white">Related products</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group rounded-2xl border border-neutral-900 bg-neutral-900/40 p-4 transition hover:border-neutral-800 hover:bg-neutral-900/80"
                >
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-950">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-white group-hover:text-brand">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-black text-brand">Rs. {item.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
