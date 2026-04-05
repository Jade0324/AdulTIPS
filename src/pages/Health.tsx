import React from 'react';
import { HeartPulse } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Health() {
  const startHereSteps = [
    "Check your PhilHealth membership.",
    "Verify your employer's HMO benefits.",
    "Understand the order of hospital billing.",
    "Compare Term vs VUL insurance."
  ];

  const topics: TopicSection[] = [
    {
      id: "philhealth",
      title: "PhilHealth & HMO",
      summary: "Your primary health coverage layers.",
      explanation: "PhilHealth is government-mandated, while HMO is private insurance.",
      whatToDo: [
        "Ensure your PhilHealth is updated.",
        "Check your HMO's Maximum Benefit Limit.",
        "Understand the hospital billing order.",
        "Ask for PhilHealth share deduction."
      ],
      systemRule: "Layer your health protection.",
      whyThisMatters: "One major illness can wipe out your savings.",
      requirements: ["PhilHealth ID", "HMO Card", "Valid ID"],
      proTip: "HMOs usually cover common illnesses only.",
      doThisToday: "Check your PhilHealth contribution status."
    },
    {
      id: "insurance",
      title: "Insurance Types",
      summary: "Choosing the right protection for you.",
      explanation: "Term is pure protection, while VUL includes an investment.",
      whatToDo: [
        "Compare Term vs VUL vs Traditional.",
        "Assess your financial goals and budget.",
        "Consult with a licensed financial advisor.",
        "Read the policy fine print carefully."
      ],
      systemRule: "Insurance is not an investment.",
      whyThisMatters: "High fees in VUL can eat into your returns.",
      requirements: ["Policy Review", "Financial Assessment", "Budget"],
      proTip: "Term insurance is the cheapest option for pure protection.",
      doThisToday: "Compare Term and VUL insurance quotes."
    },
    {
      id: "coverage",
      title: "Critical Illness",
      summary: "Protection for major health events.",
      explanation: "Critical Illness coverage provides a lump sum for major illnesses.",
      whatToDo: [
        "Check the list of covered illnesses.",
        "Choose a policy with a high benefit limit.",
        "Verify the guaranteed renewability.",
        "Ensure the hospital income benefit."
      ],
      systemRule: "Protect your income from illness.",
      whyThisMatters: "Major illnesses require significant financial resources.",
      requirements: ["Policy Review", "Health Assessment", "Budget"],
      proTip: "Critical Illness coverage is essential for long-term health.",
      doThisToday: "Check if your insurance covers critical illness."
    }
  ];

  return (
    <ModuleTemplate
      title="Health"
      description="Protection is not an expense; it's a safety net for you and your family."
      icon={HeartPulse}
      startHereSteps={startHereSteps}
      topics={topics}
      nextModule={{ title: "Living", path: "/living" }}
    />
  );
}
