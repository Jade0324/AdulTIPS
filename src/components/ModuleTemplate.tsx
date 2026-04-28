import React, { useEffect, useState } from 'react';
import { LucideIcon, CheckCircle2, ChevronRight, AlertCircle, Clock } from 'lucide-react';
import Checklist from './Checklist';
import ProTip from './ProTip';
import { TopicSection } from '@/types';

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / Math.max(totalScroll, 1)) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalWords = topics.reduce((acc, topic) => 
    acc + topic.explanation.split(' ').length + topic.whatToDo.join(' ').split(' ').length, 0
  );
  const readTime = Math.ceil(totalWords / 200) + 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-gray-100 z-40">
        <div 
          className="h-full bg-accent transition-all duration-150" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Icon size={20} />
                <span className="text-xs uppercase tracking-widest text-primary/60">Navigation</span>
              </div>
              <nav className="space-y-1">
                <a href="#start-here" className="block px-3 py-2 text-sm text-muted hover:text-primary hover:bg-white rounded-lg transition-all font-medium">
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

            <div className="p-4 bg-surface border border-gray-100 rounded-2xl flex items-center gap-2 text-xs text-muted">
              <Clock size={14} />
              <span>{readTime} min read</span>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-grow max-w-3xl">
          {/* Page Header */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <Icon size={24} />
              <span className="uppercase tracking-widest text-xs opacity-60">Module Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-muted text-xl leading-relaxed max-w-2xl opacity-80">
              {description}
            </p>
          </header>

          {/* Start Here Section */}
          <section id="start-here" className="mb-20 scroll-mt-24 p-8 bg-primary text-white rounded-[2rem] shadow-xl shadow-primary/10">
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
                  <span className="text-lg opacity-90 leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Topic Sections */}
          <div className="space-y-32">
            {topics.map((topic) => (
              <section key={topic.id} id={topic.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-accent" />
                  <h2 className="text-3xl font-serif font-bold text-primary">{topic.title}</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted mb-2 font-bold">Quick Summary</p>
                    <p className="text-xl text-body leading-relaxed font-light">{topic.summary}</p>
                  </div>

                  <div className="text-muted leading-relaxed text-lg border-l-2 border-accent/20 pl-6">
                    {topic.explanation}
                  </div>

                  <div className="bg-surface border border-gray-100 p-8 rounded-[1.5rem] shadow-sm">
                    <h4 className="font-bold text-primary mb-4 uppercase tracking-widest text-xs">Steps to Take</h4>
                    <ul className="space-y-3">
                      {topic.whatToDo.map((step, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-body">
                          <CheckCircle2 size={18} className="text-primary/40 mt-1 flex-shrink-0" />
                          <span className="text-lg">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {topic.ifThisHappens && (
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-widest text-muted font-bold">Crisis Mode: If This Happens...</p>
                      <div className="grid gap-4">
                        {topic.ifThisHappens.map((block, idx) => (
                          <div key={idx} className="p-6 bg-red-50 border border-red-100 rounded-2xl flex gap-4">
                            <AlertCircle className="text-red-500 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-red-900 mb-1">{block.title}</p>
                              <p className="text-sm text-red-800 leading-relaxed">{block.solution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="py-8 px-2 border-y border-gray-100">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-4 font-bold">The System Rule</p>
                    <p className="text-3xl font-serif font-bold text-primary leading-tight">
                      "{topic.systemRule}"
                    </p>
                  </div>

                  {topic.whyThisMatters && (
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl">
                      <p className="text-xs uppercase tracking-widest text-muted mb-2 font-bold">The "Why"</p>
                      <p className="text-body italic text-lg leading-relaxed">{topic.whyThisMatters}</p>
                    </div>
                  )}

                  <Checklist 
                    id={`${topic.id}-req`} 
                    title="Requirements / Checklist" 
                    items={topic.requirements} 
                  />

                  <ProTip>
                    {topic.proTip}
                  </ProTip>

                  <div className="p-8 bg-primary text-white rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-primary/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest opacity-60 font-bold mb-1">Your Mission</p>
                        <p className="text-xl font-bold">Do This Today</p>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-accent bg-white/10 px-6 py-3 rounded-xl border border-white/10 text-center w-full md:w-auto">
                      {topic.doThisToday}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Next Module CTA */}
          {nextModule && (
            <div className="mt-40 pt-16 border-t border-gray-100">
              <div className="bg-surface border border-gray-100 p-12 rounded-[3rem] text-center">
                <p className="text-muted mb-4 uppercase tracking-widest text-xs font-bold">Next Module</p>
                <h3 className="text-4xl font-serif font-bold mb-10 text-primary">{nextModule.title}</h3>
                <a 
                  href={nextModule.path} 
                  className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Continue Learning
                  <ChevronRight size={24} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
