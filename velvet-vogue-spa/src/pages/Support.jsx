import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div 
      className="min-h-screen py-12 sm:py-20 relative bg-cover bg-center bg-scroll md:bg-fixed"
      style={{ 
        backgroundImage: `url('${import.meta.env.BASE_URL}image/aboutbanner.avif')`
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Customer Support</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions, concerns, or feedback. 
            Our support team is dedicated to providing you with the best experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Details */}
        <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-neutral-400 mb-8">
              Prefer to reach out directly? Use the contact details below to get in touch with our team.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-brand/10 p-3 rounded-xl border border-brand/20 text-brand group-hover:bg-brand group-hover:text-neutral-950 transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white group-hover:text-brand transition-colors">Visit Us</h3>
                <p className="mt-1 text-neutral-400">123 Fashion Street, Suite 400<br/>New York, NY 10001, USA</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-brand/10 p-3 rounded-xl border border-brand/20 text-brand group-hover:bg-brand group-hover:text-neutral-950 transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white group-hover:text-brand transition-colors">Call Us</h3>
                <p className="mt-1 text-neutral-400">+1 (555) 123-4567<br/>Support is available Mon-Fri</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-brand/10 p-3 rounded-xl border border-brand/20 text-brand group-hover:bg-brand group-hover:text-neutral-950 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white group-hover:text-brand transition-colors">Email Us</h3>
                <p className="mt-1 text-neutral-400">support@velvetvogue.com<br/>We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-brand/10 p-3 rounded-xl border border-brand/20 text-brand group-hover:bg-brand group-hover:text-neutral-950 transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white group-hover:text-brand transition-colors">Business Hours</h3>
                <p className="mt-1 text-neutral-400">Monday - Friday: 9:00 AM - 6:00 PM EST<br/>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 shadow-glass transition-all duration-300 hover:border-brand/30 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          
          {isSubmitted && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg flex items-center mb-6 animate-in fade-in zoom-in duration-300">
              <p>Thank you for reaching out! We'll get back to you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-300 placeholder-neutral-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-300 placeholder-neutral-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-300 placeholder-neutral-600"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all duration-300 placeholder-neutral-600 resize-none"
                placeholder="Please describe your issue or question in detail..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-neutral-950 font-bold py-4 px-6 rounded-xl hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-brand/20"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
      </div>
    </div>
    </div>
    </div>
  );
}
