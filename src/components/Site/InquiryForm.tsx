"use client";

import { FormEvent, useState } from "react";

const InquiryForm = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const organization = String(data.get("organization") || "Organization");
    const subject = encodeURIComponent(`Partnership inquiry - ${organization}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organization: ${organization}`,
      `Organization type: ${data.get("organizationType")}`,
      `How I would like to work with Shield Our Elders: ${data.get("partnershipType")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n"));

    setFormStatus("We opened a draft in your email app. Review it, then press Send.");
    window.location.href = `mailto:projectshieldourelders@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-[#111815]" aria-label="Partnership inquiry">
      <div className="grid gap-x-8 sm:grid-cols-2">
        <label className="form-field"><span>Your name</span><input name="name" type="text" autoComplete="name" required /></label>
        <label className="form-field"><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="form-field"><span>Organization</span><input name="organization" type="text" autoComplete="organization" required /></label>
        <label className="form-field">
          <span>Organization type</span>
          <select name="organizationType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Senior living community</option>
            <option>Bank or credit union</option>
            <option>Healthcare or caregiving organization</option>
            <option>Library or community group</option>
            <option>Public agency</option>
            <option>Faith-based organization</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>How would you like to work with us?</span>
        <select name="partnershipType" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option>Host a workshop</option>
          <option>Share educational materials</option>
          <option>Discuss a partnership</option>
          <option>Support workshop materials</option>
          <option>Invite us to an event</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="form-field"><span>Anything else we should know?</span><textarea name="message" rows={5} placeholder="Group size, topics, preferred dates, accessibility needs, or questions (optional)" /></label>
      <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="min-h-14 rounded-full bg-[#111815] px-8 text-base font-bold text-white transition hover:bg-[#176d5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111815]">
          Prepare email
        </button>
        <p aria-live="polite" className="max-w-sm text-sm leading-6 text-[#5f6862]">
          {formStatus || "This form opens your email application. Information entered here is not stored by the website."}
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;
