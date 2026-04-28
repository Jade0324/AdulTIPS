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
