
"use client";

import DashboardLayout from "@/components/common/DashboardLayout";
import StatCard from "@/components/common/StatCard";
import {
  CalendarCheck,
  CalendarDays,
  Clock,
  Wallet,
} from "lucide-react";

export default function EmployeeDashboard() {
  return (
    <DashboardLayout role="employee">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Employee Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome! Here's your personal workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard title="Present Days" value="22" icon={CalendarCheck}
          color="bg-blue-100 text-blue-600" change="This month" />

        <StatCard title="Leave Balance" value="12" icon={CalendarDays}
          color="bg-emerald-100 text-emerald-600" change="Available days" />

        <StatCard title="Working Hours" value="168h" icon={Clock}
          color="bg-purple-100 text-purple-600" change="This month" />

        <StatCard title="Monthly Salary" value="$3,500" icon={Wallet}
          color="bg-orange-100 text-orange-600" change="Current salary" />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg text-slate-800">
            Today's Attendance
          </h2>

          <div className="bg-emerald-50 rounded-xl p-6 mt-5">
            <p className="text-emerald-700 text-sm font-medium">
              Attendance Status
            </p>
            <h2 className="text-2xl font-bold text-emerald-800 mt-2">
              Present
            </h2>
            <p className="text-xs text-emerald-600 mt-2">
              Check-in: 09:00 AM
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold text-sm">
              Check In
            </button>

            <button className="bg-slate-800 hover:bg-slate-900 text-white rounded-xl py-3 font-semibold text-sm">
              Check Out
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg text-slate-800">
            My Information
          </h2>

          <div className="space-y-5 mt-6">
            {[
              ["Employee ID", "EMP-001"],
              ["Department", "Development"],
              ["Designation", "Software Developer"],
              ["Joining Date", "15 January 2024"],
              ["Employment Status", "Active"],
            ].map(([label, value]) => (
              <div key={label}
                className="flex justify-between gap-3 border-b border-slate-100 pb-3">
                <span className="text-sm text-slate-500">{label}</span>
                <span className="text-sm font-semibold text-slate-800 text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
