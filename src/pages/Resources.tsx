import React from 'react';
import { BookOpen, CheckSquare, ListChecks } from 'lucide-react';

export default function Resources() {
  const glossary = [
    { term: "SSS", definition: "Social Security System - Pension and social insurance for private sector employees." },
    { term: "TIN", definition: "Taxpayer Identification Number - Your unique number for all tax-related transactions with the BIR." },
    { term: "HMO", definition: "Health Maintenance Organization - Private health insurance usually provided by employers." },
    { term: "VUL", definition: "Variable Universal Life - A type of life insurance that includes an investment component." },
    { term: "RFO", definition: "Ready for Occupancy - Real estate units that are finished and ready for move-in." },
    { term: "LTS", definition: "License to Sell - A developer's permit to sell property to the public." },
    { term: "SPA", definition: "Special Power of Attorney - A legal document authorizing someone to act on your behalf." },
    { term: "ITR", definition: "Income Tax Return - A document filed with the BIR showing your annual income and taxes paid." },
  ];

  const cheatSheet = [
    "Spend less than you earn",
    "Sleep properly (7-8 hours)",
    "Save automatically every payday",
    "Move your body (30 mins daily)",
    "Keep learning something new"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-20">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
          <BookOpen size={24} />
          <span className="uppercase tracking-widest text-xs">Knowledge Base</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Resources & Glossary</h1>
        <p className="text-muted text-xl max-w-2xl mx-auto">
          Confused by the jargon? Here's a quick guide to the most common terms and acronyms.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Glossary */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-10 flex items-center gap-4">
            <div className="w-8 h-[2px] bg-accent" />
            Glossary
          </h2>
          <div className="space-y-4">
            {glossary.map((item) => (
              <div key={item.term} className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm">
                <h4 className="font-bold text-primary mb-2 text-lg">{item.term}</h4>
                <p className="text-muted leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-16">
          {/* Cheat Sheet */}
          <section className="bg-primary text-white p-10 rounded-[2.5rem]">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
              <ListChecks className="text-accent" />
              Adulting Cheat Sheet
            </h2>
            <ul className="space-y-6">
              {cheatSheet.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-center text-xl font-serif italic opacity-90">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Printable Checklists */}
          <section>
            <h2 className="text-3xl font-serif font-bold mb-10 flex items-center gap-4">
              <div className="w-8 h-[2px] bg-accent" />
              Printable Checklists
            </h2>
            <div className="bg-surface border border-gray-100 p-10 rounded-[2.5rem] text-center">
              <CheckSquare size={48} className="text-primary/20 mx-auto mb-6" />
              <p className="text-muted mb-8 leading-relaxed">
                Want to take these checklists offline? We're working on a PDF version you can print and tick manually.
              </p>
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all">
                Notify me when available
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
