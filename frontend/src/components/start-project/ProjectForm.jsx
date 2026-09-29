// import { useState } from "react";
// import {
//   ArrowRight,
//   Code2,
//   Globe,
//   MessageCircle,
//   ShoppingCart,
//   Zap,
// } from "lucide-react";

// import Container from "../common/Container";

// const services = [
//   {
//     id: "website",
//     title: "Website",
//     icon: Globe,
//   },
//   {
//     id: "ecommerce",
//     title: "E-commerce",
//     icon: ShoppingCart,
//   },
//   {
//     id: "web-application",
//     title: "Web Application",
//     icon: Code2,
//   },
//   {
//     id: "custom-development",
//     title: "Custom Development",
//     icon: Code2,
//   },
//   {
//     id: "not-sure",
//     title: "Not sure yet",
//     icon: MessageCircle,
//   },
// ];

// const ProjectForm = () => {
//   const [selectedService, setSelectedService] = useState("");

//   return (
//     <section className="bg-white py-16 lg:py-20">
//       <Container>
//         <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] lg:grid-cols-[0.8fr_1.2fr]">

//           {/* Left Content */}
//           <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
//             <div>
//               <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
//                 Get In Touch
//               </span>

//               <h2 className="mt-5 max-w-[420px] text-4xl font-semibold tracking-tight text-[#0f1f45] sm:text-5xl">
//                 Tell us about your project.
//               </h2>

//               <p className="mt-6 max-w-[440px] text-base leading-7 text-[#64748b]">
//                 Whether it's a new website, an e-commerce store, a custom web
//                 application or a specific feature, share your requirements and
//                 we'll help you find the right way forward.
//               </p>
//             </div>

//             <div className="mt-10 space-y-7">
//               <div className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
//                   <Zap size={20} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0f1f45]">
//                     Quick response
//                   </h3>

//                   <p className="mt-1 text-sm leading-6 text-[#64748b]">
//                     We usually get back within 1–2 business days.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
//                   <MessageCircle size={20} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0f1f45]">
//                     Direct communication
//                   </h3>

//                   <p className="mt-1 text-sm leading-6 text-[#64748b]">
//                     You'll connect directly with our team.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
//                   <Globe size={20} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0f1f45]">
//                     Focused on your goals
//                   </h3>

//                   <p className="mt-1 text-sm leading-6 text-[#64748b]">
//                     We understand your business and suggest the right approach.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="bg-white p-6 sm:p-8 lg:p-10">
//             <form className="space-y-6">

//               {/* Name + Email */}
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="text-sm font-semibold text-[#0f1f45]">
//                     Your Name <span className="text-[#315fcf]">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0f1f45] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-[#0f1f45]">
//                     Email Address <span className="text-[#315fcf]">*</span>
//                   </label>

//                   <input
//                     type="email"
//                     placeholder="you@example.com"
//                     className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0f1f45] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
//                   />
//                 </div>
//               </div>

//               {/* Company */}
//               <div>
//                 <label className="text-sm font-semibold text-[#0f1f45]">
//                   Company / Business
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Your company or business name (optional)"
//                   className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0f1f45] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
//                 />
//               </div>

//               {/* Service */}
//               <div>
//                 <label className="text-sm font-semibold text-[#0f1f45]">
//                   What do you need?{" "}
//                   <span className="text-[#315fcf]">*</span>
//                 </label>

//                 <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//                   {services.map((service) => {
//                     const Icon = service.icon;
//                     const active = selectedService === service.id;

//                     return (
//                       <button
//                         key={service.id}
//                         type="button"
//                         onClick={() => setSelectedService(service.id)}
//                         className={`flex min-h-[76px] items-center gap-3 rounded-xl border p-4 text-left transition ${
//                           active
//                             ? "border-[#315fcf] bg-[#315fcf]/5 text-[#315fcf]"
//                             : "border-slate-200 bg-white text-[#0f1f45] hover:border-[#315fcf]/40"
//                         }`}
//                       >
//                         <Icon
//                           size={20}
//                           className={active ? "text-[#315fcf]" : "text-slate-500"}
//                         />

//                         <span className="text-sm font-semibold">
//                           {service.title}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Project Description */}
//               <div>
//                 <label className="text-sm font-semibold text-[#0f1f45]">
//                   Tell us about your project{" "}
//                   <span className="text-[#315fcf]">*</span>
//                 </label>

//                 <textarea
//                   rows={5}
//                   placeholder="Share a few details about your project, goals, key features or any specific requirements..."
//                   className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-[#0f1f45] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
//                 />
//               </div>

//               {/* Budget + Timeline */}
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label className="text-sm font-semibold text-[#0f1f45]">
//                     Budget Range
//                   </label>

//                   <select className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#64748b] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10">
//                     <option value="">Select budget range</option>
//                     <option>Under ₹50k</option>
//                     <option>₹50k – ₹1L</option>
//                     <option>₹1L – ₹3L</option>
//                     <option>₹3L+</option>
//                     <option>Not sure</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="text-sm font-semibold text-[#0f1f45]">
//                     Timeline
//                   </label>

