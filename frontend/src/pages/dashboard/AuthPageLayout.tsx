import React from "react";
import headerLogo from "../../assets/logo-min.png";
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
        <div className="hidden w-full items-center border-l border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-slate-100 lg:grid lg:w-1/2">
          <div className="relative z-1 flex items-center justify-center px-10">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
           
            <div className="flex max-w-sm flex-col items-center">
              <Link to="/Dashboard" className="mb-6 block rounded-2xl border border-emerald-100 bg-white/90 px-7 py-5 shadow-sm">
                <img
                  width={260}
                  height={83}
                  src={headerLogo}
                  alt="Blucom Technologies"
                  className="h-auto w-[260px]"
                />
              </Link>
              <div className="mb-5 h-1 w-16 rounded-full bg-[#04b891]" />
              <p className="text-center text-sm leading-6 text-slate-600">
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
