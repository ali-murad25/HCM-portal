
"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
  UserRound,
} from "lucide-react";

export default function Navbar({ onMenuClick, user }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-5 md:px-8 flex items-center justify-between sticky top-0 z-30">

      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-slate-600"
        >
          <Menu size={25} />
        </button>

        <div>
          <h2 className="font-bold text-xl text-slate-800">
            Welcome Back!
          </h2>
          <p className="text-xs text-slate-500">
            Manage your workspace
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">

        <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-3 py-2">
          <Search size={17} className="text-slate-400" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm w-32"
          />
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
          <Bell size={21} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <UserRound size={21} />
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-slate-800">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-slate-500 capitalize">
                {user?.role || "Employee"}
              </p>
            </div>

            <ChevronDown size={16} className="text-slate-400" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-14 w-48 bg-white shadow-xl border border-slate-100 rounded-xl p-3">
              <p className="text-sm font-semibold text-slate-800">
                {user?.email}
              </p>
              <p className="text-xs text-slate-500 capitalize mt-1">
                {user?.designation}
              </p>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
