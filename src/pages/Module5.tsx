import React from 'react';
import { Key, ShieldAlert, Info, Zap } from 'lucide-react';
import Checklist from '@/components/Checklist';
import ProTip from '@/components/ProTip';

export default function Module5() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Key size={20} />
                <span>Module 05</span>
              </div>
              <nav className="space-y-1 text-sm text-muted">
                <a href="#renting" className="block py-2 hover:text-primary">Renting & Tenant Rights</a>
                <a href="#utilities" className="block py-2 hover:text-primary">Utilities Setup</a>
                <a href="#legal" className="block py-2 hover:text-primary">Legal Documents</a>
              </nav>
            </div>
          </div>
        </aside>

        <div className="flex-grow max-w-3xl">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <Key size={20} />
              <span>Module 05</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Independent Living</h1>
            <p className="text-muted text-lg leading-relaxed">
              Moving out is exciting, but it comes with responsibilities. From reading contracts to 
              setting up your internet, here's how to manage your own space.
            </p>
          </header>

          <section id="renting" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">1</div>
              <h2 className="text-2xl font-serif font-bold">Renting & Tenant Rights</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                In the Philippines, the <strong>Rent Control Act (RA 9653)</strong> protects tenants from arbitrary rent increases and unfair evictions for residential units below a certain price point.
              </p>
              
              <div className="bg-white border border-gray-100 p-6 card-radius">
                <h4 className="font-bold mb-4 flex items-center gap-2"><ShieldAlert size={18} className="text-primary" /> The "1 Month Advance, 2 Months Deposit" Rule</h4>
                <p className="text-sm">
                  This is the standard requirement. The <strong>Advance</strong> is usually applied to your last month of stay. The <strong>Deposit</strong> is held by the landlord to cover unpaid bills or damages when you move out.
                </p>
              </div>

              <h4 className="font-bold text-primary mt-8">Check before signing a Contract of Lease:</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Association Dues:</strong> Is it included in the rent or a separate bill?</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Guest Policy:</strong> Are overnight guests allowed?</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Pet Policy:</strong> Even if they say "pets allowed," check for size or breed restrictions.</span>
                </li>
              </ul>

              <ProTip>
                Take photos and videos of the unit <strong>before</strong> you move in. This is your evidence to get your full security deposit back later.
              </ProTip>
            </div>
          </section>

          <section id="utilities" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">2</div>
              <h2 className="text-2xl font-serif font-bold">Utilities Setup</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>If you're moving into a new place, you'll need to transfer or apply for utilities under your name.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-gray-100 card-radius flex items-start gap-3">
                  <Zap size={20} className="text-accent mt-1" />
                  <div>
                    <h5 className="font-bold text-sm">Electricity (Meralco)</h5>
                    <p className="text-xs text-muted">Requires a valid ID and proof of occupancy (Lease Contract).</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-gray-100 card-radius flex items-start gap-3">
                  <Info size={20} className="text-primary mt-1" />
                  <div>
                    <h5 className="font-bold text-sm">Internet (PLDT/Globe/Converge)</h5>
                    <p className="text-xs text-muted">Check for signal strength in your specific building before committing to a 24-month lock-in.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="legal" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">3</div>
              <h2 className="text-2xl font-serif font-bold">Legal Documents: SPA</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                A <strong>Special Power of Attorney (SPA)</strong> is a legal document that allows someone else (your parents, a sibling) to act on your behalf for specific transactions if you're busy or abroad.
              </p>
              <Checklist 
                id="living-check" 
                title="Moving Out Checklist" 
                items={["Notarized Contract of Lease", "Inventory of existing damages", "Utility transfer forms", "Barangay Clearance for residency", "Emergency contact list"]} 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
