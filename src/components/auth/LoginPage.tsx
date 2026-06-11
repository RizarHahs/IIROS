"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Eye, EyeOff, Shield, ArrowRight, Sparkles, Lock, Mail } from "lucide-react";

export default function LoginPage({ onSuccess }: { onSuccess: () => void }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate loading for feel
    await new Promise((r) => setTimeout(r, 800));

    const result = login(email, password);
    if (result.success) {
      onSuccess();
    } else {
      setError(result.error || "Login failed.");
      setIsLoading(false);
    }
  };

  const fillCredentials = (em: string, pw: string) => {
    setEmail(em);
    setPassword(pw);
    setError("");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#060a10]">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/6 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[20%] h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[440px] mx-4"
      >
        {/* Logo & Branding */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-5 shadow-lg shadow-primary/10">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Welcome to IIROS
          </h1>
          <p className="text-sm text-slate-400">
            Intelligent Infrastructure & Resource Optimization System
          </p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 shadow-2xl"
        >
          {/* Security badge */}
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15]">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[11px] font-medium text-emerald-400">
              Secure Authentication Portal
            </span>
            <div className="ml-auto flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400/70">Encrypted</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Mail className="h-3 w-3" /> Email Address
              </label>
              <div className={`relative rounded-xl border transition-all duration-300 ${
                focusedField === 'email' 
                  ? 'border-primary/50 ring-2 ring-primary/20 bg-white/[0.05]' 
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]'
              }`}>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <Lock className="h-3 w-3" /> Password
              </label>
              <div className={`relative rounded-xl border transition-all duration-300 ${
                focusedField === 'password' 
                  ? 'border-primary/50 ring-2 ring-primary/20 bg-white/[0.05]' 
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]'
              }`}>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-4 py-3 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -5, height: 0 }}
                  className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5"
                >
                  <p className="text-xs text-red-400">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              id="login-submit"
              type="submit"
              disabled={isLoading || !email || !password}
              className="group w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Authenticating...
                  </>
                ) : (
                  <>
                    Sign In <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0c1018] px-3 text-[10px] uppercase tracking-wider text-slate-500">
                Quick Access
              </span>
            </div>
          </div>

          {/* Demo credentials */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => fillCredentials("admin@login.com", "admin123")}
              className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.05]"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-white">Admin</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Full Access</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => fillCredentials("viewer@login.com", "viewer123")}
              className="group flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/[0.05]"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                <Eye className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-white">Viewer</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Read Only</p>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <p className="text-[11px] text-slate-600 flex items-center justify-center gap-1.5">
            <Sparkles className="h-3 w-3 text-primary/50" />
            Powered by Gemini AI • BKC IIC Quest 4.0
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
