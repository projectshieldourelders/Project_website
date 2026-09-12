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
      `Work email: ${data.get("email")}`,
      `Organization: ${organization}`,
      `Organization type: ${data.get("organizationType")}`,
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
        <label className="form-field"><span>Work email</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="form-field"><span>Organization</span><input name="organization" type="text" autoComplete="organization" required /></label>
        <label className="form-field">
          <span>Organization type</span>
          <select name="organizationType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Senior living</option>
            <option>Bank or credit union</option>
            <option>Healthcare or caregiving</option>
            <option>Library or community group</option>
            <option>Public agency</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="form-field"><span>How would you like to work together?</span><textarea name="message" rows={5} required /></label>
      <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="min-h-14 rounded-full bg-[#111815] px-8 text-base font-bold text-white transition hover:bg-[#176d5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111815]">
          Prepare email
        </button>
        <p aria-live="polite" className="max-w-sm text-sm leading-6 text-[#5f6862]">
          {formStatus || "This opens your email app. The website does not store the form contents."}
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;
