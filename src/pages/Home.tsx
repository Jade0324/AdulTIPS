import { Link } from 'react-router-dom';
import { 
  IdCard, 
  Wallet, 
  Home as HomeIcon, 
  HeartPulse, 
  Key, 
  BookOpen,
  ArrowRight,
  TrendingUp,
  Target,
  CheckCircle2,
  Zap
} from 'lucide-react';
import ModuleCard from '@/components/ModuleCard';

export default function Home() {
  const modules = [
    {
      title: "Foundation",
      description: "Step-by-step guide to PhilSys ID, Passport, Driver's License, SSS, PhilHealth, Pag-IBIG, and TIN.",
      icon: IdCard,
      path: "/foundation",
      moduleNumber: "01"
    },
    {
      title: "Finance",
      description: "Master digital savings, emergency funds, credit scores, and credit cards without the debt trap.",
      icon: Wallet,
      path: "/finance",
      moduleNumber: "02"
    },
    {
      title: "Property",
      description: "Navigating real estate (Pre-selling vs RFO), housing loans, and the hidden costs of vehicles.",
      icon: HomeIcon,
      path: "/property",
      moduleNumber: "03"
    },
    {
      title: "Health",
      description: "Understanding HMOs, PhilHealth, and the difference between Term, VUL, and Traditional Insurance.",
      icon: HeartPulse,
      path: "/health",
      moduleNumber: "04"
    },
    {
      title: "Living",
      description: "Your rights as a tenant, Rent Control Act, utility setup, and legal documents like SPA.",
      icon: Key,
      path: "/living",
      moduleNumber: "05"
    },
    {
      title: "Growth",
      description: "Mindset and life optimization. 10-year vision, comfort zones, and building relationships.",
      icon: TrendingUp,
      path: "/growth",
      moduleNumber: "06"
    },
    {
      title: "Resources",
      description: "A quick reference for acronyms, printable checklists, and a glossary of adulting terms.",
      icon: BookOpen,
      path: "/resources",
      moduleNumber: "Extra"
    }
  ];

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative pt-24 pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
            Survival Guide for Filipinos
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-8 leading-tight">
            Adulting made <br className="hidden md:block" /> <span className="text-accent italic">simple.</span>
          </h1>
          <p className="text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Step-by-step life guide for Filipinos navigating government IDs, 
            taxes, banking, and independent living.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/foundation"
              className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/foundation"
              className="w-full sm:w-auto bg-white border border-gray-200 text-primary px-10 py-5 rounded-full font-bold text-lg hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              Explore Modules
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-[3rem] border border-gray-100">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold mb-4 text-primary">How It Works</h2>
          <p className="text-muted text-lg">Three simple steps to master adulting.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Pick a module", desc: "Choose from 6 essential life categories.", icon: Target },
            { step: "02", title: "Follow steps", desc: "Follow our strict, actionable guides.", icon: Zap },
            { step: "03", title: "Take action", desc: "Complete the 'Do This Today' tasks.", icon: CheckCircle2 },
          ].map((item) => (
            <div key={item.step} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/5 text-primary mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Survival Modules</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Broken down into actionable guides. Start from the beginning or jump to what you need right now.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard 
              key={module.title} 
              title={module.title}
              description={module.description}
              icon={module.icon}
              path={module.path}
              moduleNumber={module.moduleNumber}
            />
          ))}
        </div>
      </section>

      {/* Progress Visual (Decorative) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-surface border border-gray-100 p-10 rounded-[2.5rem] shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary">Your Adulting Progress</h3>
            <span className="text-sm font-bold text-accent uppercase tracking-widest">Decorative Only</span>
          </div>
          <div className="space-y-8">
            {[
              { label: "Foundation", progress: 100 },
              { label: "Finance", progress: 65 },
              { label: "Property", progress: 20 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-primary">{item.label}</span>
                  <span className="text-muted">{item.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -mr-48 -mt-48 blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 relative z-10 leading-tight">Ready to start <br /> your journey?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto relative z-10 leading-relaxed">
            Join thousands of young Filipinos who are navigating adult life with confidence and clarity.
          </p>
          <Link
            to="/foundation"
            className="inline-block bg-accent text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-accent/90 transition-all relative z-10"
          >
            Start with Foundation
          </Link>
        </div>
      </section>
    </div>
  );
}
