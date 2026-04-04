import React from 'react';
import { Home, Info, Car } from 'lucide-react';
import Checklist from '@/components/Checklist';
import ProTip from '@/components/ProTip';

export default function Module3() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Home size={20} />
                <span>Module 03</span>
              </div>
              <nav className="space-y-1 text-sm text-muted">
                <a href="#realestate" className="block py-2 hover:text-primary">Real Estate Basics</a>
                <a href="#loans" className="block py-2 hover:text-primary">Housing Loans</a>
                <a href="#vehicles" className="block py-2 hover:text-primary">Vehicle Ownership</a>
              </nav>
            </div>
          </div>
        </aside>

        <div className="flex-grow max-w-3xl">
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
              <Home size={20} />
              <span>Module 03</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Asset & Property</h1>
            <p className="text-muted text-lg leading-relaxed">
              Buying a home or a car is likely the biggest financial decision you'll make. 
              Don't get blinded by "low monthly" marketing. Look at the total cost.
            </p>
          </header>

          <section id="realestate" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">1</div>
              <h2 className="text-2xl font-serif font-bold">Pre-selling vs RFO</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white border border-gray-100 card-radius">
                <h4 className="font-bold text-primary mb-2">Pre-selling</h4>
                <p className="text-sm text-muted mb-4">Buying a property that is still under construction or just a plan.</p>
                <ul className="text-xs space-y-2">
                  <li className="text-green-600 font-bold">✓ Lower price / Introductory rates</li>
                  <li className="text-green-600 font-bold">✓ Flexible downpayment terms</li>
                  <li className="text-red-600 font-bold">✗ Risk of construction delays</li>
                  <li className="text-red-600 font-bold">✗ Cannot use or rent out immediately</li>
                </ul>
              </div>
              <div className="p-6 bg-white border border-gray-100 card-radius">
                <h4 className="font-bold text-primary mb-2">Ready for Occupancy (RFO)</h4>
                <p className="text-sm text-muted mb-4">Buying a property that is already built and ready to move into.</p>
                <ul className="text-xs space-y-2">
                  <li className="text-green-600 font-bold">✓ Inspect the actual unit</li>
                  <li className="text-green-600 font-bold">✓ Move in or rent out immediately</li>
                  <li className="text-red-600 font-bold">✗ Higher price tag</li>
                  <li className="text-red-600 font-bold">✗ Lump sum downpayment usually required</li>
                </ul>
              </div>
            </div>
            
            <ProTip>
              Always check the <strong>License to Sell (LTS)</strong> of a developer before paying any reservation fee for pre-selling units.
            </ProTip>
          </section>

          <section id="loans" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">2</div>
              <h2 className="text-2xl font-serif font-bold">Housing Loans: Pag-IBIG vs Bank</h2>
            </div>
            <div className="space-y-6">
              <p className="text-body">Most Filipinos use financing to buy property. Here's a quick comparison:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-3 border border-white/10">Feature</th>
                      <th className="p-3 border border-white/10">Pag-IBIG Fund</th>
                      <th className="p-3 border border-white/10">Bank Financing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border border-gray-100 font-bold">Interest Rates</td>
                      <td className="p-3 border border-gray-100">Lower, more stable</td>
                      <td className="p-3 border border-gray-100">Competitive, but fluctuates</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-100 font-bold">Loan Term</td>
                      <td className="p-3 border border-gray-100">Up to 30 years</td>
                      <td className="p-3 border border-gray-100">Usually 15-20 years max</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border border-gray-100 font-bold">Requirements</td>
                      <td className="p-3 border border-gray-100">Must be a member for 24 mos</td>
                      <td className="p-3 border border-gray-100">Strict credit & income check</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="vehicles" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="step-indicator">3</div>
              <h2 className="text-2xl font-serif font-bold">Vehicle Hidden Costs</h2>
            </div>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                A car is a <strong>depreciating asset</strong>. Its value goes down the moment you drive it out of the dealership. Aside from the monthly amortization, factor in these:
              </p>
              <Checklist 
                id="car-costs" 
                title="Annual Vehicle Expenses" 
                items={["Comprehensive Insurance (₱15k-30k)", "LTO Registration (₱3k-5k)", "Preventive Maintenance (PMS)", "Fuel & Toll Fees", "Parking Fees", "Emergency Repair Fund"]} 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
