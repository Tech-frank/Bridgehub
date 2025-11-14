import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, Mail, Phone, MapPin, User, FileText, Clock } from "lucide-react";

// Email function shell - will connect to Node.js backend
// const sendEmailNotification = async (formData) => {
//   // TODO: Connect to Node.js backend endpoint
//   // POST to /api/send-email or similar
//   try {
//     const response = await fetch('/api/submit-request', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });
//     return response.ok;
//   } catch (error) {
//     console.error('Email sending failed:', error);
//     return false;
//   }
// };

export default function RequestSupportForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    applicantName: "",
    participantName: "",
    email: "",
    phone: "",
    serviceCategory: "",
    serviceDescription: "",
    location: "",
    urgency: "medium",
    preferredContact: "email",
    consent: false,
  });

  const serviceCategories = [
    "General Disability Support",
    "Personal Care",
    "Transportation Assistance",
    "Therapy Services",
    "Home Support",
    "Accommodation Support",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.applicantName || !formData.email || !formData.phone || 
        !formData.serviceCategory || !formData.serviceDescription || 
        !formData.location || !formData.consent) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Send email notification (shell function)
    // await sendEmailNotification(formData);
    
    // Show success message
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fadeIn = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#3BB273] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#215C8E] rounded-full blur-3xl"></div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BB273] to-[#215C8E] rounded-full mb-6"
          >
            <Heart className="w-10 h-10 text-white" fill="currentColor" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-light text-[#215C8E] mb-4"
          >
            You Are Not Alone
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[#4A4A4A] leading-relaxed mb-6"
          >
            Thank you for reaching out. Your request has been received, and we want you to know that we're here for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#F9FAFB] rounded-2xl p-6 mb-8 text-left"
          >
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#3BB273] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#215C8E] mb-1">We'll Contact You Within 24 Hours</h3>
                <p className="text-sm text-[#4A4A4A]">Our team will review your request and reach out to you soon.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-6 h-6 text-[#FFB84C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#215C8E] mb-1">You Can Reach Us Anytime</h3>
                <p className="text-sm text-[#4A4A4A]">Call us at (123) 456-7890 or email support@bridgehub.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-[#E75C5C] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#215C8E] mb-1">We Care About You</h3>
                <p className="text-sm text-[#4A4A4A]">Your wellbeing matters to us. We're committed to supporting you every step of the way.</p>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => window.location.href = '/'}
            className="bg-[#215C8E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a4a6e] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Return to Home
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB] py-20 px-6 relative overflow-hidden">
      {/* Background comfort image placeholder */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#215C8E]/20 to-[#3BB273]/20"></div>
      </div>

      {/* Floating soft shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#3BB273] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#215C8E] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-light text-[#215C8E] mb-4">
            Request Support
          </h1>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            We're here to help. Fill out this form, and our caring team will reach out to you within 24 hours.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  step >= i
                    ? "bg-[#215C8E] text-white shadow-lg"
                    : "bg-white text-[#4A4A4A] border-2 border-gray-200"
                }`}
              >
                {step > i ? <Check className="w-6 h-6" /> : i}
              </div>
              {i < 3 && (
                <div
                  className={`w-16 h-1 mx-2 rounded transition-all duration-300 ${
                    step > i ? "bg-[#215C8E]" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-[#215C8E] mb-6 flex items-center gap-3">
                    <User className="w-7 h-7" />
                    Personal Information
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="applicantName"
                      value={formData.applicantName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Participant Name (if different)
                    </label>
                    <input
                      type="text"
                      name="participantName"
                      value={formData.participantName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300"
                      placeholder="If you're requesting for someone else"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Service Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-[#215C8E] mb-6 flex items-center gap-3">
                    <FileText className="w-7 h-7" />
                    Service Details
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Service Category Required *
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {serviceCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Service Description / Needs Summary *
                    </label>
                    <textarea
                      name="serviceDescription"
                      value={formData.serviceDescription}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300 resize-none"
                      placeholder="Please describe the support you need..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location / Address *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 outline-none transition-all duration-300"
                      placeholder="Your location or service address"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences & Consent */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-[#215C8E] mb-6 flex items-center gap-3">
                    <Clock className="w-7 h-7" />
                    Preferences & Consent
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Level of Urgency *
                    </label>
                    <div className="flex gap-4">
                      {["low", "medium", "high"].map((level) => (
                        <label
                          key={level}
                          className={`flex-1 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center font-medium ${
                            formData.urgency === level
                              ? "border-[#215C8E] bg-[#215C8E] text-white"
                              : "border-gray-200 hover:border-[#215C8E] text-[#4A4A4A]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={level}
                            checked={formData.urgency === level}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: "email", label: "Email", icon: Mail },
                        { value: "phone", label: "Phone", icon: Phone },
                      ].map(({ value, label, icon: Icon }) => (
                        <label
                          key={value}
                          className={`flex-1 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 font-medium ${
                            formData.preferredContact === value
                              ? "border-[#3BB273] bg-[#3BB273] text-white"
                              : "border-gray-200 hover:border-[#3BB273] text-[#4A4A4A]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={value}
                            checked={formData.preferredContact === value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <Icon className="w-5 h-5" />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#F9FAFB] rounded-2xl p-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#215C8E] focus:ring-4 focus:ring-[#215C8E]/10 cursor-pointer"
                      />
                      <span className="text-sm text-[#4A4A4A] leading-relaxed">
                        I consent to Bridgehub collecting and processing my information in accordance with the Privacy Policy. I understand my data will be handled securely and used only for providing support services.
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 gap-4">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="px-6 py-3 rounded-full border-2 border-[#215C8E] text-[#215C8E] font-medium hover:bg-[#215C8E] hover:text-white transition-all duration-300"
                >
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button
                  onClick={nextStep}
                  className="ml-auto px-8 py-3 rounded-full bg-[#215C8E] text-white font-medium hover:bg-[#1a4a6e] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="ml-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#3BB273] to-[#215C8E] text-white font-medium hover:shadow-2xl transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  Submit Request
                  <Heart className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Reassurance Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-[#4A4A4A] flex items-center justify-center gap-2"
        >
          <Heart className="w-5 h-5 text-[#E75C5C]" />
          Your privacy and dignity are important to us. All information is kept confidential.
        </motion.p>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}