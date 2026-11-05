
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  CalendarDays,
  UserRound,
  Settings,
  LogOut,
  X,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

const menuItems = {
  admin: [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Employees", path: "/admin/employees", icon: Users },
    { name: "Departments", path: "/admin/departments", icon: Building2 },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ],
  hr: [
    { name: "Dashboard", path: "/hr/dashboard", icon: LayoutDashboard },
    { name: "Employees", path: "/hr/employees", icon: Users },
    { name: "Attendance", path: "/hr/attendance", icon: CalendarCheck },
    { name: "Leaves", path: "/hr/leaves", icon: CalendarDays },
  ],
  employee: [
    { name: "Dashboard", path: "/employee/dashboard", icon: LayoutDashboard },
    { name: "Attendance", path: "/employee/attendance", icon: CalendarCheck },
    { name: "My Leaves", path: "/employee/leaves", icon: ClipboardList },
    { name: "My Profile", path: "/employee/profile", icon: UserRound },
  ],
};

export default function Sidebar({ role, open, setOpen }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("hcmUser");
    router.replace("/login");
  };

  const title = role === "admin" ? "Administrator" : role === "hr" ? "HR Manager" : "Employee";

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>

        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShieldCheck size={23} />
            </div>
            <div>
              <h1 className="font-bold text-xl">HCM Portal</h1>
              <p className="text-xs text-slate-400">Management System</p>
            </div>
          </div>

          <button onClick={() => setOpen(false)} className="lg:hidden">
            <X size={22} />
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">
            Workspace
          </p>
          <p className="font-semibold text-sm">{title}</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {(menuItems[role] || []).map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={19} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition"
          >
            <LogOut size={19} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>

      </aside>
    </>
  );
}
