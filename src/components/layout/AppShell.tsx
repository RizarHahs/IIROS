"use client";

import { AuthProvider, useAuth } from "@/lib/auth";
import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col pl-0 md:pl-[72px] lg:pl-[240px] transition-all duration-200">
          <Topbar />
          <main className="flex-1 overflow-x-hidden p-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </AuthProvider>
  );
}
