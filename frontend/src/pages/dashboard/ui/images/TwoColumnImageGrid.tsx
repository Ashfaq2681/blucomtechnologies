import { dashboardAssets } from "../../assets";

export default function TwoColumnImageGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <img
          src={dashboardAssets.gridImages.gridImage02}
          alt=" grid"
          className="rounded-3xl border border-slate-200"
        />
      </div>

      <div>
        <img
          src={dashboardAssets.gridImages.gridImage03}
          alt=" grid"
          className="rounded-3xl border border-slate-200"
        />
      </div>
    </div>
  );
}
