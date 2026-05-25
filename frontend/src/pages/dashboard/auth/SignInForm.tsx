import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import {
  loginDashboardAdmin,
  setDashboardSession,
} from "../../../api/auth";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("blucommw@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from || "/Dashboard";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const session = await loginDashboardAdmin({ email, password });
      setDashboardSession(session);
      navigate(from, { replace: true });
    } catch (loginError) {
      setError("Invalid admin credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="mx-auto w-full max-w-md pt-8 lg:pt-10">
        <Link
          to="/Dashboard"
          className="inline-flex items-center text-sm text-slate-500 transition-colors hover:text-slate-700"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
        <div>
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#04b891]">
              Welcome Back
            </span>
            <h1 className="mb-2 mt-4 text-title-sm font-semibold tracking-tight text-slate-900 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-slate-500">
              Enter the full admin credentials to access the dashboard.
            </p>
          </div>
          <div className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {error ? (
                  <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                    {error}
                  </div>
                ) : null}
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      disabled={isSubmitting}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block text-theme-sm font-normal text-slate-600">
                      Keep me logged in
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#04b891] px-4 py-3 text-sm font-medium text-white shadow-theme-xs transition hover:bg-[#039f7e] disabled:cursor-not-allowed disabled:bg-emerald-300 disabled:opacity-70"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
