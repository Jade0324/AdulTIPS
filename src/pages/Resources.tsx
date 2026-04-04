import React from 'react';
import { BookOpen, Table, CheckSquare } from 'lucide-react';

export default function Resources() {
  const glossary = [
    { term: "SSS", definition: "Social Security System - Pension and social insurance for private sector employees." },
    { term: "TIN", definition: "Taxpayer Identification Number - Your unique number for all tax-related transactions with the BIR." },
    { term: "HMO", definition: "Health Maintenance Organization - Private health insurance usually provided by employers." },
    { term: "VUL", definition: "Variable Universal Life - A type of life insurance that includes an investment component." },
    { term: "RFO", definition: "Ready for Occupancy - Real estate units that are finished and ready for move-in." },
    { term: "Instapay", definition: "Real-time electronic fund transfer service for amounts up to ₱50,000." },
    { term: "Pesonet", definition: "Electronic fund transfer for large amounts, usually processed within the same or next banking day." },
    { term: "SPA", definition: "Special Power of Attorney - A legal document authorizing someone to act on your behalf." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
          <BookOpen size={20} />
          <span>Resources</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Glossary & Quick References</h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Confused by the jargon? Here's a quick guide to the most common terms and acronyms you'll encounter in your adulting journey.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Glossary */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" />
            Glossary of Terms
          </h2>
          <div className="space-y-4">
            {glossary.map((item) => (
              <div key={item.term} className="bg-white p-6 card-radius border border-gray-100">
                <h4 className="font-bold text-primary mb-1">{item.term}</h4>
                <p className="text-sm text-body leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Acronyms Table */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
            <Table className="text-primary" />
            Acronym Reference
          </h2>
          <div className="overflow-hidden border border-gray-100 card-radius">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4">Acronym</th>
                  <th className="p-4">Full Name</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ["BIR", "Bureau of Internal Revenue"],
                  ["DFA", "Department of Foreign Affairs"],
                  ["LTO", "Land Transportation Office"],
                  ["PSA", "Philippine Statistics Authority"],
                  ["PHLPost", "Philippine Postal Corporation"],
                  ["PDIC", "Philippine Deposit Insurance Corporation"],
                  ["BSP", "Bangko Sentral ng Pilipinas"],
                ].map(([acro, full], idx) => (
                  <tr key={acro} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-bold text-primary">{acro}</td>
                    <td className="p-4 text-muted">{full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-accent/10 card-radius border border-accent/20">
            <h3 className="text-xl font-serif font-bold text-primary mb-4 flex items-center gap-2">
              <CheckSquare size={20} />
              Printable Checklists
            </h3>
            <p className="text-sm text-body mb-6">
              Want to take these checklists offline? We're working on a PDF version you can print and tick manually.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-all">
              Notify me when available
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
