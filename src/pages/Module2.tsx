import React from 'react';
import { Wallet, Info } from 'lucide-react';
import Checklist from '@/components/Checklist';
import ProTip from '@/components/ProTip';

export default function Module2() {
  const topics = [
    { id: 'savings', title: 'Digital Savings Accounts' },
    { id: 'emergency', title: 'The Emergency Fund (EF)' },
    { id: 'credit', title: 'Credit Cards & Credit Scores' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Wallet size={20} />
                <span>Module 02</span>
              </div>
              <nav className="space-y-1">
                {topics.map((topic) => (
                  <a key={topic.id} href={`#${topic.id}`} className="block px-3 py-2 text-sm text-muted hover:text-primary hover:bg-white rounded-lg transition-all">
                    {topic.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <div className="flex-grow max-w-3xl">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <Wallet size={20} />
              <span>Module 02</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Financial & Credit</h1>
            <p className="text-muted text-lg leading-relaxed">
              Adulting is 80% behavior and 20% head knowledge. Learn how to build a solid financial foundation 
              that protects you from debt and prepares you for the future.
            </p>
          </header>

          <section id="savings" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">1</div>
              <h2 className="text-2xl font-serif font-bold">Digital Savings Accounts</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                Traditional banks offer 0.0625% interest. Digital banks (like Maya, Gotyme, Seabank, CIMB) offer <strong>3% to 6%</strong>. 
                For a young adult, this is the best place to park your savings.
              </p>
              
              <h4 className="font-bold text-primary">Why Digital Banks?</h4>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Higher interest rates (compounded daily)</li>
                <li>No minimum maintaining balance (usually)</li>
                <li>Free transfers (via Instapay/Pesonet promos)</li>
                <li>PDIC Insured up to ₱500,000</li>
              </ul>

              <Checklist 
                id="digital-bank-req" 
                title="What you need to open one" 
                items={["One (1) Valid Gov't ID", "Smartphone with camera", "Stable Internet", "Active Mobile Number"]} 
              />

              <ProTip>
                Don't put all your eggs in one basket. Use a traditional bank (BPI/BDO) for your payroll and a digital bank for your actual savings.
              </ProTip>
            </div>
          </section>

          <section id="emergency" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">2</div>
              <h2 className="text-2xl font-serif font-bold">The Emergency Fund (EF)</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                An Emergency Fund is your "financial shock absorber." It is money set aside specifically for unexpected events like job loss, medical emergencies, or urgent repairs.
              </p>
              
              <div className="bg-primary text-white p-6 card-radius">
                <h4 className="font-bold mb-2">The 3-6 Month Rule</h4>
                <p className="text-sm opacity-90">
                  Your EF should ideally be <strong>3 to 6 months</strong> of your monthly expenses. 
                  If you spend ₱15,000/month, your target EF is ₱45,000 to ₱90,000.
                </p>
              </div>

              <h4 className="font-bold text-primary">How to build it:</h4>
              <ol className="space-y-4 list-decimal list-inside">
                <li><strong>Track Expenses</strong> - Know exactly where your money goes.</li>
                <li><strong>Start Small</strong> - Set aside even ₱500 per cutoff.</li>
                <li><strong>Automate</strong> - Transfer to your savings as soon as you get your salary.</li>
              </ol>

              <ProTip>
                An "Emergency" is not a 70% off sale at the mall. If it's not a matter of health, safety, or survival, it's not an emergency.
              </ProTip>
            </div>
          </section>

          <section id="credit" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">3</div>
              <h2 className="text-2xl font-serif font-bold">Credit Cards & Credit Scores</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                In the PH, your credit score is tracked by <strong>CIBI</strong> and <strong>TransUnion</strong>. A good score helps you get approved for housing and car loans later in life.
              </p>
              
              <h4 className="font-bold text-primary">Secured Credit Cards (SCC)</h4>
              <p className="text-sm">
                If you can't get a regular credit card, apply for an SCC. You provide a "hold-out" deposit (e.g., ₱15,000), and the bank gives you a card with a limit of ~80-90% of that deposit. It's the best way to build credit from scratch.
              </p>

              <Checklist 
                id="credit-rules" 
                title="The Golden Rules of Credit Cards" 
                items={["Pay in FULL every month", "Never pay just the 'Minimum'", "Treat it like cash, not extra money", "Keep utilization below 30%"]} 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
