import React from 'react';
import { ShieldAlert, Fingerprint, Search, AlertTriangle, Link as LinkIcon, UserX } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Protection() {
  const startHereSteps = [
    "Enable 2FA on all your financial accounts.",
    "Never share your OTP (One-Time Password) with anyone.",
    "Do not click links in SMS from unknown senders.",
    "Learn to identify 'Common SCAM' patterns."
  ];

  const topics: TopicSection[] = [
    {
      id: "gcash-scams",
      title: "Digital Wallet Protection",
      summary: "Protecting your GCash, Maya, and bank accounts.",
      explanation: "Scammers often use 'Social Engineering' to trick you into giving access to your digital wallet.",
      whatToDo: [
        "Enable MPIN and Biometrics (Face/Fingerprint).",
        "Check your account activity daily.",
        "Report suspicious transactions immediately.",
        "Logout of your account on public devices."
      ],
      systemRule: "Your OTP is your digital house key. Never give it away.",
      whyThisMatters: "Most digital financial scams are permanent. Recovery is extremely difficult.",
      requirements: ["2-Factor Authentication", "Verified Account", "Strong MPIN"],
      proTip: "No bank or wallet staff will ever call you to ask for your OTP.",
      doThisToday: "Enable Biometric Login on your primary wallet app.",
      ifThisHappens: [
        {
          title: "Got a link saying my account is locked",
          solution: "Do NOT click. Close the SMS, open the official app directly to check your status."
        },
        {
          title: "Shared my OTP by mistake",
          solution: "Immediately change your MPIN and call the official hotline to freeze your account."
        }
      ]
    },
    {
      id: "lending-traps",
      title: "Online Lending App (OLA) Traps",
      summary: "Avoiding predatory lenders and 'Harassment' apps.",
      explanation: "Many unregistered lending apps charge 50%+ interest and use illegal debt collection methods.",
      whatToDo: [
        "Check the SEC list of registered lending companies.",
        "Read reviews specifically about 'Harassment'.",
        "Understand the 'Processing Fee' vs 'Disbursed Amount'.",
        "Borrow only from reputable banks or established apps."
      ],
      systemRule: "Convenience is often a mask for high risk.",
      whyThisMatters: "Illegal apps can access your contacts and harass your family/friends.",
      requirements: ["SEC Verification", "Contract Review", "Fixed Interest Rate"],
      proTip: "If it asks for access to your 'Contacts' or 'Gallery', it's likely a red flag.",
      doThisToday: "Uninstall any lending app that is not SEC-registered."
    },
    {
      id: "job-scams",
      title: "Fake Job Offers",
      summary: "Identifying 'Task-based' or 'Pay-to-work' schemes.",
      explanation: "Common on Telegram/WhatsApp, these scams ask you to 'pay a fee' to start working.",
      whatToDo: [
        "Verify the company on LinkedIn or official websites.",
        "Never pay for 'training' or 'equipment' upfront.",
        "Be wary of jobs that offer ₱5k/day for 2 hours of work.",
        "Check for official company email addresses (not @gmail.com)."
      ],
      systemRule: "If it's too good to be true, it is a scam.",
      whyThisMatters: "Young jobseekers are the #1 target for identity theft and money muling.",
      requirements: ["Official Email Check", "Interview Verification", "No Upfront Fees"],
      proTip: "Legitimate employers will never ask for money or crypto during recruitment.",
      doThisToday: "Search the company name + 'scam' on Google or Reddit."
    }
  ];

  return (
    <ModuleTemplate
      title="Protection"
      description="The Philippines is a high-risk zone for digital scams. Learn how to identify and neutralize threats before they cost you your life savings."
      icon={ShieldAlert}
      startHereSteps={startHereSteps}
      topics={topics}
    />
  );
}
