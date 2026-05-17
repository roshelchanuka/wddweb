import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/image/logo.avif"
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
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-brand hover:text-white transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-brand hover:text-white transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-brand hover:text-white transition-colors duration-300">
                <Youtube size={18} />
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
                src="/image/app3.jpg"
                alt="App Store"
                className="h-10 w-24 object-cover border border-neutral-700 rounded-lg cursor-pointer hover:border-brand transition-colors"
              />
              <img
                src="/image/play.png"
                alt="Google Play"
                className="h-10 w-24 object-cover border border-neutral-700 rounded-lg cursor-pointer hover:border-brand transition-colors"
              />
            </div>
            
            <div className="space-y-2 pt-2">
              <p className="text-sm font-semibold text-white">Secured Payment Gateways</p>
              <img
                src="/image/Payment Getways2.png"
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
