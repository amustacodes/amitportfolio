"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, GraduationCap, CheckCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Full name is required.";
    
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!message.trim() || message.length < 15) {
      newErrors.message = "Message must be at least 15 characters.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    // Simulate server side submission API response
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      
      // Reset inputs
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");

      setTimeout(() => {
        setSentSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactInfos = [
    {
      icon: <Mail className="text-neon-cyan" size={18} />,
      label: "Email Address",
      val: "amit.neupane@example.com",
      href: "mailto:amit.neupane@example.com"
    },
    {
      icon: <Phone className="text-neon-purple" size={18} />,
      label: "Phone Number",
      val: "+977-9800000000",
      href: "tel:+9779800000000"
    },
    {
      icon: <MapPin className="text-neon-pink" size={18} />,
      label: "Location Base",
      val: "Kathmandu, Nepal",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <GraduationCap size={18} />,
      href: "https://scholar.google.com",
      label: "Scholar"
    },
    {
      icon: (
        <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "https://twitter.com",
      label: "Twitter"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#030014]/50 overflow-hidden">
      {/* Background neon orb glows */}
      <div className="absolute top-[30%] left-[-15%] w-[550px] h-[550px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-neon-pink/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="font-display font-black text-3xl md:text-5xl uppercase tracking-wider text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Touch</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple mt-3 mx-auto rounded-full" />
          <p className="text-slate-400 font-sans font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            Have a project, research proposal, or mentoring inquiry? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact cards and Map mockup */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfos.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl glassmorphism hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/15 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[10px] tracking-widest text-slate-400 uppercase">
                      {info.label}
                    </h4>
                    <p className="font-sans font-light text-sm text-slate-200 mt-0.5 group-hover:text-white transition-colors">
                      {info.val}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Channels Card */}
            <motion.div
              className="p-6 rounded-2xl glassmorphism border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-display font-semibold text-[10px] tracking-widest text-slate-400 uppercase mb-4 text-center">
                Digital Footprints
              </h4>
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glassmorphism-light hover:bg-gradient-to-tr hover:from-neon-cyan hover:to-neon-purple text-slate-400 hover:text-white border border-white/5 hover:border-white/10 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer relative group"
                    aria-label={s.label}
                  >
                    {s.icon}
                    {/* Tooltip */}
                    <span className="absolute bottom-[-32px] scale-0 group-hover:scale-100 transition-all font-display text-[9px] bg-dark-bg border border-white/10 px-2 py-0.5 rounded text-white tracking-widest uppercase">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Vector Map Mockup representing Kathmandu, Nepal */}
            <motion.div
              className="flex-1 min-h-[220px] rounded-2xl glassmorphism border border-white/5 relative overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Pulsing Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              {/* Graphic Vector Representation */}
              <svg className="w-[85%] h-[85%] opacity-30 text-slate-700" viewBox="0 0 100 100" fill="none">
                <path d="M10,40 Q30,20 50,40 T90,40 M20,60 Q40,40 60,60 T100,60 M5,25 L95,75 M5,75 L95,25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>

              {/* Glowing Kathmandu Location pin marker */}
              <div className="absolute flex flex-col items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-neon-cyan flex items-center justify-center relative">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="absolute inset-0 w-full h-full rounded-full bg-neon-cyan animate-ping opacity-60" />
                </div>
                <span className="font-display font-black text-[9px] uppercase tracking-widest text-white bg-dark-bg/90 border border-white/10 px-2 py-0.5 rounded-md mt-2 shadow-[0_0_10px_#00f5d4]">
                  Kathmandu
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              className="p-8 md:p-10 rounded-3xl glassmorphism border border-white/10 relative h-full flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {sentSuccess ? (
                  <motion.div
                    key="sent-success"
                    className="py-20 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle size={56} className="text-neon-cyan mb-6 animate-bounce" />
                    <h3 className="font-display font-extrabold text-lg text-white mb-2 uppercase tracking-wider">
                      Transmission Dispatched
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-sm">
                      Your message was successfully routed to Amit&apos;s inbox. He will reply shortly at your provided address.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-display uppercase tracking-widest text-slate-400 mb-2 font-semibold">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-slate-200 text-sm focus:outline-none focus:bg-white/10 transition-all ${
                            errors.name ? "border-neon-pink/50 focus:border-neon-pink" : "border-white/5 focus:border-neon-cyan/50"
                          }`}
                          placeholder="Dr. John Doe"
                        />
                        {errors.name && <p className="text-[10px] text-neon-pink mt-1 font-light">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-display uppercase tracking-widest text-slate-400 mb-2 font-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-slate-200 text-sm focus:outline-none focus:bg-white/10 transition-all ${
                            errors.email ? "border-neon-pink/50 focus:border-neon-pink" : "border-white/5 focus:border-neon-cyan/50"
                          }`}
                          placeholder="johndoe@institution.edu"
                        />
                        {errors.email && <p className="text-[10px] text-neon-pink mt-1 font-light">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone (Optional) */}
                      <div>
                        <label className="block text-[10px] font-display uppercase tracking-widest text-slate-400 mb-2 font-semibold">
                          Phone Number <span className="text-[9px] text-slate-600 font-light">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/5 text-slate-200 text-sm focus:outline-none focus:bg-white/10 focus:border-neon-cyan/50 transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-[10px] font-display uppercase tracking-widest text-slate-400 mb-2 font-semibold">
                          Subject Line
                        </label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-slate-200 text-sm focus:outline-none focus:bg-white/10 transition-all ${
                            errors.subject ? "border-neon-pink/50 focus:border-neon-pink" : "border-white/5 focus:border-neon-cyan/50"
                          }`}
                          placeholder="e.g. Research Collaboration"
                        />
                        {errors.subject && <p className="text-[10px] text-neon-pink mt-1 font-light">{errors.subject}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-display uppercase tracking-widest text-slate-400 mb-2 font-semibold">
                        Message Body
                      </label>
                      <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-slate-200 text-sm focus:outline-none focus:bg-white/10 transition-all resize-none ${
                          errors.message ? "border-neon-pink/50 focus:border-neon-pink" : "border-white/5 focus:border-neon-cyan/50"
                        }`}
                        placeholder="Detail your request, dataset parameters, or coordinates here..."
                      />
                      {errors.message && <p className="text-[10px] text-neon-pink mt-1 font-light">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-xl font-display text-xs uppercase font-bold tracking-widest text-dark-bg bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple hover:bg-gradient-to-l transition-all shadow-[0_0_20px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(157,78,221,0.55)] cursor-pointer active:scale-98 flex items-center justify-center gap-2 text-dark-bg disabled:opacity-50"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                          Encrypting & Sending...
                        </>
                      ) : (
                        <>
                          <Send size={12} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
