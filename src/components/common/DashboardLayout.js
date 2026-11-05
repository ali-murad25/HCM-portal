
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ role, children }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("hcmUser");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.role !== role) {
        const paths = {
          admin: "/admin/dashboard",
          hr: "/hr/dashboard",
          employee: "/employee/dashboard",
        };

        router.replace(paths[parsedUser.role] || "/login");
        return;
      }

      setUser(parsedUser);
      setLoading(false);
    } catch {
      sessionStorage.removeItem("hcmUser");
      router.replace("/login");
    }
  }, [role, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-blue-600 font-semibold animate-pulse">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <Sidebar
        role={role}
        open={open}
        setOpen={setOpen}
      />

      <div className="lg:ml-64 min-h-screen flex flex-col">

        <Navbar
          user={user}
          onMenuClick={() => setOpen(!open)}
        />

        <main className="p-5 md:p-8 flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}
