import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/cart-context';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [activeToast, setActiveToast] = useState(null);

  const featuredProducts = products.filter((p) => p.isFeatured);
  const newArrivals = products.filter((p) => p.isNewArrival);

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Avoid navigating to details
    addToCart(product, 1, 'M');
    
    // Trigger dynamic cart toast
    setActiveToast(product.name);
    setTimeout(() => {
      setActiveToast(null);
    }, 2500);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  const features = [
    { title: "Free Shipping", img: "/image/feature_1.jpg", bg: "bg-pink-950/30 text-pink-400 border-pink-900/50" },
    { title: "Online Order", img: "/image/feature_2.jpg", bg: "bg-emerald-950/30 text-emerald-400 border-emerald-900/50" },
    { title: "Save Money", img: "/image/feature_3.jpg", bg: "bg-sky-950/30 text-sky-400 border-sky-900/50" },
    { title: "Promotions", img: "/image/feature_4.jpg", bg: "bg-violet-950/30 text-violet-400 border-violet-900/50" },
    { title: "Happy Sale", img: "/image/feature_5.jpg", bg: "bg-amber-950/30 text-amber-400 border-amber-900/50" },
    { title: "24/7 Support", img: "/image/feature_6.jpg", bg: "bg-rose-950/30 text-rose-400 border-rose-900/50" },
  ];

  return (
    <div className="relative pb-1 bg-neutral-950 text-neutral-300">
      {/* Toast Notification */}
      {activeToast && (
        <div className="fixed bottom-5 right-5 z-50 bg-neutral-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-neutral-800 animate-reveal">
          <div className="h-2 w-2 rounded-full bg-brand animate-ping" />
          <span className="text-sm font-semibold truncate max-w-xs">
            Added "{activeToast}" to cart!
          </span>
        </div>
      )}

      {/* Hero Section */}
      <section 
        className="relative h-[55vh] sm:h-[80vh] lg:h-[85vh] bg-cover bg-[position:70%_center] sm:bg-top flex items-center px-6 sm:px-12 lg:px-24"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/background_image.jpg')` }}
      >
        {/* Deep dark premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <ScrollReveal animation="fade-up" delay={150}>
            <h4 className="font-extrabold text-brand tracking-widest text-sm uppercase">
              Trade-in-offer
            </h4>
            <h3 className="font-extrabold text-4xl sm:text-5xl text-white leading-tight mt-1">
              Super Value Deals
            </h3>
            <h1 className="font-extrabold text-5xl sm:text-7xl text-brand leading-none">
              On All Products
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={350}>
            <p className="text-neutral-300 text-base sm:text-lg font-medium max-w-md mb-6 leading-relaxed">
              Save more with coupons and up to <span className="text-red-500 font-bold">70% off</span> on premium summer selections.
            </p>
            <button 
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-brand/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </ScrollReveal>
        </div>
      </section>
 
      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feat, index) => (
            <ScrollReveal 
              key={index} 
              animation="zoom-in" 
              delay={index * 80} 
              duration="duration-700"
            >
              <div className="flex flex-col items-center justify-center p-6 bg-neutral-900/40 border border-neutral-900 rounded-2xl shadow-sm hover:shadow-premium hover:border-neutral-800 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer">
                <img 
                  src={`${import.meta.env.BASE_URL}${feat.img.replace(/^\//, '')}`} 
                  alt={feat.title} 
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain mb-4 filter drop-shadow-sm brightness-90 contrast-125" 
                />
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${feat.bg}`}>
                  {feat.title}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-neutral-900/20 border-y border-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Featured Products</h2>
              <p className="text-neutral-400 text-sm font-medium">Summer Collection New Modern Designs</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollReveal 
                key={product.id} 
                animation="fade-up" 
                delay={(index % 4) * 100} 
                duration="duration-700"
              >
                <div 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group relative flex flex-col bg-neutral-900/40 border border-neutral-900 rounded-3xl p-4 shadow-sm hover:shadow-premium hover:border-neutral-800 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-950 mb-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`} 
                      alt={product.name} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand/20 backdrop-blur-md text-brand font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.brand}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-neutral-200 text-sm line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                        {product.name}
                      </h5>
                      
                      <div className="flex items-center gap-1 mt-2 text-amber-500">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-brand font-bold text-lg">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="p-3 bg-neutral-800 hover:bg-brand text-brand hover:text-white rounded-full transition-all duration-300 shadow-sm"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services Banner */}
      <section 
        className="relative h-60 bg-cover bg-center flex flex-col items-center justify-center text-center px-4 border-b border-neutral-900"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="relative z-10 space-y-3">
          <ScrollReveal animation="zoom-in">
            <h4 className="text-neutral-300 font-bold tracking-widest text-sm uppercase">Repair Services</h4>
            <h2 className="text-white font-extrabold text-2xl sm:text-4xl leading-tight">
              Up to <span className="text-red-500">70% off</span> - All T-shirts and Accessories
            </h2>
            <button 
              onClick={() => navigate('/shop')}
              className="mt-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-brand/20"
            >
              Explore More
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">New Arrivals</h2>
              <p className="text-neutral-400 text-sm font-medium">Summer Collection New Modern Designs</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <ScrollReveal 
                key={product.id} 
                animation="fade-up" 
                delay={(index % 4) * 100} 
                duration="duration-700"
              >
                <div 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group relative flex flex-col bg-neutral-900/40 border border-neutral-900 rounded-3xl p-4 shadow-sm hover:shadow-premium hover:border-neutral-800 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-950 mb-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`} 
                      alt={product.name} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand/20 backdrop-blur-md text-brand font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.brand}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-neutral-200 text-sm line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                        {product.name}
                      </h5>
                      
                      <div className="flex items-center gap-1 mt-2 text-amber-500">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-brand font-bold text-lg">
                        Rs. {product.price.toLocaleString()}
                      </span>
                      
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="p-3 bg-neutral-800 hover:bg-brand text-brand hover:text-white rounded-full transition-all duration-300 shadow-sm"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Categories Showcase */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-16">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Trending Categories</h2>
              <p className="text-neutral-400 text-sm font-medium">Curated collections designed to elevate your personal style.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div 
                onClick={() => navigate('/shop')}
                className="group relative h-72 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-neutral-900 shadow-premium"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}image/polomen1.jpg`} 
                  alt="Men's Collection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 space-y-2">
                  <h3 className="text-2xl font-bold text-white">Casual Men</h3>
                  <p className="text-neutral-400 text-sm">Premium polos, summer tees & shorts</p>
                  <span className="inline-flex items-center gap-1.5 text-brand font-bold text-sm pt-2 group-hover:text-brand-light transition-colors">
                    Shop Collection &rarr;
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Category 2 */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div 
                onClick={() => navigate('/shop')}
                className="group relative h-72 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-neutral-900 shadow-premium"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}image/img_7.avif`} 
                  alt="Women's Collection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 space-y-2">
                  <h3 className="text-2xl font-bold text-white">Summer Luxe</h3>
                  <p className="text-neutral-400 text-sm">Breathable dresses, activewear & accessories</p>
                  <span className="inline-flex items-center gap-1.5 text-brand font-bold text-sm pt-2 group-hover:text-brand-light transition-colors">
                    Shop Collection &rarr;
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Category 3 */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div 
                onClick={() => navigate('/shop')}
                className="group relative h-72 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-neutral-900 shadow-premium"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}image/banner_3.jpg`} 
                  alt="Footwear Collection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 space-y-2">
                  <h3 className="text-2xl font-bold text-white">Active Footwear</h3>
                  <p className="text-neutral-400 text-sm">Chunky trainers, running shoes & slides</p>
                  <span className="inline-flex items-center gap-1.5 text-brand font-bold text-sm pt-2 group-hover:text-brand-light transition-colors">
                    Shop Collection &rarr;
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-neutral-900/20 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-16">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">What Our Customers Say</h2>
              <p className="text-neutral-400 text-sm font-medium">Stories of style and comfort from our global community.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="p-8 bg-neutral-900/40 border border-neutral-900 rounded-3xl space-y-4 hover:border-neutral-800 transition-all duration-300">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "Absolutely love the quality of their activewear. The fabric is premium, breathable, and fits perfectly. Will definitely order again!"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-white text-sm">
                    SK
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Sanduni K.</h4>
                    <span className="text-xs text-neutral-500">Colombo, LK</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="p-8 bg-neutral-900/40 border border-neutral-900 rounded-3xl space-y-4 hover:border-neutral-800 transition-all duration-300">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "The footwear collection is spectacular. The raw suede trainers are incredibly comfortable and look extremely sleek."
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-white text-sm">
                    AP
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Amara P.</h4>
                    <span className="text-xs text-neutral-500">Galle, LK</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="p-8 bg-neutral-900/40 border border-neutral-900 rounded-3xl space-y-4 hover:border-neutral-800 transition-all duration-300">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "Fast shipping and premium packaging. The summer dress is stunning and the fit is true to size. High quality and recommended!"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-white text-sm">
                    MR
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Malith R.</h4>
                    <span className="text-xs text-neutral-500">Kandy, LK</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-neutral-900/60 border-t border-neutral-900 text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <ScrollReveal animation="zoom-in" duration="duration-700">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <h4 className="text-2xl font-black tracking-wide text-white">Sign up For Newsletters</h4>
              <p className="text-sm font-semibold text-neutral-400">
                Get E-mail updates about our latest shops and <span className="text-brand">special offers.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="w-full max-w-md">
            <ScrollReveal animation="fade-up" delay={200} duration="duration-700">
              {newsletterSubmitted ? (
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center animate-reveal">
                  <p className="font-bold text-sm text-brand">🎉 Successfully Subscribed!</p>
                  <p className="text-xs text-neutral-400 mt-1">Check your inbox for active voucher codes.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800 shadow-lg">
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="flex-grow px-5 py-4 bg-neutral-950 text-white text-sm focus:outline-none placeholder-neutral-600"
                  />
                  <button 
                    type="submit"
                    className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 text-sm transition-colors uppercase tracking-wider"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
