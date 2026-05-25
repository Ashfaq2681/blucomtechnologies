import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { subscribeToNewsletter } from "../api/leads";

const SubscriptionBanner = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      return;
    }

    try {
      setError("");
      setStatus("");
      setIsSubmitting(true);
      await subscribeToNewsletter({ email: normalizedEmail, source: "subscription_banner" });
      setEmail("");
      setStatus("Subscribed. Thanks for joining.");
    } catch (submitError) {
      console.error("[newsletter][banner]", submitError);
      setError("Unable to subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="subscription-banner-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-slate-200 bg-[#1E2832] px-5 py-7 shadow-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-emerald-300">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Newsletter
          </div>
          <h2 id="subscription-banner-heading" className="text-2xl font-semibold text-white sm:text-3xl">
            Subscribe for digital strategy updates.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Get practical marketing, technology, and growth insights from Blucom Technologies.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl" aria-label="Newsletter subscription form">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="subscription-banner-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscription-banner-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
              className="min-h-12 flex-1 rounded-md border border-slate-500 bg-white px-4 text-base text-slate-900 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 text-base font-semibold text-white transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#1E2832]"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          {status && (
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-200" role="status">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {status}
            </p>
          )}
          {error && (
            <p className="mt-3 text-sm font-medium text-rose-200" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
