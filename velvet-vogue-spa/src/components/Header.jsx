import { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { CartContext } from '../context/cart-context';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { cartTotalCount } = useContext(CartContext);
  const location = useLocation();

  const navLinks = [
    { name: 'Product Categories', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Customer Support', path: '/support' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false); // Scrolling down - hide
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up - show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent border-transparent shadow-none`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}image/logo.avif`}
                alt="Velvet Vogue Logo"
                className="h-14 w-14 object-contain rounded-full border border-neutral-800 shadow-sm bg-neutral-900"
              />
              <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-brand to-emerald-500 bg-clip-text text-transparent">
                VELVET VOGUE
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-brand'
                    : 'text-neutral-300 hover:text-brand'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full animate-reveal" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/signup" className="text-neutral-300 hover:text-brand transition-colors duration-200">
              <User size={22} />
            </Link>

            <Link
              to="/cart"
              className="relative p-2 text-neutral-300 hover:text-brand transition-colors duration-200"
            >
              <ShoppingCart size={22} />
              {cartTotalCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-brand rounded-full">
                  {cartTotalCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-neutral-300 hover:text-brand"
            >
              <ShoppingCart size={22} />
              {cartTotalCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-brand rounded-full">
                  {cartTotalCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-300 hover:text-brand focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-reveal bg-neutral-950 border-t border-neutral-900 px-4 py-4 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-brand/10 text-brand'
                  : 'text-neutral-300 hover:bg-neutral-900 hover:text-brand'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-neutral-900 pt-4 flex items-center justify-around">
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-neutral-300 hover:text-brand font-semibold text-sm"
            >
              <User size={20} />
              Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
