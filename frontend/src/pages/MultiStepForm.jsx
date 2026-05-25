import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles, Rocket, Zap, Target } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { createLeadRequest } from '../api/leads';

const InteractiveForm = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1); // Start at Step 1
  const [direction, setDirection] = useState(0);
  const serviceFromUrl = searchParams.get('service') || '';
  const intentFromUrl = searchParams.get('intent') || '';

  const steps = [
    { id: 1, title: "Project Details", subtitle: "Provide basic info" },
    { id: 2, title: "Choose a category", subtitle: "Select a core category" },
    { id: 3, title: "Pick your services", subtitle: "Select up to 4 services" },
    { id: 4, title: "Our main goal is...", subtitle: "Select goals per service" },
    { id: 5, title: "The investment is...", subtitle: "Slide to set your budget" },
    { id: 6, title: "Final Details", subtitle: "Contact information" },
    { id: 7, title: "Review Request", subtitle: "Confirm your details" }
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setStep(step + newDirection);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
  };

  const categories = ["Discovery", "Strategy", "Digital", "Interaction"];

  const servicesByCategory = {
    Discovery: ["Identity","Brand Strategy","Messaging Positioning","Reputation Management","Product Mapping","Persona Creation","Customer Journey Mapping"],
    Strategy: ["Brand Awareness","Strategic Communication","Analysis / Measurement","Impact Measurement","Analytics Implementation","Campaign Optimization","Content Strategy"],
    Digital: ["Search Marketing","Lead Generation","Media Planning / Buying","Content Marketing","Omnichannel Campaigns","Interaction Assets Development","Nurture Strategies"],
    Interaction: ["UI Designing","Prototyping & Wireframing","User Journey Mapping","Interaction Design","Web Maintenance","Data Visualization","Web Development"]
  };

  const serviceAliases = {
    "Lead Gen": "Lead Generation",
    "Interaction Assets Devs": "Interaction Assets Development",
    "Omnichannel Campaign Management": "Omnichannel Campaigns",
  };

  const findServiceCategory = (service) => {
    const canonicalService = serviceAliases[service] || service;

    for (const [category, services] of Object.entries(servicesByCategory)) {
      if (services.includes(canonicalService)) {
        return { category, service: canonicalService };
      }
    }

    return { category: '', service: '' };
  };

  const initialService = findServiceCategory(serviceFromUrl);
  const [formData, setFormData] = useState({
    category: initialService.category,
    services: initialService.service ? [initialService.service] : [],
    goals: {},
    budget: 50,
    projectName: intentFromUrl,
    companyName: '',
    position: '',
    contactNumber: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goalsByService = {
    Identity: ["Build a strong brand","Create a clear visual identity","Craft messaging that connects","Define brand personality","Stand out in the market"],
    "Brand Strategy": ["Plan for long-term growth","Align brand with business goals","Build a clear positioning","Identify market opportunities","Optimize brand performance"],
    // ... keep all goals as in previous code
  };

  const icons = [Target, Rocket, Sparkles, Zap, Check, ArrowRight];

  const toggleService = (service) => {
    const selected = formData.services.includes(service);
    let updatedServices;
    if (selected) {
      updatedServices = formData.services.filter(s => s !== service);
    } else {
      if (formData.services.length >= 4) return;
      updatedServices = [...formData.services, service];
    }
    setFormData({ ...formData, services: updatedServices });
  };

  const toggleGoal = (service, goal) => {
    setFormData(prev => {
      const currentGoals = prev.goals[service] || [];
      const updatedGoals = currentGoals.includes(goal)
        ? currentGoals.filter(g => g !== goal)
        : [...currentGoals, goal];
      return { ...prev, goals: { ...prev.goals, [service]: updatedGoals } };
    });
  };

  const formatGoals = (service) => {
    const goals = formData.goals[service] || [];
    return goals.length ? goals.join(', ') : 'No goals selected';
  };

  const handleSubmit = async () => {
    try {
      setSubmitError('');
      setSubmitted(false);
      setIsSubmitting(true);
      await createLeadRequest(formData);
      setSubmitted(true);
    } catch (error) {
      console.error('[multistep-form][submit]', error);
      setSubmitError('Unable to save your request right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 text-emerald-950 font-sans flex flex-col relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-emerald-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: `${(step / steps.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-10 lg:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-200 via-emerald-300 to-emerald-400 blur-[150px]  -full -z-10" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl text-center rounded-[8px] border border-emerald-200 bg-white/95 px-4 py-8 shadow-xl shadow-emerald-950/10 backdrop-blur sm:px-6 md:px-10 lg:px-12"
          >
            {/* Step Header */}
            <div className="mb-8 md:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="hidden"
              >
                Step 0{step} / 06 — {steps[step-1].subtitle}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-emerald-600 font-mono tracking-wide uppercase text-sm mb-2 block"
              >
                Step {String(step).padStart(2, '0')} / {String(steps.length).padStart(2, '0')} - {steps[step-1].subtitle}
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-emerald-900">
                {steps[step-1].title}
              </h2>
            </div>

            {/* Step Content */}
            <div className="grid gap-4">

              {/* Step 1: Project Details */}
              {step === 1 && (
                <motion.div className="flex flex-col gap-4 md:gap-6">
                  <input 
                    type="text" 
                    placeholder="Project Name" 
                    className="p-4 text-black text-base md:text-lg border-2 border-emerald-200  -lg focus:border-emerald-400 focus:outline-none transition-all placeholder:text-emerald-400"
                    value={formData.projectName || ''} 
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="p-4 text-black text-base md:text-lg border-2 border-emerald-200  -lg focus:border-emerald-400 focus:outline-none transition-all placeholder:text-emerald-400"
                    value={formData.companyName || ''} 
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Your Position" 
                    className="p-4 text-black text-base md:text-lg border-2 border-emerald-200  -lg focus:border-emerald-400 focus:outline-none transition-all placeholder:text-emerald-400"
                    value={formData.position || ''} 
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                  />
                </motion.div>
              )}

              {/* Step 2: Categories */}
              {step === 2 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((cat, idx) => {
                    const Icon = icons[idx % icons.length];
                    return (
                      <OptionCard
                        key={cat}
                        label={cat}
                        icon={<Icon size={24} />}
                        active={formData.category === cat}
                        onClick={() => {
                          setFormData({ ...formData, category: cat, services: [], goals: {} });
                          setTimeout(() => paginate(1), 300);
                        }}
                      />
                    );
                  })}
                </div>
              )}

              {/* Step 3: Services */}
              {step === 3 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {servicesByCategory[formData.category]?.map((service, i) => {
                    const Icon = icons[i % icons.length];
                    const selected = formData.services.includes(service);
                    const disabled = !selected && formData.services.length >= 4;
                    return (
                      <motion.button
                        key={service}
                        whileHover={{ scale: disabled ? 1 : 1.03 }}
                        whileTap={{ scale: disabled ? 1 : 0.97 }}
                        onClick={() => !disabled && toggleService(service)}
                        className={`flex items-center gap-2 p-4  -xl border-2 transition-all shadow-sm text-sm ${
                          selected
                            ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 border-emerald-400 text-emerald-950 shadow-md'
                            : 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-900 hover:border-emerald-400'
                        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="text-emerald-600">{Icon && <Icon size={20} />}</div>
                        <span className="flex-1">{service}</span>
                        {selected && <Check size={16} className="text-emerald-950" />}
                      </motion.button>
                    );
                  })}
                  <p className="text-xs text-emerald-600 mt-2">You can select up to 4 services.</p>
                </div>
              )}

              {/* Step 4: Goals */}
              {step === 4 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {formData.services.map(service => (
                    <div key={service} className="p-6  -2xl shadow-lg bg-gradient-to-tr from-emerald-50 via-emerald-100 to-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-2">{service}</h4>
                      <div className="flex flex-wrap gap-2">
                        {goalsByService[service]?.map((goal, idx) => {
                          const selected = formData.goals[service]?.includes(goal);
                          return (
                            <button
                              key={idx}
                              onClick={() => toggleGoal(service, goal)}
                              className={`px-3 py-1  -full text-sm border transition-all ${
                                selected
                                  ? "bg-emerald-400 border-emerald-500 text-emerald-950"
                                  : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                              }`}
                            >
                              {goal}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 5: Budget */}
              {step === 5 && (
                <div className="space-y-8 py-8">
                  <div className="relative h-24 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-extrabold text-emerald-300 opacity-20 absolute tracking-tight">${formData.budget}k</span>
                    <input
                      type="range"
                      min="10"
                      max="250"
                      step="5"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full h-3  -lg appearance-none cursor-pointer bg-gradient-to-r from-emerald-200 to-emerald-400 accent-emerald-500"
                    />
                  </div>
                  <div className="flex justify-between text-emerald-600 font-mono">
                    <span>$10k (Startup)</span>
                    <span>$250k+ (Enterprise)</span>
                  </div>
                </div>
              )}

              {/* Step 6: Contact */}
              {step === 6 && (
                <motion.div className="flex flex-col gap-4 md:gap-6">
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="p-4 text-black text-base md:text-lg border-2 border-emerald-200  -lg focus:border-emerald-400 focus:outline-none transition-all placeholder:text-emerald-400"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-4 text-black text-base md:text-lg border-2 border-emerald-200  -lg focus:border-emerald-400 focus:outline-none transition-all placeholder:text-emerald-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </motion.div>
              )}

              {/* Step 7: Review */}
              {step === 7 && (
                <motion.div className="space-y-5 text-left">
                  <div className="grid gap-4 md:grid-cols-2">
                    <ReviewItem label="Project Name" value={formData.projectName || 'Not provided'} />
                    <ReviewItem label="Company Name" value={formData.companyName || 'Not provided'} />
                    <ReviewItem label="Position" value={formData.position || 'Not provided'} />
                    <ReviewItem label="Category" value={formData.category || 'Not selected'} />
                    <ReviewItem label="Budget" value={`$${formData.budget}k`} />
                    <ReviewItem label="Contact Number" value={formData.contactNumber || 'Not provided'} />
                    <ReviewItem label="Email" value={formData.email || 'Not provided'} />
                  </div>

                  <div className="rounded-[8px] border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">Selected Services</p>
                    {formData.services.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {formData.services.map((service) => (
                          <span key={service} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200">
                            {service}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 text-sm font-medium text-emerald-800">No services selected.</p>
                    )}
                  </div>

                  <div className="rounded-[8px] border border-emerald-200 bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">Goals</p>
                    <div className="mt-3 grid gap-3">
                      {formData.services.length ? formData.services.map((service) => (
                        <div key={service} className="border-b border-emerald-100 pb-3 last:border-b-0 last:pb-0">
                          <p className="font-semibold text-emerald-950">{service}</p>
                          <p className="mt-1 text-sm leading-6 text-emerald-700">{formatGoals(service)}</p>
                        </div>
                      )) : (
                        <p className="text-sm font-medium text-emerald-800">No service goals selected.</p>
                      )}
                    </div>
                  </div>

                  {submitted && (
                    <p className="rounded-lg border border-emerald-300 bg-emerald-100 p-4 text-sm font-semibold text-emerald-800">
                      Request saved. You can view it in the dashboard.
                    </p>
                  )}
                  {submitError && (
                    <p className="rounded-lg border border-rose-300 bg-rose-50 p-4 text-sm font-semibold text-rose-700">
                      {submitError}
                    </p>
                  )}
                </motion.div>
              )}

            </div>

            {/* Navigation */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4 md:mt-12 md:gap-6">
              {step > 1 && (
                <button onClick={() => paginate(-1)} className="p-4  -full border-2 border-emerald-200 hover:border-emerald-400 text-emerald-600 transition-colors shadow-sm hover:shadow-md">
                  <ArrowLeft size={24} />
                </button>
              )}
              {step < steps.length && (
                <motion.button onClick={() => paginate(1)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-black shadow-md hover:shadow-lg transition-all flex items-center gap-2" variant="white">
                  Next <ArrowRight size={20} />
                </motion.button>
              )}
              {step === steps.length && (
                <motion.button onClick={handleSubmit} disabled={isSubmitting} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-emerald-950 font-black  -full shadow-md hover:shadow-lg transition-all uppercase text-white disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? 'Launching...' : 'Launch Request'}
                </motion.button>
              )}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const OptionCard = ({ label, icon, onClick, active }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={`flex flex-col items-center justify-center gap-1 p-3 min-h-[70px]  -xl border-2 transition-all shadow-sm text-xs ${
      active
        ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 border-emerald-400 text-emerald-950 shadow-md'
        : 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-900 hover:border-emerald-400'
    }`}
  >
    <div className="text-emerald-600">{icon}</div>
    <span className="font-semibold text-center">{label}</span>
    {active && <Check size={14} className="text-emerald-950 mt-1" />}
  </motion.button>
);

const ReviewItem = ({ label, value }) => (
  <div className="rounded-[8px] border border-emerald-200 bg-emerald-50 p-4">
    <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">{label}</p>
    <p className="mt-2 break-words text-base font-semibold text-emerald-950">{value}</p>
  </div>
);

export default InteractiveForm;
