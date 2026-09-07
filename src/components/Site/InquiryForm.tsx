"use client";

import { FormEvent, useState } from "react";

const InquiryForm = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const organization = String(data.get("organization") || "Organization");
    const subject = encodeURIComponent(`Partnership inquiry - ${organization}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Work email: ${data.get("email")}`,
        `Organization: ${organization}`,
        `Organization type: ${data.get("organizationType")}`,
        "",
        String(data.get("message") || ""),
      ].join("\n"),
    );

    setFormStatus(
      "We opened a draft in your email app. Review it, then press Send.",
    );
    window.location.href = `mailto:projectshieldourelders@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm bg-white p-6 shadow-[0_18px_45px_rgba(24,59,54,0.10)] sm:p-9"
      aria-label="Partnership inquiry"
    >
      <div className="flex flex-col gap-x-8 sm:flex-row sm:flex-wrap sm:[&>*]:w-[calc(50%-1rem)]">
        <label className="form-field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-field">
          <span>Organization</span>
          <input
            name="organization"
            type="text"
            autoComplete="organization"
            required
          />
        </label>
        <label className="form-field">
          <span>Organization type</span>
          <select name="organizationType" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option>Senior living</option>
            <option>Bank or credit union</option>
            <option>Healthcare or caregiving</option>
            <option>Library or community group</option>
            <option>Public agency</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>How would you like to work together?</span>
        <textarea name="message" rows={5} required />
      </label>
      <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="doodle-button min-h-14 bg-[#2f756b] px-8 text-base font-extrabold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183b36]"
        >
          Open email draft
        </button>
        <p
          aria-live="polite"
          className="max-w-sm text-sm leading-6 text-[#526661]"
        >
          {formStatus ||
            "Nothing is stored here. Pressing the button opens a draft in your email app."}
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;