//                   <select className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#64748b] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10">
//                     <option value="">Select timeline</option>
//                     <option>ASAP</option>
//                     <option>1–3 months</option>
//                     <option>3–6 months</option>
//                     <option>Flexible</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#315fcf] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#244aa8]"
//               >
//                 Send Enquiry
//                 <ArrowRight size={17} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ProjectForm;

import { useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  Code2,
  Globe,
  MessageCircle,
  ShoppingCart,
  Zap,
} from "lucide-react";

import Container from "../common/Container";

const services = [
  {
    id: "website",
    title: "Website",
    icon: Globe,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
  },
  {
    id: "web-application",
    title: "Web Application",
    icon: Code2,
  },
  {
    id: "custom-development",
    title: "Custom Development",
    icon: Code2,
  },
  {
    id: "not-sure",
    title: "Not sure yet",
    icon: MessageCircle,
  },
];

const initialFormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
  budget: "",
  timeline: "",
};

const ProjectForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleServiceSelect = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      projectType: serviceId,
    }));

    setErrors((prev) => ({
      ...prev,
      projectType: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us a little about your project.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/enquiries`,
        formData
      );

      setSuccess("Thanks! Your enquiry has been submitted successfully.");

      setFormData(initialFormData);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        {/* <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-[#f8fafc] lg:grid-cols-[0.8fr_1.2fr]"> */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-[#0f1f45] lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Content */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315fcf]">
                Get In Touch
              </span>

              <h2 className="mt-5 max-w-[420px] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Tell us about your project.
              </h2>

              <p className="mt-6 max-w-[440px] text-base leading-7 text-[#64748b]">
                Whether it's a new website, an e-commerce store, a custom web
                application or a specific feature, share your requirements and
                we'll help you find the right way forward.
              </p>
            </div>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
                  <Zap size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Quick response
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    We usually get back within 1–2 business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Direct communication
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    You'll connect directly with our team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#315fcf]/10 text-[#315fcf]">
                  <Globe size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Focused on your goals
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#64748b]">
                    We understand your business and suggest the right approach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-[#0f1f45]">
                    Your Name <span className="text-[#315fcf]">*</span>
                  </label>

                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm text-[#0f1f45] outline-none transition focus:ring-2 focus:ring-[#315fcf]/10 ${
                      errors.name
                        ? "border-red-300 focus:border-red-400"
                        : "border-slate-200 focus:border-[#315fcf]"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f1f45]">
                    Email Address <span className="text-[#315fcf]">*</span>
                  </label>

                  <input
                    name="email"
                    type="text"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm text-[#0f1f45] outline-none transition focus:ring-2 focus:ring-[#315fcf]/10 ${
                      errors.email
                        ? "border-red-300 focus:border-red-400"
                        : "border-slate-200 focus:border-[#315fcf]"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="text-sm font-semibold text-[#0f1f45]">
                  Company / Business
                </label>

                <input
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or business name (optional)"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0f1f45] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-semibold text-[#0f1f45]">
                  What do you need? <span className="text-[#315fcf]">*</span>
                </label>

                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const active = formData.projectType === service.id;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`flex min-h-[76px] items-center gap-3 rounded-xl border p-4 text-left transition ${
                          active
                            ? "border-[#315fcf] bg-[#315fcf]/5 text-[#315fcf]"
                            : "border-slate-200 bg-white text-[#0f1f45] hover:border-[#315fcf]/40"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={
                            active ? "text-[#315fcf]" : "text-slate-500"
                          }
                        />

                        <span className="text-sm font-semibold">
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                  {errors.projectType && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.projectType}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="text-sm font-semibold text-[#0f1f45]">
                  Tell us about your project{" "}
                  <span className="text-[#315fcf]">*</span>
                </label>

                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a few details about your project, goals, key features or any specific requirements..."
                  className={`mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm leading-6 text-[#0f1f45] outline-none transition focus:ring-2 focus:ring-[#315fcf]/10 ${
                    errors.message
                      ? "border-red-300 focus:border-red-400"
                      : "border-slate-200 focus:border-[#315fcf]"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Budget + Timeline */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-[#0f1f45]">
                    Budget Range
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#64748b] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
                  >
                    <option value="">Select budget range</option>
                    <option value="Below ₹10k">Below ₹10k</option>
                    <option value="₹10k – ₹25k">₹10k – ₹25k</option>
                    <option value="₹25k – ₹50k">₹25k – ₹50k</option>
                    <option value="₹50k – ₹1L">₹50k – ₹1L</option>
                    <option value="₹1L+">₹1L+</option>
                    <option value="Not decided">Not decided yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#0f1f45]">
                    Timeline
                  </label>

                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#64748b] outline-none transition focus:border-[#315fcf] focus:ring-2 focus:ring-[#315fcf]/10"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Success */}
              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {success}
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f1f45] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#244aa8] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Enquiry"}
                {!loading && <ArrowRight size={17} />}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectForm;
