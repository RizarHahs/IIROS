"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "viewer";
  avatar: string;
  department: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const USERS: Record<string, { password: string; user: AuthUser }> = {
  "admin@login.com": {
    password: "@123",
    user: {
      id: "u1",
      email: "admin@example.com",
      name: "BKC Admin",
      role: "admin",
      avatar: "BA",
      department: "Energy Manager",
    },
  },
  "viewer@login.com": {
    password: "viewer123",
    user: {
      id: "u2",
      email: "viewer@login.com",
      name: "BKC Viewer",
      role: "viewer",
      avatar: "BV",
      department: "Operations",
    },
  },
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => ({ success: false }),
  logout: () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("iiros_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch { }
    setHydrated(true);
  }, []);

  const login = (email: string, password: string) => {
    const entry = USERS[email.toLowerCase().trim()];
    if (!entry) {
      return { success: false, error: "Account not found. Please check your email." };
    }
    if (entry.password !== password) {
      return { success: false, error: "Incorrect password. Please try again." };
    }
    setUser(entry.user);
    localStorage.setItem("iiros_user", JSON.stringify(entry.user));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("iiros_user");
  };

  // Don't render children until we've hydrated from localStorage
  if (!hydrated) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
