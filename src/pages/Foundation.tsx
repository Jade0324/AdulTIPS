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
      timeLabel: "5 min read",
      effortLabel: "2 month wait",
      costLabel: "₱0 (Free)",
      explanation: "PhilSys aims to simplify public and private transactions by providing a single, valid proof of identity. It's legally mandated to be accepted by all agencies and banks.",
      whatToDo: [
        "Register online at the PhilSys website.",
        "Book biometrics capture appointment.",
        "Visit the center with PSA Birth Cert.",
        "Download ePhilID while waiting for the card."
      ],
      commonMistakes: [
        "Waiting for the physical card to use it (ePhilID is valid)",
        "Missing the appointment slot",
        "Wrong spelling on PSA cert (fix PSA first)"
      ],
      systemRule: "One ID to rule them all.",
      whyThisMatters: "Without this, opening bank accounts or getting a passport is 10x harder.",
      requirements: ["PSA Birth Certificate", "Supporting ID", "Appointment Slip"],
      proTip: "If you need an ID immediately, the ePhilID (printed version) is just as valid as the plastic card.",
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
      title: "TIN (Tax Identification Number)",
      summary: "Your unique identifier for all tax-related transactions.",
      timeLabel: "3 min read",
      effortLabel: "1 day setup",
      costLabel: "₱0 (Free)",
      explanation: "Every working Filipino needs a TIN. It's required for employment, investments, and even some high-value purchases.",
      whatToDo: [
        "Apply via the ORUS BIR portal.",
        "Submit BIR Form 1902 (for employees).",
        "Get your TIN verification slip.",
        "Request the digital TIN ID."
      ],
      commonMistakes: [
        "Applying for a second TIN (Illegal!)",
        "Paying 'fixers' on Facebook (It's free)",
        "Forgetting the number (Save it in a vault)"
      ],
      systemRule: "You only get one TIN for life.",
      whyThisMatters: "Employers cannot pay you without this number.",
      requirements: ["Birth Certificate", "Valid ID", "Employment Contract"],
      proTip: "BIR now has a mobile app and web portal (ORUS) so you don't always have to visit the RDO.",
      doThisToday: "Ask your HR for your TIN or check if you already have one."
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
