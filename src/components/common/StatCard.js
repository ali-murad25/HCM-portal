
export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  change,
}) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>
        </div>

        <div className={`p-4 rounded-xl ${color}`}>
          <Icon size={25} />
        </div>
      </div>

      <p className="text-xs text-emerald-600 mt-4 font-medium">
        {change}
      </p>

    </div>
  );
}
