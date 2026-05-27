import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setError('You must agree to the Terms & Conditions');
      return;
    }
    setError('');
    // Mock signup success
    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <div className="relative bg-neutral-950 text-neutral-300 min-h-screen flex items-center justify-center px-4 py-24">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <ScrollReveal animation="fade-up" duration="duration-700">
        <div className="relative z-10 w-full max-w-md bg-neutral-900/40 border border-neutral-900 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl font-extrabold text-white">Create Account</h1>
            <p className="text-neutral-400 text-sm">
              Sign up today and get access to exclusive summer deals.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-neutral-950/60 border border-neutral-800 focus:border-brand rounded-2xl text-white text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-neutral-950/60 border border-neutral-800 focus:border-brand rounded-2xl text-white text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-neutral-950/60 border border-neutral-800 focus:border-brand rounded-2xl text-white text-sm focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-neutral-950/60 border border-neutral-800 focus:border-brand rounded-2xl text-white text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="agree-terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-neutral-800 text-brand focus:ring-brand bg-neutral-950 focus:ring-offset-neutral-900"
              />
              <label htmlFor="agree-terms" className="ml-2 text-sm text-neutral-400 cursor-pointer selection:bg-transparent leading-snug">
                I agree to the{' '}
                <Link to="#" className="text-brand hover:text-brand-light font-semibold">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-brand hover:text-brand-light font-semibold">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-brand/20 transition-all duration-300"
            >
              Sign Up
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center text-sm text-neutral-400 mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-brand hover:text-brand-light font-bold">
              Log In
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
