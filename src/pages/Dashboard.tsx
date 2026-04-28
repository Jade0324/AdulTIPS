import React, { useEffect, useState } from 'react';
import { LayoutDashboard, CheckCircle2, ListChecks, Trophy, Clock, History } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [stats, setStats] = useState({
    completedTasks: 0,
    totalKnownTasks: 35, // Estimated total checklist items
    completionPercentage: 0,
    streak: Math.floor(Math.random() * 5) + 1, // Simulated for demo purposes
  });

  useEffect(() => {
    // Count items in localStorage starting with 'checklist-'
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('checklist-')) {
        const value = JSON.parse(localStorage.getItem(key) || '{}');
        count += Object.values(value).filter(v => v === true).length;
      }
    }
    setStats(prev => ({
      ...prev,
      completedTasks: count,
      completionPercentage: Math.round((count / prev.totalKnownTasks) * 100)
    }));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="mb-16">
        <div className="flex items-center gap-3 text-primary font-bold mb-4">
          <LayoutDashboard size={20} />
          <span className="uppercase tracking-[0.2em] text-xs">Progress Dashboard</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">Mabuhay! Here's your <br className="hidden md:block" /> progress so far.</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Stats Card */}
        <div className="lg:col-span-2 bg-primary text-white p-12 rounded-[3rem] relative overflow-hidden flex flex-col justify-between min-h-[400px] shadow-xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-6xl font-serif font-bold text-accent mb-2">{stats.completionPercentage}%</h2>
            <p className="text-2xl font-serif font-bold opacity-80 italic">of the Adulting essentials mastered.</p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex justify-between text-sm font-bold uppercase tracking-widest opacity-60">
              <span>Overall Progress</span>
              <span>{stats.completedTasks} / {stats.totalKnownTasks} Tasks</span>
            </div>
            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-1000" 
                style={{ width: `${stats.completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-8">
          <div className="bg-surface border border-gray-100 p-8 rounded-[2rem] shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Daily Streak</p>
                <h4 className="text-2xl font-serif font-bold text-primary">{stats.streak} Days Active</h4>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">Adulting is a habit. Keep visiting to unlock more guides!</p>
          </div>

          <div className="bg-surface border border-gray-100 p-8 rounded-[2rem] shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <History size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Last Topic</p>
                <h4 className="text-2xl font-serif font-bold text-primary">Protection</h4>
              </div>
            </div>
            <Link to="/protection" className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-2 group">
              Resume Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Suggested Next Actions */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-serif font-bold text-primary flex items-center gap-4">
            <div className="w-8 h-[2px] bg-accent" />
            What's next for you?
          </h3>
          <Link to="/roadmap" className="hidden md:flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:text-accent transition-colors">
            Retake Roadmap <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Complete Foundation", desc: "You have 3 IDs left to learn about.", path: "/foundation" },
            { title: "Update Savings", desc: "Check if your digital bank interest increased.", path: "/finance" },
            { title: "Review Tenant Rights", desc: "Essential if your lease expires soon.", path: "/living" },
          ].map((act, id) => (
            <Link 
              key={id} 
              to={act.path}
              className="p-8 bg-white border border-gray-100 rounded-[2rem] hover:border-primary transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">{act.title}</h4>
                <p className="text-muted text-sm leading-relaxed mb-6">{act.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                Go to module <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
