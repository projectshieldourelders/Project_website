"use client";

import { useState } from "react";
import Link from "next/link";

const paths = [
  {
    tab: "Host a workshop",
    title: "Invite us to speak with your community.",
    body: "Our workshops typically last 45–60 minutes and include real scam examples, discussion, and printed take-home materials. Before the session, we ask what types of scams your group has been seeing so the examples are relevant.",
    result: "A practical session shaped around your group",
  },
  {
    tab: "Share resources",
    title: "Put printable information where people can find it.",
    body: "Organizations are welcome to share our printable scam-prevention guides. They are designed to be easy to print and keep at home, near a phone, or at a front desk.",
    result: "Free guides for the people you serve",
  },
  {
    tab: "Make an introduction",
    title: "Connect us with another local organization.",
    body: "An introduction to a senior community, library, caregiver group, neighborhood organization, or other group can help. You do not need to organize the session yourself.",
    result: "A direct conversation with a trusted community contact",
  },
  {
    tab: "Support materials",
    title: "Help cover practical workshop materials.",
    body: "Donations and sponsorships can help pay for large-print guides, trusted-contact cards, practice sheets, printing, and presentation materials.",
    result: "Take-home information that remains useful after the session",
  },
];

export default function PartnerPath() {
  const [active, setActive] = useState(0);
  const path = paths[active];

  return (
    <div className="partner-path">
      <div className="partner-path__tabs" role="tablist" aria-label="Ways to work with Shield Our Elders">
        {paths.map((item, index) => (
          <button key={item.tab} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{item.tab}</button>
        ))}
      </div>
      <div className="partner-path__route" key={path.tab} role="tabpanel">
        <div><h3>{path.title}</h3><p>{path.body}</p></div>
        <i aria-hidden="true"><span /></i>
        <div><strong>{path.result}</strong><Link href="/contact">Contact Shield Our Elders</Link></div>
      </div>
    </div>
  );
}
