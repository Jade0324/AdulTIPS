import React from 'react';
import { TrendingUp } from 'lucide-react';
import ModuleTemplate, { TopicSection } from '@/components/ModuleTemplate';

export default function Growth() {
  const startHereSteps = [
    "Write down your 10-year vision.",
    "Identify one hard thing to do.",
    "Share your learning in public.",
    "Track your spending for a week."
  ];

  const topics: TopicSection[] = [
    {
      id: "vision",
      title: "Plan Your Life",
      summary: "Creating a 10-year vision for your future.",
      explanation: "A long-term vision helps you make better short-term decisions.",
      whatToDo: [
        "Write down your 10-year vision.",
        "Identify your core values and goals.",
        "Break down your vision into 1-year plans.",
        "Review and update your vision regularly."
      ],
      systemRule: "A vision is a roadmap for your life.",
      whyThisMatters: "Without a vision, you're just drifting.",
      requirements: ["Vision Statement", "Core Values", "1-Year Plans"],
      proTip: "Your vision can change as you grow.",
      doThisToday: "Write down one 10-year goal."
    },
    {
      id: "hardthings",
      title: "Do Hard Things",
      summary: "Stepping out of your comfort zone.",
      explanation: "Growth happens when you challenge yourself.",
      whatToDo: [
        "Identify one hard thing to do.",
        "Set a deadline for the task.",
        "Break the task into smaller steps.",
        "Celebrate your progress and learning."
      ],
      systemRule: "Hard things lead to great results.",
      whyThisMatters: "Comfort is the enemy of growth.",
      requirements: ["Hard Task", "Deadline", "Smaller Steps"],
      proTip: "Start small and build your confidence.",
      doThisToday: "Identify one hard thing to do."
    },
    {
      id: "public",
      title: "Practice in Public",
      summary: "Sharing your learning with others.",
      explanation: "Sharing your work helps you learn and grow.",
      whatToDo: [
        "Share your learning in public.",
        "Engage with others in your field.",
        "Be open to feedback and criticism.",
        "Keep learning and improving your work."
      ],
      systemRule: "Sharing is learning in public.",
      whyThisMatters: "Public practice builds your network.",
      requirements: ["Public Platform", "Learning Content", "Feedback"],
      proTip: "Don't be afraid to make mistakes.",
      doThisToday: "Share one thing you learned today."
    },
    {
      id: "finance",
      title: "Financial Rule",
      summary: "Spending less than you earn.",
      explanation: "Financial freedom starts with spending less.",
      whatToDo: [
        "Track your spending for a week.",
        "Identify and cut unnecessary expenses.",
        "Automate your savings every payday.",
        "Invest your savings for long-term growth."
      ],
      systemRule: "Spend less than you earn.",
      whyThisMatters: "Financial freedom is a long-term goal.",
      requirements: ["Expense Tracker", "Savings Account", "Budget"],
      proTip: "Small savings add up over time.",
      doThisToday: "Track your spending for one day."
    },
    {
      id: "body",
      title: "Take Care of Body",
      summary: "Prioritizing your physical health.",
      explanation: "A healthy body is essential for a healthy mind.",
      whatToDo: [
        "Exercise for at least 30 minutes daily.",
        "Eat a balanced and nutritious diet.",
        "Get at least 7-8 hours of sleep.",
        "Stay hydrated throughout the day."
      ],
      systemRule: "Your body is your most important asset.",
      whyThisMatters: "Physical health impacts your productivity.",
      requirements: ["Exercise Plan", "Nutritious Diet", "Sleep Schedule"],
      proTip: "Consistency is key to a healthy body.",
      doThisToday: "Go for a 30-minute walk."
    },
    {
      id: "mind",
      title: "Protect Your Mind",
      summary: "Prioritizing your mental health.",
      explanation: "A healthy mind is essential for a healthy life.",
      whatToDo: [
        "Practice rest and relaxation daily.",
        "Journal your thoughts and feelings.",
        "Limit your exposure to negative news.",
        "Seek professional help if needed."
      ],
      systemRule: "Your mind is your most important asset.",
      whyThisMatters: "Mental health impacts your overall well-being.",
      requirements: ["Rest Plan", "Journaling Practice", "Support System"],
      proTip: "Mindfulness can help you stay grounded.",
      doThisToday: "Journal for 10 minutes today."
    },
    {
      id: "learning",
      title: "Keep Learning",
      summary: "Prioritizing your continuous learning.",
      explanation: "Continuous learning is essential for growth.",
      whatToDo: [
        "Read books and articles regularly.",
        "Take online courses and workshops.",
        "Attend seminars and conferences.",
        "Learn from others in your field."
      ],
      systemRule: "Continuous learning is a lifelong journey.",
      whyThisMatters: "Learning keeps you relevant and competitive.",
      requirements: ["Learning Plan", "Resources", "Curiosity"],
      proTip: "Learn something new every day.",
      doThisToday: "Read one article in your field."
    },
    {
      id: "relationships",
      title: "Build Relationships",
      summary: "Prioritizing your social connections.",
      explanation: "Healthy relationships are essential for a happy life.",
      whatToDo: [
        "Invest time in your relationships.",
        "Communicate openly and honestly.",
        "Be supportive and empathetic.",
        "Build a strong support network."
      ],
      systemRule: "Relationships are the heart of a happy life.",
      whyThisMatters: "Social connections impact your overall well-being.",
      requirements: ["Relationship Plan", "Communication Skills", "Empathy"],
      proTip: "Quality over quantity in relationships.",
      doThisToday: "Call a friend or family member."
    }
  ];

  return (
    <ModuleTemplate
      title="Growth"
      description="Mindset and life optimization. Build a future you're proud of."
      icon={TrendingUp}
      startHereSteps={startHereSteps}
      topics={topics}
      nextModule={{ title: "Resources", path: "/resources" }}
    />
  );
}
