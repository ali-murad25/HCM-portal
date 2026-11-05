
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, getDashboardPath } from "@/lib/auth";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  Users,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const result = loginUser(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Temporary frontend session only
    sessionStorage.setItem(
      "hcmUser",
      JSON.stringify(result.user)
    );

    router.push(getDashboardPath(result.user.role));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}

        <div className="hidden md:flex bg-slate-900 text-white p-12 flex-col justify-between">

          <div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-3 rounded-xl">
                <BriefcaseBusiness size={28} />
              </div>

              <h1 className="text-2xl font-bold">
                HCM Portal
              </h1>
            </div>

            <h2 className="text-4xl font-bold mt-16 leading-tight">
              Human Capital
              <span className="text-blue-400 block">
                Management
              </span>
            </h2>

            <p className="text-slate-300 mt-6 leading-7">
              Manage your workforce, employees,
              attendance and human resources
              from one powerful platform.
            </p>
          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-400" />
              <span>Secure Role Based Access</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-blue-400" />
              <span>Smart Employee Management</span>
            </div>

            <p className="text-slate-500 text-sm pt-8">
              © 2026 HCM Management System
            </p>

          </div>
        </div>

        {/* Right Side */}

        <div className="p-8 sm:p-12 flex flex-col justify-center">

          <div className="mb-8">
            <p className="text-blue-600 font-semibold text-sm">
              WELCOME BACK
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-2">
              Sign In
            </h2>

            <p className="text-slate-500 mt-2">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={19}
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={19}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Error */}

            {error && (
              <div className="bg-red-50 text-red-600 border border-red-100 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-blue-100"
            >
              Sign In
            </button>

          </form>

          {/* Demo Credentials */}


        </div>

      </div>

    </div>
  );
}
