import { useState } from "react";
import { dashboardAssets } from "../assets";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../icons";
import CountryMap from "./CountryMap";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            Customers Demographic
          </h3>
          <p className="mt-1 text-theme-sm text-slate-500">
            Number of customer based on country
          </p>
        </div>
        <div className="relative inline-block">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400 transition hover:border-slate-300 hover:bg-white hover:text-slate-700"
            onClick={toggleDropdown}
          >
            <MoreDotIcon className="size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full rounded-lg text-left font-normal text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full rounded-lg text-left font-normal text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="my-6 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50/70 px-4 py-6 sm:px-6">
        <div
          id="mapOne"
          className="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
        >
          <CountryMap />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="items-center w-full rounded-full max-w-8">
              <img src={dashboardAssets.countries.country01} alt="usa" />
            </div>
            <div>
              <p className="text-theme-sm font-semibold text-slate-900">
                USA
              </p>
              <span className="block text-theme-xs text-slate-500">
                2,379 Customers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-slate-200">
              <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="text-theme-sm font-medium text-slate-900">
              79%
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="items-center w-full rounded-full max-w-8">
              <img src={dashboardAssets.countries.country02} alt="france" />
            </div>
            <div>
              <p className="text-theme-sm font-semibold text-slate-900">
                France
              </p>
              <span className="block text-theme-xs text-slate-500">
                589 Customers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-slate-200">
              <div className="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="text-theme-sm font-medium text-slate-900">
              23%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
