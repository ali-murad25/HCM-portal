
"use client";

import DashboardLayout from "@/components/common/DashboardLayout";
import StatCard from "@/components/common/StatCard";
import { Users, UserCheck, CalendarDays, Clock } from "lucide-react";

export default function HRDashboard() {
  return (
    <DashboardLayout role="hr">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">HR Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage employees, attendance and leave requests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard title="Total Employees" value="248" icon={Users}
          color="bg-blue-100 text-blue-600" change="Company workforce" />

        <StatCard title="Present Today" value="215" icon={UserCheck}
          color="bg-emerald-100 text-emerald-600" change="86.7% attendance" />

        <StatCard title="Leave Requests" value="18" icon={CalendarDays}
          color="bg-purple-100 text-purple-600" change="Pending approval" />

        <StatCard title="Late Arrivals" value="08" icon={Clock}
          color="bg-orange-100 text-orange-600" change="Today's records" />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold text-lg text-slate-800 mb-5">
            Pending Leave Requests
          </h2>

          {[
            { name: "John Smith", type: "Annual Leave", days: "3 Days" },
            { name: "Sarah Wilson", type: "Sick Leave", days: "2 Days" },
            { name: "Michael Brown", type: "Casual Leave", days: "1 Day" },
          ].map((item) => (
            <div key={item.name}
              className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">

              <div>
                <p className="font-semibold text-sm text-slate-700">{item.name}</p>
                <p className="text-xs text-slate-500 mt-1">{item.type} · {item.days}</p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                Pending
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold text-lg text-slate-800 mb-5">
            HR Quick Overview
          </h2>

          <div className="space-y-5">
            <div className="bg-blue-50 p-5 rounded-xl">
              <p className="text-sm text-blue-600">Active Employees</p>
              <h2 className="text-3xl font-bold text-blue-800 mt-1">240</h2>
            </div>

            <div className="bg-emerald-50 p-5 rounded-xl">
              <p className="text-sm text-emerald-600">Approved Leaves</p>
              <h2 className="text-3xl font-bold text-emerald-800 mt-1">32</h2>
            </div>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
