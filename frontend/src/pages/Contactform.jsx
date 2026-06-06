import React, { useState } from "react";
import { createContactLead } from "../api/leads";

const scopeOptions = {
  Launch: ["Identity Concept", "UI UX Design", "Brand Positioning", "Business Plan", "Market Research", "Digital Marketing"],
  Identity: ["Discovery Workshop", "Messaging Matrix", "Guidelines Manual", "Reputation Management"],
  "UI UX": ["UX Wireframing", "Interface Mockups", "Interactive Prototype", "Usability Mapping"],
  Marketing: ["Technical SEO audit", "Paid Google/Meta ads", "Content systems", "Funnels optimization"],
};

const ContactFormPage = ({
  source = "contact_form",
  heading = "Let's build something great together",
  eyebrow = "Have an idea",
  intro = "The digital landscape continues to evolve at an unprecedented pace. Partner with Blucom Technologies and discover how strategic thinking, innovative design, and performance solutions can transform your business. Tell us a little about your project so we can understand your goals.",
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("Launch");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setStatus("");
      setError("");
      setIsSubmitting(true);
      await createContactLead({
        ...formData,
        title: activeTab,
        source,
      });
      setFormData({ name: "", email: "", message: "" });
      setStatus("Your message has been received.");
    } catch (submitError) {
      console.error("[contact-form][submit]", submitError);
      setError("Unable to submit your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`max-w-7xl mx-auto border-b border-slate-200 bg-slate-50/50 p-6 sm:p-12 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="space-y-4 lg:col-span-5">
          <span className="block font-mono text-[10px] font-bold text-blue-600">{eyebrow}</span>
          <h2 className="font-serif text-2xl font-bold text-slate-950 sm:text-3xl">{heading}</h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-[13px]">{intro}</p>
          <div className="grid grid-cols-2 gap-2 pt-2 font-mono text-xs text-slate-600">
            <span>Brand foundations</span>
            <span>Marketing systems</span>
            <span>UX/UI direction</span>
            <span>Web growth platforms</span>
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7">
          <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 md:grid-cols-3">
            <div>
              <p className="mb-1 font-semibold text-slate-950">Office:</p>
              <p>Islamabad</p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-slate-950">Phone:</p>
              <p>+92-303-5907230 | +92-334-0011126</p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-slate-950">Email:</p>
              <p>connect@blucomtechnologies.com</p>
            </div>
          </div>

          <div className="flex flex-wrap border-b border-slate-200 font-mono text-[11px]">
            {Object.keys(scopeOptions).map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 pb-2.5 font-bold transition ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                I want to: {tab}
              </button>
            ))}
          </div>

          <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
            <span className="block font-mono text-[10px] font-bold text-slate-400">Dynamic scopes active:</span>
            <div className="flex flex-wrap gap-2 text-slate-700">
              {scopeOptions[activeTab].map((scope) => (
                <span key={scope} className="rounded border border-slate-200 bg-white px-2 py-1 text-[11px]">
                  {scope}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs focus:border-slate-400 focus:bg-white focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs focus:border-slate-400 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your structural timeline requirements..."
              rows="3"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs focus:border-slate-400 focus:bg-white focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-slate-950 py-3.5 font-mono text-[11px] font-bold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Let's get started"}
            </button>
            {status && <p className="text-sm font-semibold text-emerald-600">{status}</p>}
            {error && <p className="text-sm font-semibold text-rose-600">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormPage;
