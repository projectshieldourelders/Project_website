"use client";

import { useState } from "react";
import { assetPath } from "@/utils/assets";

const guides = [
  {
    title: "A caller wants money or a private code",
    file: "/guides/suspicious-call-checklist.pdf",
    filename: "Suspicious Call Checklist",
    detail: "End the call first. This sheet helps you verify the organization without relying on anything the caller told you.",
  },
  {
    title: "A text or email includes a link",
    file: "/guides/suspicious-message-checklist.pdf",
    filename: "Suspicious Message Checklist",
    detail: "Review the sender, the web address, and the request before replying, downloading a file, or opening a QR code.",
  },
  {
    title: "Money or personal information was already sent",
    file: "/guides/after-a-scam-recovery-guide.pdf",
    filename: "After a Scam: What to Do Next",
    detail: "A calm order for contacting a bank, changing exposed passwords, saving evidence, and reporting what happened.",
  },
  {
    title: "I want a plan before anything happens",
    file: "/guides/trusted-contact-plan.pdf",
    filename: "My Trusted-Contact Plan",
    detail: "Write down two reliable contacts, official account numbers, and a family phrase while there is no pressure.",
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
          <span>Shield Our Elders</span>
          <strong>{guides[active].filename}</strong>
          <i /><i /><i /><i />
        </div>
        <p>{guides[active].detail}</p>
        <a href={assetPath(guides[active].file)} download>Download the one-page PDF</a>
      </div>
    </div>
  );
}
