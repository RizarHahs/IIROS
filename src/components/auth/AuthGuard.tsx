"use client";

import { useAuth } from "@/lib/auth";
import LoginPage from "@/components/auth/LoginPage";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [showApp, setShowApp] = useState(false);

  const handleLoginSuccess = () => {
    // Small delay for a smooth transition
    setTimeout(() => setShowApp(true), 100);
  };

  if (!isAuthenticated) {
    return <LoginPage onSuccess={handleLoginSuccess} />;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
