import React, { useState } from 'react';
import { Calculator, Wallet, Home, Car, Info } from 'lucide-react';

export default function Calculators() {
  const [efExpenses, setEfExpenses] = useState(0);
  const [rent, setRent] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [commute, setCommute] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4">
          <Calculator size={24} />
          <span className="uppercase tracking-widest text-xs">Financial Tools</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Adulting Calculators</h1>
        <p className="text-muted text-xl max-w-2xl mx-auto">
          Crunch the numbers before making big decisions. No data is stored; all calculations happen on your device.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* EF Calculator */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <Wallet size={24} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary">Emergency Fund Calculator</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-muted mb-2 uppercase tracking-widest">Monthly Living Expenses (₱)</label>
              <input 
                type="number" 
                placeholder="e.g. 20000"
                className="w-full p-4 bg-surface border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-xl font-bold"
                onChange={(e) => setEfExpenses(Number(e.target.value))}
              />
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-primary/5 rounded-2xl">
                <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Starter EF (3 mo)</p>
                <p className="text-2xl font-serif font-bold text-primary text-accent">₱{(efExpenses * 3).toLocaleString()}</p>
              </div>
              <div className="p-6 bg-primary text-white rounded-2xl">
                <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">Solid EF (6 mo)</p>
                <p className="text-2xl font-serif font-bold">₱{(efExpenses * 6).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3">
              <Info className="text-blue-500 flex-shrink-0" size={20} />
              <p className="text-xs text-blue-800 leading-relaxed">
                Expert Tip: Store this in a high-interest digital bank. Even ₱500/month is a good start. 
                Progress beats perfection.
              </p>
            </div>
          </div>
        </div>

        {/* Renting Calculator */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-primary/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Home size={24} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary">Reality Check: Renting</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-muted mb-2 uppercase">Base Rent</label>
                <input type="number" className="w-full p-3 bg-surface border border-gray-100 rounded-lg" onChange={(e) => setRent(Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-2 uppercase">Utilities (Est.)</label>
                <input type="number" className="w-full p-3 bg-surface border border-gray-100 rounded-lg" onChange={(e) => setUtilities(Number(e.target.value))} />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-2 uppercase">Monthly Transpo</label>
                <input type="number" className="w-full p-3 bg-surface border border-gray-100 rounded-lg" onChange={(e) => setCommute(Number(e.target.value))} />
              </div>
            </div>

            <div className="mt-8 p-8 border-2 border-dashed border-primary/20 rounded-[2rem]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-serif">Total Monthly Commitment</span>
                <span className="text-2xl font-serif font-bold text-primary">₱{(rent + utilities + commute).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-60 italic">Move-in Cash Needed (1+2 deposit)</span>
                <span className="text-lg font-serif font-bold italic">₱{(rent * 3).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
