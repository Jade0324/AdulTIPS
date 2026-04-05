import React from 'react';
import { Home } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Property() {
  const startHereSteps = [
    "Check your Pag-IBIG membership status.",
    "Calculate your monthly housing budget.",
    "Research developers' License to Sell (LTS).",
    "Factor in hidden costs of ownership."
  ];

  const topics: TopicSection[] = [
    {
      id: "realestate",
      title: "Pre-selling vs RFO",
      summary: "Choosing between a plan and a finished unit.",
      explanation: "Pre-selling is cheaper but riskier, while RFO is ready but more expensive.",
      whatToDo: [
        "Compare introductory rates for pre-selling.",
        "Inspect the actual unit for RFO.",
        "Check for flexible downpayment terms.",
        "Verify the developer's track record."
      ],
      systemRule: "Location is everything, but LTS is life.",
      whyThisMatters: "Buying without an LTS is a major financial risk.",
      requirements: ["LTS Verification", "Reservation Fee", "Valid ID"],
      proTip: "Pre-selling units have the highest appreciation potential.",
      doThisToday: "Research a developer's reputation online."
    },
    {
      id: "loans",
      title: "Housing Loans: Pag-IBIG vs Bank",
      summary: "Financing your property purchase.",
      explanation: "Pag-IBIG is more stable, while banks are competitive but stricter.",
      whatToDo: [
        "Check Pag-IBIG's 24-month contribution rule.",
        "Compare bank interest rates and terms.",
        "Prepare income documents for pre-approval.",
        "Choose the loan term that fits your budget."
      ],
      systemRule: "Don't borrow more than you can pay.",
      whyThisMatters: "A housing loan is a 15-30 year commitment.",
      requirements: ["COE", "Payslips", "ITR", "Valid ID"],
      proTip: "Pag-IBIG allows up to 30 years for loan terms.",
      doThisToday: "Check your Pag-IBIG contribution total."
    },
    {
      id: "vehicles",
      title: "Vehicle Ownership",
      summary: "The hidden costs of owning a car.",
      explanation: "A car is a depreciating asset with significant annual expenses.",
      whatToDo: [
        "Factor in insurance and LTO registration.",
        "Budget for preventive maintenance (PMS).",
        "Calculate monthly fuel and toll costs.",
        "Set aside an emergency repair fund."
      ],
      systemRule: "A car is a liability, not an asset.",
      whyThisMatters: "Hidden costs can exceed the monthly amortization.",
      requirements: ["Insurance", "Maintenance Budget", "Parking Space"],
      proTip: "Always have a dedicated parking space before buying.",
      doThisToday: "Calculate the total annual cost of a car."
    }
  ];

  return (
    <ModuleTemplate
      title="Property"
      description="Buying a home or a car is a major decision. Look at the total cost."
      icon={Home}
      startHereSteps={startHereSteps}
      topics={topics}
      nextModule={{ title: "Health", path: "/health" }}
    />
  );
}
