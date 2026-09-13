"use client";

import { useState } from "react";
import { assetPath } from "@/utils/assets";

const guides = [
  {
    title: "Suspicious phone call",
    file: "/guides/suspicious-call-checklist.pdf",
    filename: "Suspicious Call Checklist",
    detail: "Use this checklist if a caller is asking for money, account information, a password, or a verification code.",
  },
  {
    title: "Suspicious text or email",
    file: "/guides/suspicious-message-checklist.pdf",
    filename: "Suspicious Message Checklist",
    detail: "Use this guide before clicking a link, opening an attachment, or replying to an unexpected message.",
  },
  {
    title: "Money or personal information already sent",
    file: "/guides/after-a-scam-recovery-guide.pdf",
    filename: "After a Scam: What to Do Next",
    detail: "Use this guide for the first steps to take after responding to a possible scam.",
  },
  {
    title: "Make a plan ahead of time",
    file: "/guides/trusted-contact-plan.pdf",
    filename: "My Trusted-Contact Plan",
    detail: "Write down trusted contacts and important phone numbers before you need them.",
  },
];

export default function ResourceLibrary() {
  const [active, setActive] = useState(0);

  return (
    <div className="resource-desk">
      <div className="resource-desk__questions">
        {guides.map((guide, index) => (
          <button key={guide.file} type="button" aria-expanded={active === index} onClick={() => setActive(index)}>
            <span>{guide.title}</span>
            <i aria-hidden="true">{active === index ? "−" : "+"}</i>
          </button>
        ))}
      </div>

      <div className="resource-desk__preview" key={guides[active].file}>
        <div className="resource-desk__paper" aria-hidden="true">
          <strong>{guides[active].filename}</strong>
          <i /><i /><i /><i />
        </div>
        <p>{guides[active].detail}</p>
        <a href={assetPath(guides[active].file)} download>Download {guides[active].filename}</a>
      </div>
    </div>
  );
}
