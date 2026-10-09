'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    category: 'Water Treatment Plant',
    waterSource: 'Borewell / Well',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Water Purifier',
    'Water Treatment Plant',
    'RO Water Treatment Plant',
    'Other / Water Testing',
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your contact mobile number.';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid phone number (8–15 digits).';
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your water issues or equipment needs.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Direct WhatsApp enquiry trigger with full user data
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open WhatsApp prefilled with user details
      const waUrl = buildGeneralWhatsAppUrl(`Form Enquiry: ${formData.category}`, {
        name: formData.fullName,
        category: formData.category,
        source: formData.waterSource,
        message: `${formData.message} (Mobile: ${formData.mobileNumber}${formData.email ? `, Email: ${formData.email}` : ''})`,
      });

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-brand-navy">Thank You for Reaching Out!</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Your enquiry details have been prepared. A WhatsApp chat with Gravity Water Treatment has been opened so our technical team can assist you immediately.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  mobileNumber: '',
                  email: '',
                  category: 'Water Treatment Plant',
                  waterSource: 'Borewell / Well',
                  message: '',
                });
              }}
              className="text-sm font-semibold text-brand-blue hover:underline"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <h3 className="text-xl font-bold text-brand-navy">Send an Enquiry</h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill in your details below. For instant assistance, this will open directly in WhatsApp.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Mobile & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="e.g. 9562584025"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                  errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-rose-500 mt-1 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-rose-500 mt-1 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Product Category & Water Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Product Category <span className="text-rose-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="waterSource" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Source Water Type
              </label>
              <select
                id="waterSource"
                name="waterSource"
                value={formData.waterSource}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
              >
                <option value="Borewell Water">Borewell Water</option>
                <option value="Open Well Water">Open Well Water</option>
                <option value="Municipal / Corporation">Municipal Supply</option>
                <option value="River / Lake Water">Surface / River Water</option>
                <option value="Not Sure">Not Sure / Needs Testing</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Requirement / Issue Description <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your water issue (e.g. yellow mud stains on tiles, hard water scaling, drinking water purifier requirement, water cooler capacity needed)..."
              disabled={isSubmitting}
              className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all resize-y ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
              }`}
            />
            {errors.message && (
              <p className="text-xs text-rose-500 mt-1 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:bg-emerald-400 transition-colors shadow-md hover:shadow-lg group focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <WhatsAppIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>Submit &amp; Chat on WhatsApp</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Instant response from Gravity Water Treatment engineering team in Vadakkencherry.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
