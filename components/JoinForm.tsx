"use client";

import { useState } from "react";

export default function JoinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Join the Club");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nPlease add me to the Pop Up Jazz Club mailing list.`,
    );
    window.location.href = `mailto:hello@popupjazzclub.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-sm border border-border bg-surface-elevated p-8 sm:p-10"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-widest text-gold"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-cream placeholder:text-cream-muted/50 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-gold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-cream placeholder:text-cream-muted/50 focus:border-gold focus:outline-none"
        />
      </div>
      <p className="text-xs leading-relaxed text-cream-muted">
        By joining, you agree to receive occasional emails about Pop Up Jazz
        Club events. Unsubscribe anytime.
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-sm border border-gold-dark/30 bg-gold px-7 py-3.5 text-sm font-medium tracking-wide uppercase text-background transition-all duration-300 hover:bg-gold-light sm:w-auto"
      >
        Join the Club
      </button>
    </form>
  );
}
