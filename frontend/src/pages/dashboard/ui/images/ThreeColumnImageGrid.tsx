import { dashboardAssets } from "../../assets";

export default function ThreeColumnImageGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <div>
        <img
          src={dashboardAssets.gridImages.gridImage04}
          alt=" grid"
          className="rounded-3xl border border-slate-200"
        />
      </div>

      <div>
        <img
          src={dashboardAssets.gridImages.gridImage05}
          alt=" grid"
          className="rounded-3xl border border-slate-200"
        />
      </div>

      <div>
        <img
          src={dashboardAssets.gridImages.gridImage06}
          alt=" grid"
          className="rounded-3xl border border-slate-200"
        />
      </div>
    </div>
  );
}
