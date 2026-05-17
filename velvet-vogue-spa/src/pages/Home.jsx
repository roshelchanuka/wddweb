import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
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
    { title: "Free Shipping", img: "/image/feature_1.jpg", bg: "bg-pink-50 text-pink-600 border-pink-100" },
    { title: "Online Order", img: "/image/feature_2.jpg", bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { title: "Save Money", img: "/image/feature_3.jpg", bg: "bg-sky-50 text-sky-600 border-sky-100" },
    { title: "Promotions", img: "/image/feature_4.jpg", bg: "bg-violet-50 text-violet-600 border-violet-100" },
    { title: "Happy Sale", img: "/image/feature_5.jpg", bg: "bg-amber-50 text-amber-600 border-amber-100" },
    { title: "24/7 Support", img: "/image/feature_6.jpg", bg: "bg-rose-50 text-rose-600 border-rose-100" },
  ];

  return (
    <div className="relative pb-1">
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
        className="relative h-[85vh] bg-cover bg-top flex items-center px-6 sm:px-12 lg:px-24"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/background_image.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <ScrollReveal animation="fade-up" delay={150}>
            <h4 className="font-extrabold text-neutral-800 tracking-wider text-sm uppercase">
              Trade-in-offer
            </h4>
            <h3 className="font-extrabold text-4xl sm:text-5xl text-neutral-900 leading-tight">
              Super Value Deals
            </h3>
            <h1 className="font-extrabold text-5xl sm:text-7xl text-brand leading-none">
              On All Products
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={350}>
            <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-md mb-2">
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
              <div className="flex flex-col items-center justify-center p-6 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <img 
                  src={`${import.meta.env.BASE_URL}${feat.img.replace(/^\//, '')}`} 
                  alt={feat.title} 
                  className="h-20 w-20 object-contain mb-4 filter drop-shadow-sm" 
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
      <section className="bg-neutral-100/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Featured Products</h2>
              <p className="text-neutral-500 text-sm font-medium">Summer Collection New Modern Designs</p>
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
                  className="group relative flex flex-col bg-white border border-neutral-100 rounded-3xl p-4 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-50 mb-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`} 
                      alt={product.name} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand/10 backdrop-blur-md text-brand font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.brand}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-neutral-800 text-sm line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                        {product.name}
                      </h5>
                      
                      <div className="flex items-center gap-1 mt-2 text-amber-400">
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
                        className="p-3 bg-brand/5 group-hover:bg-brand text-brand group-hover:text-white rounded-full transition-all duration-300 shadow-sm"
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
        className="relative h-60 bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-neutral-900/60" />
        <div className="relative z-10 space-y-3">
          <ScrollReveal animation="zoom-in">
            <h4 className="text-neutral-300 font-bold tracking-widest text-sm uppercase">Repair Services</h4>
            <h2 className="text-white font-extrabold text-2xl sm:text-4xl leading-tight">
              Up to <span className="text-red-500">70% off</span> - All T-shirts and Accessories
            </h2>
            <button 
              onClick={() => navigate('/shop')}
              className="mt-2 bg-white hover:bg-brand hover:text-white text-neutral-950 font-bold px-6 py-3 rounded-lg transition-all duration-300"
            >
              Explore More
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-extrabold sm:text-4xl">New Arrivals</h2>
              <p className="text-neutral-500 text-sm font-medium">Summer Collection New Modern Designs</p>
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
                  className="group relative flex flex-col bg-white border border-neutral-100 rounded-3xl p-4 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-50 mb-4">
                    <img 
                      src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`} 
                      alt={product.name} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-brand/10 backdrop-blur-md text-brand font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.brand}
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h5 className="font-semibold text-neutral-800 text-sm line-clamp-2 leading-snug group-hover:text-brand transition-colors">
                        {product.name}
                      </h5>
                      
                      <div className="flex items-center gap-1 mt-2 text-amber-400">
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
                        className="p-3 bg-brand/5 group-hover:bg-brand text-brand group-hover:text-white rounded-full transition-all duration-300 shadow-sm"
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

      {/* Crazy Deals & Limited Offer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
        {/* Deal 1 */}
        <ScrollReveal animation="fade-left" duration="duration-1000">
          <div 
            className="relative h-96 bg-cover bg-center rounded-3xl overflow-hidden flex flex-col justify-center px-8 sm:px-12 text-white group"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/banner_2new.jpg')` }}
          >
            <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/30 transition-colors duration-300" />
            <div className="relative z-10 space-y-4 max-w-sm">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-300">Crazy deals</h4>
              <h2 className="text-3xl font-extrabold leading-tight">Buy 1 Get 1 Free</h2>
              <p className="text-sm font-medium text-neutral-200">The best classic dress is on sale at Cara.</p>
              <button 
                onClick={() => navigate('/shop')}
                className="btn-outline border-white text-white hover:bg-white hover:text-neutral-950 px-6 py-2.5 font-bold"
              >
                Learn More
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Deal 2 */}
        <ScrollReveal animation="fade-right" duration="duration-1000">
          <div 
            className="relative h-96 bg-cover bg-center rounded-3xl overflow-hidden flex flex-col justify-center px-8 sm:px-12 text-white group"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/banner_3.jpg')` }}
          >
            <div className="absolute inset-0 bg-neutral-950/45 group-hover:bg-neutral-950/35 transition-colors duration-300" />
            <div className="relative z-10 space-y-4 max-w-sm">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-300">Limited Offer</h4>
              <h2 className="text-3xl font-extrabold leading-tight">50% Off On All Shoes</h2>
              <p className="text-sm font-medium text-neutral-200">Grab the best footwear collection at a discount.</p>
              <button 
                onClick={() => navigate('/shop')}
                className="btn-outline border-white text-white hover:bg-white hover:text-neutral-950 px-6 py-2.5 font-bold"
              >
                Shop Now
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Triple Seasonal Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <ScrollReveal animation="fade-up" delay={0} duration="duration-700">
          <div 
            className="relative h-56 bg-cover bg-center rounded-2xl overflow-hidden flex flex-col justify-center px-6 text-white"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/banner_4.jpg')` }}
          >
            <div className="absolute inset-0 bg-neutral-950/30" />
            <div className="relative z-10 space-y-1">
              <h2 className="text-lg font-black uppercase tracking-wider">SEASONAL SALE</h2>
              <h4 className="text-xs font-bold text-red-400">50% Off On Winter Collection</h4>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2 */}
        <ScrollReveal animation="fade-up" delay={100} duration="duration-700">
          <div 
            className="relative h-56 bg-cover bg-center rounded-2xl overflow-hidden flex flex-col justify-center px-6 text-white"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/backimg3.jpg')` }}
          >
            <div className="absolute inset-0 bg-neutral-950/35" />
            <div className="relative z-10 space-y-1">
              <h2 className="text-lg font-black uppercase tracking-wider">T-SHIRTS COLLECTION</h2>
              <h4 className="text-xs font-bold text-red-400">Summer Styles 50% Off</h4>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 3 */}
        <ScrollReveal animation="fade-up" delay={200} duration="duration-700">
          <div 
            className="relative h-56 bg-cover bg-center rounded-2xl overflow-hidden flex flex-col justify-center px-6 text-white"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/back5.jpg')` }}
          >
            <div className="absolute inset-0 bg-neutral-950/30" />
            <div className="relative z-10 space-y-1">
              <h2 className="text-lg font-black uppercase tracking-wider">NEW FOOTWEAR</h2>
              <h4 className="text-xs font-bold text-red-400">Spring/Summer 2026 Reissue</h4>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-brand-dark/95 text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <ScrollReveal animation="zoom-in" duration="duration-700">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <h4 className="text-2xl font-black tracking-wide">Sign up For Newsletters</h4>
              <p className="text-sm font-semibold text-neutral-200">
                Get E-mail updates about our latest shops and <span className="text-amber-400">special offers.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="w-full max-w-md">
            <ScrollReveal animation="fade-up" delay={200} duration="duration-700">
              {newsletterSubmitted ? (
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center animate-reveal">
                  <p className="font-bold text-sm text-brand-light">🎉 Successfully Subscribed!</p>
                  <p className="text-xs text-neutral-300 mt-1">Check your inbox for active voucher codes.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex overflow-hidden rounded-xl bg-white shadow-lg">
                  <input 
                    type="email" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="flex-grow px-5 py-4 text-neutral-800 text-sm focus:outline-none placeholder-neutral-400"
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
