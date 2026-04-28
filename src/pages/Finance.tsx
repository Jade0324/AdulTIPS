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
      timeLabel: "10 min setup",
      effortLabel: "Immediate win",
      costLabel: "₱100 to start",
      explanation: "Digital banks (Maya, GoTyme, SeaBank) offer 3% to 6% interest, compared to traditional banks' 0.0625%. They are PDIC insured up to ₱500,000.",
      whatToDo: [
        "Choose a bank (Maya or GoTyme).",
        "Download the app & register.",
        "Verify with one valid ID.",
        "Transfer ₱100 to test the account."
      ],
      commonMistakes: [
        "Leaving all money in a 0.01% interest account",
        "Ignoring PDIC insurance limits (₱500k)",
        "Falling for 'Phishing' links via SMS"
      ],
      systemRule: "Let your money grow while you sleep.",
      whyThisMatters: "Traditional banks lose value to inflation. Digital banks help you break even.",
      requirements: ["Smartphone", "Valid ID", "Initial Deposit"],
      proTip: "Use GoTyme for free physical card at grocery kiosks, or Maya for high-yield savings goals.",
      doThisToday: "Download Maya or GoTyme and verify your ID."
    },
    {
      id: "emergency",
      title: "The Emergency Fund (EF)",
      summary: "Your financial shock absorber for unexpected events.",
      timeLabel: "5 min prep",
      effortLabel: "Ongoing mission",
      costLabel: "Variable",
      explanation: "An EF is specifically for job loss, medical emergencies, or urgent repairs. It's your 'Peace of Mind' fund.",
      whatToDo: [
        "Income <₱20k: Aim for ₱5k EF first.",
        "Income ₱30k+: Aim for 3 months expenses.",
        "Automate 10% of every payday.",
        "Keep it separate from your spending."
      ],
      commonMistakes: [
        "Using EF for '70% off' sales",
        "Investing in stocks before building EF",
        "Keeping EF in cash (unsafe and non-earning)"
      ],
      systemRule: "Save first, spend what's left.",
      whyThisMatters: "It prevents you from going into debt when life happens.",
      requirements: ["Expense Tracker", "Digital Bank", "Discipline"],
      proTip: "Progress beats perfection. Even ₱500/month is better than ₱0.",
      doThisToday: "Calculate your current monthly expenses.",
      ifThisHappens: [
        {
          title: "Lost my job",
          solution: "This is what the EF is for. Access it slowly while job hunting. Do not touch credit cards for food."
        }
      ]
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
