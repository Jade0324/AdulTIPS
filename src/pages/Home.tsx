import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Heart,
  Shield,
  Zap,
  Briefcase,
  Home as HomeIcon,
  Wallet,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const personas = [
    {
      name: "Carla, 22",
      role: "Fresh Graduate",
      needs: ["First Job", "Valid IDs", "Savings Basics"],
      path: "/roadmap?persona=graduate",
      color: "bg-blue-50 text-blue-700"
    },
    {
      name: "Mark, 26",
      role: "Renting in QC",
      needs: ["Rent Budgeting", "Insurance", "Side Income"],
      path: "/roadmap?persona=renter",
      color: "bg-orange-50 text-orange-700"
    },
    {
      name: "Jen, 30",
      role: "Starting a Family",
      needs: ["Property", "Critical Illness", "Long-term Planning"],
      path: "/roadmap?persona=family",
      color: "bg-purple-50 text-purple-700"
    }
  ];

  const situations = [
    { title: "I need money guidance", icon: <Wallet />, path: "/finance", color: "bg-green-50" },
    { title: "I’m planning to move out", icon: <HomeIcon />, path: "/living", color: "bg-orange-50" },
    { title: "I need valid IDs", icon: <Shield />, path: "/foundation", color: "bg-blue-50" },
    { title: "I feel behind in life", icon: <Compass />, path: "/roadmap", color: "bg-purple-50" },
    { title: "I need career direction", icon: <Briefcase />, path: "/growth", color: "bg-yellow-50" },
    { title: "I need to organize adulthood", icon: <Zap />, path: "/dashboard", color: "bg-red-50" },
  ];

  return (
    <div className="relative pb-20">
      {/* Hero Section */}
      <section className="pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(6,22,46,0.05)_0%,transparent_100%)]" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
            Survival Guide for Filipinos
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-8 leading-tight tracking-tight">
            Adulting is learned, <br className="hidden md:block" /> 
            not <span className="text-accent italic">inherited.</span>
          </h1>
          
          <p className="text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-80">
            You don't need to do everything now. Most people learn this late. 
            Start with one small win today.
          </p>

          {/* Smart Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="absolute inset-y-0 left-6 flex items-center text-muted pointer-events-none">
              <Search size={24} />
            </div>
            <input 
              type="text" 
              placeholder="What are you dealing with? (e.g. 'Need passport', 'Broke after payday')"
              className="w-full pl-16 pr-8 py-6 rounded-full bg-white border border-gray-100 shadow-2xl shadow-primary/5 text-lg focus:ring-2 focus:ring-primary outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-muted uppercase tracking-widest">
            <span className="flex items-center gap-2"><Heart size={14} className="text-red-400" /> You are not behind</span>
            <span className="mx-2 opacity-20">|</span>
            <span className="flex items-center gap-2"><Zap size={14} className="text-yellow-400" /> Actionable steps</span>
            <span className="mx-2 opacity-20">|</span>
            <span className="flex items-center gap-2"><Shield size={14} className="text-blue-400" /> 100% Filipino context</span>
          </div>
        </div>
      </section>

      {/* Situational Grid */}
      <section className="py-20 bg-surface border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">What do you need help with today?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((sit, idx) => (
              <Link 
                key={idx}
                to={sit.path}
                className={`group p-8 rounded-[2.5rem] border border-gray-100 ${sit.color} hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all flex items-center justify-between`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {sit.icon}
                  </div>
                  <span className="text-xl font-serif font-bold text-primary">{sit.title}</span>
                </div>
                <ArrowRight className="text-primary/20 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Or pick a situation like yours</h2>
            <p className="text-muted text-lg">Click a persona to see a custom roadmap for their life stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona, idx) => (
              <Link 
                key={idx}
                to={persona.path}
                className={`flex flex-col h-full p-10 rounded-[3rem] border border-gray-100 transition-all hover:translate-y-[-8px] hover:shadow-2xl ${persona.color}`}
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-serif font-bold mb-2">{persona.name}</h3>
                  <p className="uppercase tracking-widest text-[10px] font-bold opacity-70">{persona.role}</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-10">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40">Needs First:</p>
                  {persona.needs.map((need, i) => (
                    <div key={i} className="flex items-center gap-3 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
                      {need}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between font-bold">
                  <span>View Roadmap</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Banner */}
      <section className="pb-32 px-4">
        <div className="max-w-4xl mx-auto p-12 rounded-[3.5rem] bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,184,0,0.2),transparent_70%)]" />
          <h2 className="text-4xl font-serif font-bold mb-6 relative z-10">Ready to start?</h2>
          <p className="text-xl opacity-70 mb-10 max-w-xl mx-auto relative z-10 font-serif italic">
            "The best time to start was yesterday. The second best time is right now. We'll handle the boring details together."
          </p>
          <Link 
            to="/roadmap"
            className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all relative z-10 shadow-xl shadow-accent/20"
          >
            Get Your 5-Step Focus Plan
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
