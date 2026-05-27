import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}image/logo.avif`}
                alt="Velvet Vogue"
                className="h-12 w-12 rounded-full border border-neutral-800 bg-white"
              />
              <span className="font-extrabold text-lg text-white tracking-widest">VELVET VOGUE</span>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand shrink-0 mt-0.5" size={18} />
                <p>12 Kottawa, Main Street, Colombo, Sri Lanka.</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand shrink-0" size={18} />
                <p>031-2345689 / +94-790815041</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brand shrink-0" size={18} />
                <p>velvetvogue@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-brand shrink-0 mt-0.5" size={18} />
                <p>10:00 AM - 10:30 PM, Mon - Sun</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-brand hover:text-white transition-colors duration-300 flex items-center justify-center w-9 h-9" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-brand hover:text-white transition-colors duration-300 flex items-center justify-center w-9 h-9" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.74.052 1.455.067 2.25.31 2.77.512a4.785 4.785 0 011.69 1.1 4.787 4.787 0 011.1 1.69c.202.52.446 1.316.512 2.77.045.955.053 1.31.053 3.74s-.008 2.784-.052 3.74c-.067 1.455-.31 2.25-.512 2.77a4.785 4.785 0 01-1.1 1.69 4.787 4.787 0 01-1.69 1.1c-.52.202-1.316.446-2.77.512-.955.045-1.31.053-3.74.053s-2.784-.008-3.74-.052c-1.455-.067-2.25-.31-2.77-.512a4.785 4.785 0 01-1.69-1.1 4.787 4.787 0 01-1.1-1.69c-.202-.52-.446-1.316-.512-2.77C2.008 14.784 2 14.43 2 12s.008-2.784.052-3.74c.067-1.455.31-2.25.512-2.77a4.785 4.785 0 011.1-1.69 4.785 4.785 0 011.69-1.1c.52-.202 1.316-.446 2.77-.512.955-.045 1.31-.053 3.74-.053zm-.507 1.9c-2.43 0-2.743.01-3.697.053-.883.041-1.362.187-1.681.312a2.885 2.885 0 00-1.042.678 2.886 2.886 0 00-.678 1.042c-.125.319-.271.798-.312 1.681-.043.955-.053 1.268-.053 3.71s.01 2.754.053 3.71c.041.883.187 1.362.312 1.681.164.417.382.771.678 1.042.27.27.625.489 1.042.678.319.125.798.271 1.681.312.954.043 1.268.053 3.71.053s2.754-.01 3.71-.053c.883-.041 1.362-.187 1.681-.312a2.886 2.886 0 001.042-.678 2.885 2.885 0 00.678-1.042c.125-.319.271-.798.312-1.681.044-.955.053-1.268.053-3.71s-.01-2.754-.053-3.71c-.041-.883-.187-1.362-.312-1.681a2.886 2.886 0 00-.678-1.042 2.886 2.886 0 00-1.042-.678c-.319-.125-.798-.271-1.681-.312-.955-.044-1.268-.053-3.71-.053zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-brand hover:text-white transition-colors duration-300 flex items-center justify-center w-9 h-9" aria-label="Youtube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C22 8.68 22 12 22 12s0 3.32-.42 4.814c-.23.861-.907 1.538-1.768 1.768C18.32 19 12 19 12 19s-6.32 0-7.812-.418c-.861-.23-1.538-.907-1.768-1.768C2 15.32 2 12 2 12s0-3.32.42-4.814c.23-.861.907-1.538 1.768-1.768C5.68 5 12 5 12 5s6.32 0 7.812.418zM9.75 15.027L15 12 9.75 8.973v6.054z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">About Velvet</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-brand transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms & Conditions</a></li>
              <li><Link to="/support" className="hover:text-brand transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* My Account Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">My Account</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/signup" className="hover:text-brand transition-colors">Sign In / Register</Link></li>
              <li><Link to="/cart" className="hover:text-brand transition-colors">View Cart</Link></li>
              <li><a href="#" className="hover:text-brand transition-colors">My Wish List</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Track My Order</a></li>
              <li><Link to="/support" className="hover:text-brand transition-colors">Help & Support</Link></li>
            </ul>
          </div>

          {/* Apps & Gateways Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-base mb-2 uppercase tracking-wider">Download Our App</h4>
            <p className="text-sm text-neutral-400">Available on Google Play & App Store</p>
            <div className="flex gap-4">
              <img
                src={`${import.meta.env.BASE_URL}image/app3.jpg`}
                alt="App Store"
                className="h-10 w-24 object-cover border border-neutral-700 rounded-lg cursor-pointer hover:border-brand transition-colors"
              />
              <img
                src={`${import.meta.env.BASE_URL}image/play.png`}
                alt="Google Play"
                className="h-10 w-24 object-cover border border-neutral-700 rounded-lg cursor-pointer hover:border-brand transition-colors"
              />
            </div>
            
            <div className="space-y-2 pt-2">
              <p className="text-sm font-semibold text-white">Secured Payment Gateways</p>
              <img
                src={`${import.meta.env.BASE_URL}image/Payment Getways2.png`}
                alt="Payment Gateways"
                className="max-h-8 object-contain rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Velvet Vogue. All Rights Reserved - Designed with Premium React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
