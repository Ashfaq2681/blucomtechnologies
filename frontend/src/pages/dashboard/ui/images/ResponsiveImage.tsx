import { dashboardAssets } from "../../assets";

export default function ResponsiveImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={dashboardAssets.gridImages.gridImage01}
          alt="Cover"
          className="w-full rounded-3xl border border-slate-200 object-cover"
        />
      </div>
    </div>
  );
}
