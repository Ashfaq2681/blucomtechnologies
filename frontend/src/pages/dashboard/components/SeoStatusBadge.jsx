const statusClasses = {
  Excellent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Good: "bg-blue-50 text-blue-700 ring-blue-200",
  "Needs Improvement": "bg-amber-50 text-amber-700 ring-amber-200",
  Poor: "bg-red-50 text-red-700 ring-red-200",
};

export default function SeoStatusBadge({ score, status }) {
  const safeStatus =
    status || (score >= 90 ? "Excellent" : score >= 70 ? "Good" : score >= 50 ? "Needs Improvement" : "Poor");

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
        statusClasses[safeStatus] || statusClasses.Poor
      }`}
    >
      {score ?? "N/A"}/100 {safeStatus}
    </span>
  );
}
