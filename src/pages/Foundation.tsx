import React from 'react';
import { IdCard } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Foundation() {
  const startHereSteps = [
    "Gather your PSA Birth Certificate.",
    "Prepare at least two valid IDs.",
    "Set aside a budget for processing fees.",
    "Check online appointment slots early."
  ];

  const topics: TopicSection[] = [
    {
      id: "philsys",
      title: "Philippine National ID",
      summary: "The central identification platform for all Filipino citizens.",
      explanation: "PhilSys aims to simplify public and private transactions by providing a single, valid proof of identity.",
      whatToDo: [
        "Register online at the PhilSys website.",
        "Book an appointment for biometrics capture.",
        "Visit the registration center with supporting docs.",
        "Wait for your physical card or download ePhilID."
      ],
      systemRule: "One ID to rule them all.",
      whyThisMatters: "It is legally mandated to be accepted by all agencies and banks.",
      requirements: ["PSA Birth Certificate", "Supporting ID", "Appointment Slip"],
      proTip: "Download the ePhilID if the physical card is delayed.",
      doThisToday: "Check the PhilSys website for registration status."
    },
    {
      id: "passport",
      title: "DFA Passport",
      summary: "The gold standard of valid IDs for Filipinos.",
      explanation: "A passport is essential for international travel and is widely accepted for all legal transactions.",
      whatToDo: [
        "Secure a slot via the DFA online system.",
        "Pay the processing fee at authorized centers.",
        "Appear at the DFA site for biometrics.",
        "Choose between pick-up or courier delivery."
      ],
      systemRule: "Always keep your passport valid.",
      whyThisMatters: "It is your primary international identity document.",
      requirements: ["PSA Birth Certificate", "Valid ID", "Appointment Confirmation"],
      proTip: "Wear a collared shirt and avoid colored contact lenses.",
      doThisToday: "Check DFA's website for available appointment slots."
    },
    {
      id: "license",
      title: "Driver's License",
      summary: "Your permit to operate motor vehicles in the Philippines.",
      explanation: "Issued by the LTO, this ID is highly valued for its strict application process.",
      whatToDo: [
        "Apply for a Student Permit first.",
        "Complete the required driving course (TDC/PDC).",
        "Pass the LTO written and practical exams.",
        "Pay fees and get your biometrics taken."
      ],
      systemRule: "Safety first, license second.",
      whyThisMatters: "It proves your competency and serves as a primary ID.",
      requirements: ["TDC Certificate", "Medical Certificate", "Student Permit"],
      proTip: "Review the LTO portal mock exams before the actual test.",
      doThisToday: "Locate the nearest accredited driving school."
    },
    {
      id: "benefits",
      title: "SSS, PhilHealth, & Pag-IBIG",
      summary: "The big three of Filipino social security and benefits.",
      explanation: "These agencies provide pension, health insurance, and housing loan benefits to members.",
      whatToDo: [
        "Register for an SS Number online.",
        "Apply for PhilHealth membership at any branch.",
        "Register for Pag-IBIG (HDMF) online.",
        "Consolidate your records if you've had multiple jobs."
      ],
      systemRule: "Contribute early, benefit later.",
      whyThisMatters: "These are your safety nets for health and retirement.",
      requirements: ["Birth Certificate", "Marriage Contract (if applicable)", "Valid ID"],
      proTip: "Download the mobile apps for each to track contributions.",
      doThisToday: "Register for your SSS number online."
    },
    {
      id: "tin",
      title: "TIN & BIR Basics",
      summary: "Your unique identifier for all tax-related transactions.",
      explanation: "Every working Filipino needs a TIN to comply with tax laws and employment requirements.",
      whatToDo: [
        "Apply via your employer or the ORUS portal.",
        "Submit BIR Form 1902 or 1904.",
        "Verify your TIN via the BIR website.",
        "Keep your TIN card in a safe place."
      ],
      systemRule: "Taxes are the price of civilization.",
      whyThisMatters: "It is required for employment and opening bank accounts.",
      requirements: ["Birth Certificate", "Valid ID", "Employment Contract"],
      proTip: "You only ever need ONE TIN for life. Do not re-apply.",
      doThisToday: "Ask your HR if they have processed your TIN."
    }
  ];

  return (
    <ModuleTemplate
      title="Foundation"
      description="Your first step to adulting is proving who you are. These IDs are the keys to the system."
      icon={IdCard}
      startHereSteps={startHereSteps}
      topics={topics}
      nextModule={{ title: "Finance", path: "/finance" }}
    />
  );
}
