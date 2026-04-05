import React from 'react';
import { Wallet } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Finance() {
  const startHereSteps = [
    "Open a digital savings account.",
    "Calculate your monthly expenses.",
    "Set aside your first ₱1,000 for EF.",
    "Check your credit score online."
  ];

  const topics: TopicSection[] = [
    {
      id: "savings",
      title: "Digital Savings Accounts",
      summary: "Modern banking with higher interest rates.",
      explanation: "Digital banks offer 3% to 6% interest, compared to traditional banks' 0.0625%.",
      whatToDo: [
        "Choose a digital bank (Maya, GoTyme, etc.).",
        "Download the app and register.",
        "Verify your identity with one valid ID.",
        "Transfer your first deposit via Instapay."
      ],
      systemRule: "Let your money grow while you sleep.",
      whyThisMatters: "Compounded daily interest beats inflation over time.",
      requirements: ["Smartphone", "Valid ID", "Initial Deposit"],
      proTip: "Maya and GoTyme are PDIC insured up to ₱500,000.",
      doThisToday: "Download a digital banking app."
    },
    {
      id: "emergency",
      title: "The Emergency Fund (EF)",
      summary: "Your financial shock absorber for unexpected events.",
      explanation: "An EF is money set aside specifically for job loss, medical emergencies, or repairs.",
      whatToDo: [
        "Calculate 3-6 months of your expenses.",
        "Set a target amount for your EF.",
        "Automate your savings every payday.",
        "Keep it in a high-interest digital bank."
      ],
      systemRule: "Save first, spend what's left.",
      whyThisMatters: "It prevents you from going into debt when life happens.",
      requirements: ["Expense Tracker", "Savings Account", "Discipline"],
      proTip: "An emergency is not a 70% off sale at the mall.",
      doThisToday: "Calculate your 3-month expense total."
    },
    {
      id: "credit",
      title: "Credit Cards & Credit Scores",
      summary: "Building your creditworthiness for future loans.",
      explanation: "A good credit score helps you get approved for housing and car loans later.",
      whatToDo: [
        "Apply for a Secured Credit Card (SCC) first.",
        "Use it for small, regular expenses.",
        "Pay your balance in FULL every month.",
        "Keep your utilization below 30%."
      ],
      systemRule: "Credit is a tool, not extra money.",
      whyThisMatters: "It proves your reliability to future lenders.",
      requirements: ["Income Proof", "Valid ID", "Hold-out Deposit (for SCC)"],
      proTip: "Never pay just the 'Minimum Amount Due'.",
      doThisToday: "Check if your bank offers an SCC."
    }
  ];

  return (
    <ModuleTemplate
      title="Finance"
      description="Adulting is 80% behavior and 20% head knowledge. Build a solid foundation."
      icon={Wallet}
      startHereSteps={startHereSteps}
      topics={topics}
      nextModule={{ title: "Property", path: "/property" }}
    />
  );
}
