import { LucideIcon } from 'lucide-react';

export interface SituationBlock {
  title: string;
  solution: string;
}

export interface TopicSection {
  id: string;
  title: string;
  summary: string;
  explanation: string;
  whatToDo: string[];
  commonMistakes?: string[]; // Added for concise 3-section layout
  timeLabel?: string; // e.g., "3 min read"
  effortLabel?: string; // e.g., "1 week goal"
  costLabel?: string; // e.g., "₱0 to start"
  systemRule: string;
  whyThisMatters?: string;
  requirements: string[];
  proTip: string;
  doThisToday: string;
  ifThisHappens?: SituationBlock[];
}

export interface ModuleData {
  title: string;
  description: string;
  icon: LucideIcon;
  startHereSteps: string[];
  topics: TopicSection[];
  nextModule?: {
    title: string;
    path: string;
  };
}
