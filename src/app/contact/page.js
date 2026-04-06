"use client";

import { useState } from "react";
import SideHUD from "@/components/SideHUD";

const CONTACT_PORTALS = [
  {
    title: "GITHUB PORTAL",
    subtitle: "Explore the code repositories...",
    link: "https://github.com/AnkitBelvanshi",
    linkText: "github.com/AnkitBelvanshi",
    icon: "code",
    bgClass: "bg-primary-container",
    borderClass: "border-on-primary-fixed-variant",
    textClass: "text-white",
    subtitleClass: "text-on-primary-container",
  },
  {
    title: "LINKEDIN NETWORK",
    subtitle: "Connect for professional opportunities...",
    link: "https://linkedin.com/in/ankit-belvanshi",
    linkText: "linkedin.com/in/ankit-belvanshi",
    icon: "share",
    bgClass: "bg-tertiary-container",
    borderClass: "border-on-tertiary-fixed-variant",
    textClass: "text-white",
    subtitleClass: "text-on-tertiary-container",
  },
  {
    title: "EMAIL DISPATCH",
    subtitle: "Send a direct transmission...",
    link: "mailto:workxankit@gmail.com",
    linkText: "workxankit@gmail.com",
    icon: "mail",
    bgClass: "bg-secondary-container",
    borderClass: "border-on-secondary-fixed-variant",
    textClass: "text-on-secondary-container",
    subtitleClass: "text-on-secondary-container",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xpwzpqnp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <SideHUD />

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4 md:px-6">
        <section className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="bg-surface p-6 md:p-10 border-b-8 border-r-8 border-stone-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <header className="mb-12">
              <h1 className="font-headline text-5xl font-black text-on-surface mb-2 tracking-tight">
                MISSION DISPATCH CENTER
              </h1>
              <p className="font-body text-lg text-on-surface-variant">
                Ready to embark on a new quest? Send a message through the portal.
              </p>
            </header>

            {/* Contact Portals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {CONTACT_PORTALS.map((portal) => (
                <a
                  key={portal.title}
                  href={portal.link}
                  target={portal.link.startsWith("mailto") ? undefined : "_blank"}
                  rel={portal.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={`${portal.bgClass} p-6 border-b-4 border-r-4 ${portal.borderClass} group hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-100 block`}
                >
                  <div className="w-12 h-12 bg-white/20 mb-4 flex items-center justify-center">
                    <span className={`material-symbols-outlined ${portal.textClass} text-3xl`}>
                      {portal.icon}
                    </span>
                  </div>
                  <h3 className={`font-headline font-bold ${portal.textClass} mb-1`}>
                    {portal.title}
                  </h3>
                  <p className={`text-xs ${portal.subtitleClass} mb-4 font-medium`}>
                    {portal.subtitle}
                  </p>
                  <span className={`text-xs font-bold ${portal.textClass} underline`}>
                    {portal.linkText}
                  </span>
                </a>
              ))}
            </div>

            {/* Mission Form */}
            <div className="bg-surface-container-low p-8 border-t-4 border-l-4 border-stone-300">
              <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">add_task</span>
                SUBMIT NEW QUEST REQUEST
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 bg-primary-container text-on-primary-container p-4 font-headline font-bold uppercase text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  QUEST DISPATCHED SUCCESSFULLY! Expect a response within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 bg-error-container text-on-error-container p-4 font-headline font-bold uppercase text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    error
                  </span>
                  DISPATCH FAILED. Try using the Email portal directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Quest Giver Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-surface-dim border-t-4 border-l-4 border-stone-400 p-4 focus:outline-none focus:border-primary transition-colors font-body"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Transmission Channel
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-surface-dim border-t-4 border-l-4 border-stone-400 p-4 focus:outline-none focus:border-primary transition-colors font-body"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Quest Description
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-surface-dim border-t-4 border-l-4 border-stone-400 p-4 focus:outline-none focus:border-primary transition-colors font-body"
                    placeholder="Describe the mission objectives..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="w-full md:w-auto bg-primary text-white px-10 py-5 font-headline font-black text-lg uppercase border-b-8 border-r-8 border-on-primary-fixed-variant hover:translate-y-1 hover:translate-x-1 hover:border-b-4 hover:border-r-4 active:translate-y-2 active:translate-x-2 active:border-0 transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === "sending" ? "DISPATCHING..." : "DISPATCH QUEST"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
