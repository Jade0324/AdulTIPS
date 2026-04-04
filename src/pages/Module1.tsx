import React from 'react';
import { IdCard, ChevronRight, Info } from 'lucide-react';
import Checklist from '@/components/Checklist';
import ProTip from '@/components/ProTip';

export default function Module1() {
  const topics = [
    { id: 'philsys', title: 'Philippine National ID (PhilSys)' },
    { id: 'passport', title: 'DFA Passport' },
    { id: 'license', title: "Driver's License (LTO)" },
    { id: 'sss', title: 'SSS, PhilHealth, & Pag-IBIG' },
    { id: 'tin', title: 'TIN & BIR Basics' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <IdCard size={20} />
                <span>Module 01</span>
              </div>
              <nav className="space-y-1">
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
            <div className="p-4 bg-accent/5 rounded-2xl border border-accent/10">
              <p className="text-xs text-accent font-bold uppercase mb-2">Quick Tip</p>
              <p className="text-xs text-body leading-relaxed">
                Always bring at least 2 valid IDs and 3 photocopies of each when visiting government offices.
              </p>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-grow max-w-3xl">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <IdCard size={20} />
              <span>Module 01</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Government & Identity</h1>
            <p className="text-muted text-lg leading-relaxed">
              Your first step to adulting is proving who you are. These IDs are the "keys" to opening bank accounts, 
              applying for jobs, and traveling abroad.
            </p>
          </header>

          <section id="philsys" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">1</div>
              <h2 className="text-2xl font-serif font-bold">Philippine National ID (PhilSys)</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                The <strong>Philippine Identification System (PhilSys)</strong> is the government's central identification platform for all citizens and resident aliens. It aims to simplify public and private transactions.
              </p>
              <div className="bg-white border border-gray-100 p-6 card-radius">
                <h4 className="font-bold mb-4 flex items-center gap-2"><Info size={18} className="text-primary" /> Why you need it</h4>
                <p className="text-sm">It serves as a single valid proof of identity that is legally mandated to be accepted by all government agencies and private establishments (like banks).</p>
              </div>
              
              <h4 className="font-bold text-primary mt-8">Step-by-Step Process:</h4>
              <ol className="space-y-4 list-decimal list-inside">
                <li><strong>Step 1: Registration</strong> - Visit the official PhilSys website to register your basic information.</li>
                <li><strong>Step 2: Appointment</strong> - Schedule a visit to a registration center for biometric capture (fingerprints, iris scan, front-facing photo).</li>
                <li><strong>Step 3: Verification</strong> - Present your supporting documents (Birth Certificate, etc.) at the center.</li>
                <li><strong>Step 4: Delivery</strong> - Wait for your physical card to be delivered via PHLPost.</li>
              </ol>

              <Checklist 
                id="philsys-req" 
                title="Requirements for PhilSys" 
                items={["PSA Birth Certificate", "Secondary ID (if no birth cert)", "Appointment Slip", "Black ink pen"]} 
              />

              <ProTip>
                If your physical card is taking too long, you can download the <strong>ePhilID</strong> (digital version) which has the same validity as the physical card.
              </ProTip>
            </div>
          </section>

          <section id="passport" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">2</div>
              <h2 className="text-2xl font-serif font-bold">DFA Passport</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                The Philippine Passport is not just for travel; it is considered the "Gold Standard" of valid IDs in the Philippines.
              </p>
              
              <h4 className="font-bold text-primary">Step-by-Step Process:</h4>
              <ol className="space-y-4 list-decimal list-inside">
                <li><strong>Online Appointment</strong> - Secure a slot via the DFA Passport Appointment System. Slots are often limited, so check regularly.</li>
                <li><strong>Payment</strong> - Pay the processing fee (₱950 for regular, ₱1,200 for expedited) through authorized payment centers.</li>
                <li><strong>Personal Appearance</strong> - Go to the DFA site on your scheduled date. No need for a photo; they will take it there.</li>
              </ol>

              <Checklist 
                id="passport-req" 
                title="Requirements for First-time Applicants" 
                items={["Confirmed Online Appointment", "Accomplished Application Form", "PSA Birth Certificate", "One (1) Valid ID", "Photocopy of ID"]} 
              />

              <ProTip>
                Wear a collared shirt for your passport photo. Avoid colored contact lenses and heavy jewelry, as these are not allowed during biometric capture.
              </ProTip>
            </div>
          </section>

          {/* More sections would follow similar structure... */}
          <section className="bg-primary/5 p-8 card-radius text-center">
            <h3 className="font-serif text-2xl mb-4">Ready for the next step?</h3>
            <p className="text-muted mb-6">Once you have your IDs, it's time to manage your money.</p>
            <a href="/module-2" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all">
              Go to Module 2: Financial & Credit
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
