import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertTriangle, Copy, Check, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
  onPlaceholderNotice?: (title: string, type: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onPlaceholderNotice }) => {
  const { contact } = portfolioData;
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState<{ [K in keyof FormValues]?: boolean }>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'endpoint_missing' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const validate = (currentValues: FormValues): FormErrors => {
    const newErrors: FormErrors = {};

    if (!currentValues.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (currentValues.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!currentValues.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(currentValues.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@company.com).';
    }

    if (!currentValues.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (currentValues.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    if (touched[name as keyof FormValues]) {
      setErrors(validate(nextValues));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Check if endpoint is configured
    if (!endpoint || endpoint.trim() === '') {
      setStatus('endpoint_missing');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim()
        })
      });

      if (response.ok) {
        setStatus('success');
        setValues({ name: '', email: '', message: '' });
        setTouched({});
      } else {
        const errorData = await response.json().catch(() => null);
        setStatus('error');
        setErrorMessage(
          errorData?.error || errorData?.message || 'Failed to dispatch message to the server. Please retry or contact directly via email.'
        );
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Network error communicating with the contact service. Please check your connection or send via direct email.'
      );
    }
  };

  const handleCopyMessage = () => {
    const formatted = `Sender: ${values.name} (${values.email})\nMessage:\n${values.message}`;
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoHref = `mailto:${contact.info.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${values.name || 'a visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Sohail,\n\n${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`
  )}`;

  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3b4a3d]/30" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Information & Direct Communications */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#39ff88] uppercase tracking-widest">
                {contact.eyebrow} // {contact.sectionNum}
              </span>
              <span className="w-8 h-px bg-[#3b4a3d]" aria-hidden="true" />
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#f5fff2] tracking-tight">
              {contact.title}
            </h2>
            <p className="font-['Inter'] text-base sm:text-lg text-[#bacbb9] mt-3 leading-relaxed">
              {contact.description}
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-3 pt-2">
            {/* Direct Email */}
            <a
              href={`mailto:${contact.info.email}`}
              className="flex items-center gap-4 p-3.5 rounded-xl bg-[#161b27]/90 border border-[#3b4a3d]/35 hover:border-[#39ff88]/50 hover:bg-[#1b1f2b] transition-all group shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 flex items-center justify-center text-[#39ff88] group-hover:bg-[#39ff88] group-hover:text-[#003918] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                  DIRECT EMAIL
                </div>
                <div className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#dee2f2] group-hover:text-[#39ff88] transition-colors">
                  {contact.info.email}
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-[#161b27]/90 border border-[#3b4a3d]/35 hover:border-[#7bd0ff]/50 hover:bg-[#1b1f2b] transition-all group shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 flex items-center justify-center text-[#7bd0ff] group-hover:bg-[#7bd0ff] group-hover:text-[#00354a] transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                  LINKEDIN DISPATCH
                </div>
                <div className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#dee2f2] group-hover:text-[#7bd0ff] transition-colors">
                  {contact.info.linkedinDisplay}
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={contact.info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-[#161b27]/90 border border-[#3b4a3d]/35 hover:border-[#39ff88]/50 hover:bg-[#1b1f2b] transition-all group shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#252a36] border border-[#3b4a3d]/50 flex items-center justify-center text-[#39ff88] group-hover:bg-[#39ff88] group-hover:text-[#003918] transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                  CODE REPOSITORY
                </div>
                <div className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#dee2f2] group-hover:text-[#39ff88] transition-colors">
                  {contact.info.githubDisplay}
                </div>
              </div>
            </a>

            {/* Deployment Region */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#161b27]/50 border border-[#3b4a3d]/25">
              <div className="w-10 h-10 rounded-lg bg-[#252a36] border border-[#3b4a3d]/40 flex items-center justify-center text-[#7bd0ff]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#849584] uppercase tracking-wider">
                  DEPLOYMENT REGION
                </div>
                <div className="font-['JetBrains_Mono'] text-xs sm:text-sm text-[#7bd0ff]">
                  {contact.info.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-[#161b27]/90 backdrop-blur-xl border border-[#3b4a3d]/40 rounded-xl p-6 sm:p-8 shadow-xl relative">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#3b4a3d]/30">
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] text-[#39ff88] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#39ff88] animate-pulse" />
              <span>{contact.formChannelHeader}</span>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#849584]">
              {contact.formPortIndicator}
            </span>
          </div>

          {/* SUCCESS BANNER */}
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-[#39ff88]/10 border border-[#39ff88]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#39ff88] font-['Space_Grotesk'] font-bold text-lg">
                <CheckCircle2 className="w-5 h-5" />
                <span>Message Transmitted Successfully</span>
              </div>
              <p className="font-['Inter'] text-sm text-[#dee2f2]">
                Thank you for reaching out! Your dispatch has been securely received. Sohail will respond to your inquiry shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs font-['JetBrains_Mono'] text-[#39ff88] hover:underline cursor-pointer"
              >
                &gt; Send another message
              </button>
            </div>
          )}

          {/* ENDPOINT MISSING NOTICE */}
          {status === 'endpoint_missing' && (
            <div className="mb-6 p-4 rounded-lg bg-[#e4c36e]/10 border border-[#e4c36e]/40 space-y-3">
              <div className="flex items-center gap-2 text-[#e4c36e] font-['Space_Grotesk'] font-bold text-base">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Service Endpoint Notice</span>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#bacbb9] leading-relaxed">
                The form backend is unconfigured because <code className="text-[#e4c36e] bg-[#0e131e] px-1 py-0.5 rounded font-['JetBrains_Mono']">VITE_CONTACT_FORM_ENDPOINT</code> is not set in the environment. Rather than pretending to send, you can dispatch directly:
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-xs font-semibold hover:bg-[#00e473] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#252a36] text-[#dee2f2] font-['JetBrains_Mono'] text-xs hover:bg-[#343946] border border-[#3b4a3d]/50 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#39ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Message Body'}</span>
                </button>
              </div>
            </div>
          )}

          {/* ERROR BANNER */}
          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-[#ffb4ab]/10 border border-[#ffb4ab]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#ffb4ab] font-['Space_Grotesk'] font-semibold text-base">
                <AlertTriangle className="w-5 h-5" />
                <span>Transmission Error</span>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#dee2f2]">
                {errorMessage}
              </p>
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-[#7bd0ff] hover:underline"
              >
                <span>Fallback: Send directly via email client</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-['JetBrains_Mono'] text-xs sm:text-sm text-[#dee2f2] mb-1.5"
              >
                Name <span className="text-[#39ff88]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Alex Morgan"
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full bg-[#0e131e] border rounded-lg px-4 py-2.5 text-[#dee2f2] placeholder:text-[#849584] font-['Inter'] text-sm transition-all focus:outline-none focus:ring-1 ${
                  touched.name && errors.name
                    ? 'border-[#ffb4ab] focus:border-[#ffb4ab] focus:ring-[#ffb4ab]'
                    : 'border-[#3b4a3d]/70 focus:border-[#39ff88] focus:ring-[#39ff88]'
                }`}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1 text-xs text-[#ffb4ab] font-['JetBrains_Mono']">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block font-['JetBrains_Mono'] text-xs sm:text-sm text-[#dee2f2] mb-1.5"
              >
                Email Address <span className="text-[#39ff88]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="alex@company.com"
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full bg-[#0e131e] border rounded-lg px-4 py-2.5 text-[#dee2f2] placeholder:text-[#849584] font-['Inter'] text-sm transition-all focus:outline-none focus:ring-1 ${
                  touched.email && errors.email
                    ? 'border-[#ffb4ab] focus:border-[#ffb4ab] focus:ring-[#ffb4ab]'
                    : 'border-[#3b4a3d]/70 focus:border-[#39ff88] focus:ring-[#39ff88]'
                }`}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1 text-xs text-[#ffb4ab] font-['JetBrains_Mono']">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-['JetBrains_Mono'] text-xs sm:text-sm text-[#dee2f2] mb-1.5"
              >
                Message <span className="text-[#39ff88]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hello Sohail, I'd like to discuss a security role / internship opportunity..."
                aria-invalid={touched.message && !!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full bg-[#0e131e] border rounded-lg px-4 py-2.5 text-[#dee2f2] placeholder:text-[#849584] font-['Inter'] text-sm transition-all resize-none focus:outline-none focus:ring-1 ${
                  touched.message && errors.message
                    ? 'border-[#ffb4ab] focus:border-[#ffb4ab] focus:ring-[#ffb4ab]'
                    : 'border-[#3b4a3d]/70 focus:border-[#39ff88] focus:ring-[#39ff88]'
                }`}
              />
              {touched.message && errors.message && (
                <p id="message-error" className="mt-1 text-xs text-[#ffb4ab] font-['JetBrains_Mono']">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#39ff88] text-[#003918] font-['JetBrains_Mono'] text-sm font-semibold shadow-[0_0_20px_rgba(57,255,136,0.25)] hover:shadow-[0_0_30px_rgba(57,255,136,0.4)] hover:bg-[#00e473] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Transmitting Telemetry...' : 'Send Message'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
