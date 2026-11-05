
"use client";

import DashboardLayout from "@/components/common/DashboardLayout";
import StatCard from "@/components/common/StatCard";
import {
  Users,
  UserCheck,
  Building2,
  Wallet,
  MoreHorizontal,
} from "lucide-react";

const employees = [
  { name: "John Smith", department: "Development", role: "Developer", status: "Active" },
  { name: "Sarah Johnson", department: "Human Resources", role: "HR Manager", status: "Active" },
  { name: "Michael Brown", department: "Design", role: "UI Designer", status: "On Leave" },
  { name: "Emily Davis", department: "Marketing", role: "Marketing Lead", status: "Active" },
  { name: "David Wilson", department: "Finance", role: "Accountant", status: "Active" },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Here's what's happening in your organization today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Employees"
          value="248"
          icon={Users}
          color="bg-blue-100 text-blue-600"
          change="+12% from last month"
        />

        <StatCard
          title="Present Today"
          value="215"
          icon={UserCheck}
          color="bg-emerald-100 text-emerald-600"
          change="86.7% attendance"
        />

        <StatCard
          title="Departments"
          value="12"
          icon={Building2}
          color="bg-purple-100 text-purple-600"
          change="Across organization"
        />

        <StatCard
          title="Monthly Payroll"
          value="$85,400"
          icon={Wallet}
          color="bg-orange-100 text-orange-600"
          change="Current month"
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-bold text-lg text-slate-800">
                Recent Employees
              </h2>
              <p className="text-sm text-slate-500">
                Recently updated employee records
              </p>
            </div>

            <button className="text-blue-600 text-sm font-semibold">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[550px]">
              <thead>
                <tr className="border-b border-slate-100 text-xs text-slate-400">
                  <th className="py-3">EMPLOYEE</th>
                  <th className="py-3">DEPARTMENT</th>
                  <th className="py-3">POSITION</th>
                  <th className="py-3">STATUS</th>
                  <th className="py-3"></th>
                </tr>
              </thead>

              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index} className="border-b border-slate-50">
                    <td className="py-4 font-semibold text-sm text-slate-700">
                      {emp.name}
                    </td>

                    <td className="py-4 text-sm text-slate-500">
                      {emp.department}
                    </td>

                    <td className="py-4 text-sm text-slate-500">
                      {emp.role}
                    </td>

                    <td className="py-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        emp.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        {emp.status}
                      </span>
                    </td>

                    <td className="py-4">
                      <MoreHorizontal size={18} className="text-slate-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg text-slate-800">
            Workforce Overview
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Employee distribution
          </p>

          <div className="mt-8 space-y-6">

            {[
              { name: "Development", count: "85", percent: "85%", color: "bg-blue-500" },
              { name: "Marketing", count: "55", percent: "65%", color: "bg-purple-500" },
              { name: "HR", count: "30", percent: "45%", color: "bg-emerald-500" },
              { name: "Finance", count: "25", percent: "35%", color: "bg-orange-500" },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-semibold text-slate-800">
                    {item.count}
                  </span>
                </div>

                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: item.percent }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
