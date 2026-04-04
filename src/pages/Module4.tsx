import React from 'react';
import { HeartPulse, ShieldCheck, Info } from 'lucide-react';
import Checklist from '@/components/Checklist';
import ProTip from '@/components/ProTip';

export default function Module4() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <HeartPulse size={20} />
                <span>Module 04</span>
              </div>
              <nav className="space-y-1 text-sm text-muted">
                <a href="#philhealth" className="block py-2 hover:text-primary">PhilHealth & HMO</a>
                <a href="#insurance" className="block py-2 hover:text-primary">Insurance Types</a>
                <a href="#coverage" className="block py-2 hover:text-primary">Critical Illness</a>
              </nav>
            </div>
          </div>
        </aside>

        <div className="flex-grow max-w-3xl">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <HeartPulse size={20} />
              <span>Module 04</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Health & Protection</h1>
            <p className="text-muted text-lg leading-relaxed">
              One major illness can wipe out your entire savings. Protection is not an expense; it's a 
              safety net for you and your family.
            </p>
          </header>

          <section id="philhealth" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">1</div>
              <h2 className="text-2xl font-serif font-bold">PhilHealth + HMO Layering</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                In the Philippines, health coverage usually works in layers. When you get hospitalized, the bill is settled in this order:
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-100 card-radius flex gap-4">
                  <div className="font-bold text-primary">Layer 1</div>
                  <div>
                    <h5 className="font-bold">PhilHealth</h5>
                    <p className="text-xs text-muted">Government-mandated. Deducts a fixed amount based on the "Case Rate" of your illness.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-gray-100 card-radius flex gap-4">
                  <div className="font-bold text-primary">Layer 2</div>
                  <div>
                    <h5 className="font-bold">HMO (Health Maintenance Org)</h5>
                    <p className="text-xs text-muted">Usually provided by employers (Maxicare, Intellicare, etc.). Covers the remaining bill up to your Maximum Benefit Limit (MBL).</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-gray-100 card-radius flex gap-4">
                  <div className="font-bold text-primary">Layer 3</div>
                  <div>
                    <h5 className="font-bold">Personal Insurance / Out-of-Pocket</h5>
                    <p className="text-xs text-muted">If the bill exceeds your HMO limit, you pay the rest or claim from your personal health insurance.</p>
                  </div>
                </div>
              </div>
              
              <ProTip>
                Always ask the hospital billing if they have already deducted the PhilHealth share before paying your final bill.
              </ProTip>
            </div>
          </section>

          <section id="insurance" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">2</div>
              <h2 className="text-2xl font-serif font-bold">Term vs VUL vs Traditional</h2>
            </div>
            <div className="space-y-6">
              <p className="text-body">Don't buy insurance just because a friend is selling it. Understand what you're getting:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-gray-100 card-radius">
                  <h5 className="font-bold text-primary mb-2">Term</h5>
                  <p className="text-xs text-muted">Pure protection. Cheapest option. No "investment" component. If you don't die, you get nothing back.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 card-radius">
                  <h5 className="font-bold text-primary mb-2">VUL</h5>
                  <p className="text-xs text-muted">Insurance + Investment. Part of your premium goes to stocks/bonds. High fees in the first few years.</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 card-radius">
                  <h5 className="font-bold text-primary mb-2">Traditional</h5>
                  <p className="text-xs text-muted">Whole life or Endowment. Guaranteed payouts at certain ages. More expensive than Term.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="coverage" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">3</div>
              <h2 className="text-2xl font-serif font-bold">Critical Illness Coverage</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                Most HMOs cover "common" illnesses. But for major ones like Cancer, Heart Attack, or Stroke, you need <strong>Critical Illness (CI)</strong> coverage. This gives you a lump sum of cash (e.g., ₱1 Million) upon diagnosis to help with treatment and recovery.
              </p>
              <Checklist 
                id="insurance-check" 
                title="What to look for in a policy" 
                items={["Critical Illness list (is it 5 or 100?)", "Maximum Benefit Limit (MBL)", "Hospital Income Benefit", "Waiver of Premium", "Guaranteed Renewability"]} 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
