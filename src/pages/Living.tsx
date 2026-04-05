import React from 'react';
import { Key } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Living() {
  const startHereSteps = [
    "Read the Rent Control Act (RA 9653).",
    "Calculate your monthly rent budget.",
    "Prepare a 1-month advance, 2-month deposit.",
    "Check for signal strength in the building."
  ];

  const topics: TopicSection[] = [
    {
      id: "renting",
      title: "Renting & Tenant Rights",
      summary: "Your rights and responsibilities as a tenant.",
      explanation: "The Rent Control Act protects tenants from unfair evictions.",
      whatToDo: [
        "Read the Rent Control Act (RA 9653).",
        "Calculate your monthly rent budget.",
        "Prepare a 1-month advance, 2-month deposit.",
        "Check for signal strength in the building."
      ],
      systemRule: "Know your rights as a tenant.",
      whyThisMatters: "Unfair evictions can be a major financial burden.",
      requirements: ["Lease Contract", "Advance & Deposit", "Valid ID"],
      proTip: "Take photos and videos before you move in.",
      doThisToday: "Read the Rent Control Act online."
    },
    {
      id: "utilities",
      title: "Utilities Setup",
      summary: "Setting up your internet and electricity.",
      explanation: "Meralco and internet providers require proof of occupancy.",
      whatToDo: [
        "Apply for Meralco with a valid ID.",
        "Check for signal strength in the building.",
        "Compare internet provider plans and terms.",
        "Transfer or apply for utilities under your name."
      ],
      systemRule: "Utilities are essential for independence.",
      whyThisMatters: "Unreliable utilities can be a major inconvenience.",
      requirements: ["Lease Contract", "Valid ID", "Proof of Occupancy"],
      proTip: "Check for building-specific internet restrictions.",
      doThisToday: "Compare internet provider plans in your area."
    },
    {
      id: "legal",
      title: "Legal Documents: SPA",
      summary: "Authorizing someone to act on your behalf.",
      explanation: "An SPA is a legal document for specific transactions.",
      whatToDo: [
        "Identify the person you want to authorize.",
        "Specify the transactions they can perform.",
        "Notarize the SPA with a lawyer.",
        "Keep the original copy in a safe place."
      ],
      systemRule: "An SPA is a powerful legal tool.",
      whyThisMatters: "It allows someone to act on your behalf if you're busy.",
      requirements: ["Notarized SPA", "Valid ID", "Authorized Person"],
      proTip: "Specify the duration of the SPA's validity.",
      doThisToday: "Identify someone you can trust for an SPA."
    }
  ];

  return (
    <ModuleTemplate
      title="Living"
      description="Moving out is exciting, but it comes with responsibilities."
      icon={Key}
      startHereSteps={startHereSteps}
      topics={topics}
      nextModule={{ title: "Growth", path: "/growth" }}
    />
  );
}
