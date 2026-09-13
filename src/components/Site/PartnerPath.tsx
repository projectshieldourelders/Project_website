"use client";

import { useState } from "react";
import Link from "next/link";

const paths = [
  {
    tab: "Host a session",
    title: "You provide the room. We bring the lesson.",
    body: "Choose a date, invite the people you serve, and tell us which scam questions have been coming up. A screen is helpful, but it is not required.",
    result: "A 45–60 minute workshop with printed take-home material",
  },
  {
    tab: "Fund materials",
    title: "Put a useful guide in someone’s hands.",
    body: "Local support pays for large-print checklists, trusted-contact cards, and practice examples that participants can keep after the session.",
    result: "Materials that remain available after the workshop ends",
  },
  {
    tab: "Make an introduction",
    title: "Help us reach a group that already trusts you.",
    body: "Introduce us to a senior community, library, caregiver network, faith group, bank, or another organization serving older adults.",
    result: "A direct conversation with the right community contact",
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
        <div><span>Your part</span><h3>{path.title}</h3><p>{path.body}</p></div>
        <i aria-hidden="true"><span /></i>
        <div><span>What it makes possible</span><strong>{path.result}</strong><Link href="/contact">Contact our team</Link></div>
      </div>
    </div>
  );
}
