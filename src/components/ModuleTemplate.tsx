import React from 'react';
import { LucideIcon, CheckCircle2, ChevronRight } from 'lucide-react';
import Checklist from './Checklist';
import ProTip from './ProTip';

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
}

interface ModuleTemplateProps {
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

export default function ModuleTemplate({
  title,
  description,
  icon: Icon,
  startHereSteps,
  topics,
  nextModule
}: ModuleTemplateProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Icon size={20} />
                <span className="text-xs uppercase tracking-widest">Navigation</span>
              </div>
              <nav className="space-y-1">
                <a href="#start-here" className="block px-3 py-2 text-sm text-muted hover:text-primary hover:bg-white rounded-lg transition-all">
                  Start Here
                </a>
                {topics.map((topic) => (
                  <a
                    key={topic.id}
                    href={`#${topic.id}`}
                    className="block px-3 py-2 text-sm text-muted hover:text-primary hover:bg-white rounded-lg transition-all"
                  >
                    {topic.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-grow max-w-3xl">
          {/* Page Header */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <Icon size={24} />
              <span className="uppercase tracking-widest text-xs">Module Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-muted text-xl leading-relaxed max-w-2xl">
              {description}
            </p>
          </header>

          {/* Start Here Section */}
          <section id="start-here" className="mb-20 scroll-mt-24 p-8 bg-primary text-white rounded-[2rem]">
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <ChevronRight className="text-accent" />
              Start Here
            </h2>
            <ol className="space-y-4">
              {startHereSteps.map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-primary font-bold text-xs flex items-center justify-center mt-1">
                    {index + 1}
                  </span>
                  <span className="text-lg opacity-90">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Topic Sections */}
          <div className="space-y-32">
            {topics.map((topic) => (
              <section key={topic.id} id={topic.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-accent" />
                  <h2 className="text-3xl font-serif font-bold">{topic.title}</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-primary font-bold mb-2">Quick Summary</p>
                    <p className="text-lg text-body leading-relaxed">{topic.summary}</p>
                  </div>

                  <div className="text-muted leading-relaxed">
                    {topic.explanation}
                  </div>

                  <div className="bg-surface border border-gray-100 p-8 rounded-[1.5rem]">
                    <h4 className="font-bold text-primary mb-4 uppercase tracking-widest text-xs">What to Do</h4>
                    <ul className="space-y-3">
                      {topic.whatToDo.map((step, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-body">
                          <span className="text-accent font-bold mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="py-6 border-y border-gray-100">
                    <p className="text-xs uppercase tracking-widest text-muted mb-2">System Rule</p>
                    <p className="text-2xl font-serif font-bold text-primary italic">
                      "{topic.systemRule}"
                    </p>
                  </div>

                  {topic.whyThisMatters && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted mb-2">Why This Matters</p>
                      <p className="text-body italic">{topic.whyThisMatters}</p>
                    </div>
                  )}

                  <Checklist 
                    id={`${topic.id}-req`} 
                    title="Requirements / Key Points" 
                    items={topic.requirements} 
                  />

                  <ProTip>
                    {topic.proTip}
                  </ProTip>

                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary" size={24} />
                      <span className="font-bold text-primary">Do This Today</span>
                    </div>
                    <p className="text-primary font-medium">{topic.doThisToday}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Next Module CTA */}
          {nextModule && (
            <div className="mt-32 pt-12 border-t border-gray-100 text-center">
              <p className="text-muted mb-4 uppercase tracking-widest text-xs">Next Module</p>
              <h3 className="text-3xl font-serif font-bold mb-8">{nextModule.title}</h3>
              <a 
                href={nextModule.path} 
                className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all"
              >
                Continue Journey
                <ChevronRight size={20} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
