import React from "react";
import { dashboardAssets } from "./assets";
import GridShape from "./common/GridShape";
import { Link } from "react-router-dom";
import ThemeTogglerTwo from "./common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-1 bg-slate-50 p-4 sm:p-0">
      <div className="relative flex min-h-screen w-full flex-col justify-center lg:flex-row sm:p-0">
        {children}
        <div className="hidden w-full items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 lg:grid lg:w-1/2">
          <div className="relative z-1 flex items-center justify-center px-10">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex max-w-sm flex-col items-center">
              <Link to="/Dashboard" className="block mb-4">
                <img
                  width={231}
                  height={48}
                  src={dashboardAssets.authLogo}
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-sm leading-6 text-slate-300">
                A cleaner light-first dashboard experience for authentication,
                account access, and onboarding.
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
