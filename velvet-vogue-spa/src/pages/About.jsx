import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Sparkles, ShoppingBag } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand" />,
      title: "Premium Quality",
      description: "We source only the finest fabrics and materials, ensuring comfort, durability, and a premium feel."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand" />,
      title: "Customer-Centric",
      description: "Our designs are inspired by you. We focus on providing the perfect fit, feel, and aesthetic."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-brand" />,
      title: "Modern Aesthetics",
      description: "We merge contemporary fashion trends with timeless style, creating pieces that elevate your wardrobe."
    }
  ];

  return (
    <div className="relative bg-neutral-950 text-neutral-300 min-h-screen pb-1">
      {/* Hero Section */}
      <section 
        className="relative h-[55vh] sm:h-[80vh] lg:h-[85vh] bg-cover bg-center flex items-center px-6 sm:px-12 lg:px-24"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image/about-umit-new-small.jpg')` }}
      >
        {/* Deep dark premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent backdrop-blur-[1px]" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <ScrollReveal animation="fade-up" delay={150}>
            <h4 className="font-extrabold text-brand tracking-widest text-sm uppercase">
              Our Journey
            </h4>
            <h3 className="font-extrabold text-4xl sm:text-5xl text-white leading-tight mt-1">
              Who We Are
            </h3>
            <h1 className="font-extrabold text-5xl sm:text-7xl text-brand leading-none">
              Velvet Vogue
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={350}>
            <p className="text-neutral-300 text-base sm:text-lg font-medium max-w-md mb-6 leading-relaxed">
              Sri Lanka's leading premium e-commerce brand, dedicated to high-quality summer selections, footwear, and active fashion since 2024.
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

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-up">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Crafting Elegance for Every Summer Day
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Founded with a vision to redefine activewear and footwear in Sri Lanka, Velvet Vogue is committed to merging performance with premium styles. We believe that what you wear should empower you, whether you're strolling along the beaches of Galle or navigating the busy streets of Colombo.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Every stitch, every cut, and every choice of material is meticulously inspected by our stylistic directors. Our focus remains on high-durability fabrics, raw panel styling, and modern classic designs.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-extrabold text-white">10K+</div>
                  <div className="text-xs text-brand uppercase tracking-wider font-semibold mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">500+</div>
                  <div className="text-xs text-brand uppercase tracking-wider font-semibold mt-1">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">2024</div>
                  <div className="text-xs text-brand uppercase tracking-wider font-semibold mt-1">Established</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-premium">
              <img 
                src={`${import.meta.env.BASE_URL}image/banner_2new.jpg`} 
                alt="Brand philosophy" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-neutral-900/20 border-y border-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center space-y-2 mb-16">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">Our Core Values</h2>
              <p className="text-neutral-400 text-sm font-medium">The principles that guide everything we do.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <ScrollReveal 
                key={idx} 
                animation="fade-up" 
                delay={idx * 150}
              >
                <div className="flex flex-col p-8 bg-neutral-900/40 border border-neutral-900 rounded-3xl hover:border-neutral-800 hover:bg-neutral-900/80 transition-all duration-300">
                  <div className="mb-6 bg-brand/10 p-4 rounded-2xl w-fit">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{val.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
