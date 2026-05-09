import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../icons";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <GroupIcon className="size-6 text-blue-600" />
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-medium text-slate-500">
              Customers
            </span>
            <h4 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      <div className="rounded-[28px] border border-slate-200 bg-white p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50">
          <BoxIconLine className="size-6 text-amber-600" />
        </div>
        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-medium text-slate-500">
              Orders
            </span>
            <h4 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon />
            9.05%
          </Badge>
        </div>
      </div>
    </div>
  );
}
