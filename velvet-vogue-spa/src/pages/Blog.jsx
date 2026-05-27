import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Blog() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Summer Layering",
      date: "May 24, 2026",
      category: "Styling",
      image: "/image/blog1.jpg",
      excerpt: "Discover how to layer lightweight fabrics for a stylish and comfortable summer look without breaking a sweat."
    },
    {
      id: 2,
      title: "Sustainable Fabrics: The Future of Fashion",
      date: "May 18, 2026",
      category: "Sustainability",
      image: "/image/blog2new.jpg",
      excerpt: "Why organic cotton and recycled materials are taking over the runway, and how to incorporate them into your wardrobe."
    },
    {
      id: 3,
      title: "Footwear Trends to Watch This Season",
      date: "May 10, 2026",
      category: "Trends",
      image: "/image/blog3.avif",
      excerpt: "From chunky soles to minimalist loafers, explore the top footwear trends that will dominate the streets this year."
    }
  ];

  return (
    <div className="relative bg-neutral-950 text-neutral-300 min-h-screen pb-1">
      {/* Hero Section */}
      <section 
        className="relative h-[55vh] sm:h-[80vh] lg:h-[85vh] bg-cover bg-center flex items-center px-6 sm:px-12 lg:px-24"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/banner_3.jpg')` }}
      >
        {/* Deep dark premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <ScrollReveal animation="fade-up" delay={150}>
            <h4 className="font-extrabold text-brand tracking-widest text-sm uppercase">
              Our Journal
            </h4>
            <h3 className="font-extrabold text-4xl sm:text-5xl text-white leading-tight mt-1">
              Fashion & Summer
            </h3>
            <h1 className="font-extrabold text-5xl sm:text-7xl text-brand leading-none">
              Blog
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={350}>
            <p className="text-neutral-300 text-base sm:text-lg font-medium max-w-md mb-6 leading-relaxed">
              Read up on seasonal styling guides, material selections, and activewear fashion ideas published regularly by our stylistic directors.
            </p>
            <button 
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-brand/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Shop
              <ArrowRight size={18} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <ScrollReveal 
              key={post.id} 
              animation="fade-up" 
              delay={index * 150} 
              duration="duration-700"
            >
              <article className="group flex flex-col bg-neutral-900/40 border border-neutral-900 rounded-3xl overflow-hidden hover:shadow-premium hover:border-neutral-800 transition-all duration-300 cursor-pointer h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img 
                    src={`${import.meta.env.BASE_URL}${post.image.replace(/^\//, '')}`} 
                    alt={post.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `${import.meta.env.BASE_URL}image/background_image.jpg`; // Fallback
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="text-brand text-xs font-semibold uppercase tracking-wider mb-3">
                    {post.date}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-6 border-t border-neutral-800/50 flex items-center text-sm font-bold text-white group-hover:text-brand transition-colors w-fit">
                    Read Article <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-neutral-900/30 border-t border-neutral-900 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <ScrollReveal animation="zoom-in">
            <h2 className="text-3xl font-extrabold text-white">Never miss an update.</h2>
            <p className="text-neutral-400 mt-2">Subscribe to our newsletter for the latest styling tips and exclusive offers.</p>
            <div className="mt-8 flex items-center justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-5 py-3 bg-neutral-950 border border-neutral-800 rounded-l-xl focus:outline-none focus:border-brand text-white text-sm"
              />
              <button className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-r-xl text-sm transition-colors uppercase tracking-wider border border-brand hover:border-brand-dark">
                Subscribe
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
