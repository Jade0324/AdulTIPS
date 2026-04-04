import { Link } from 'react-router-dom';
import { 
  IdCard, 
  Wallet, 
  Home as HomeIcon, 
  HeartPulse, 
  Key, 
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import ModuleCard from '@/components/ModuleCard';

export default function Home() {
  const modules = [
    {
      title: "Government & Identity",
      description: "Step-by-step guide to PhilSys ID, Passport, Driver's License, SSS, PhilHealth, Pag-IBIG, and TIN.",
      icon: IdCard,
      path: "/module-1",
      moduleNumber: "01"
    },
    {
      title: "Financial & Credit",
      description: "Master digital savings, emergency funds, credit scores, and credit cards without the debt trap.",
      icon: Wallet,
      path: "/module-2",
      moduleNumber: "02"
    },
    {
      title: "Asset & Property",
      description: "Navigating real estate (Pre-selling vs RFO), housing loans, and the hidden costs of vehicles.",
      icon: HomeIcon,
      path: "/module-3",
      moduleNumber: "03"
    },
    {
      title: "Health & Protection",
      description: "Understanding HMOs, PhilHealth, and the difference between Term, VUL, and Traditional Insurance.",
      icon: HeartPulse,
      path: "/module-4",
      moduleNumber: "04"
    },
    {
      title: "Independent Living",
      description: "Your rights as a tenant, Rent Control Act, utility setup, and legal documents like SPA.",
      icon: Key,
      path: "/module-5",
      moduleNumber: "05"
    },
    {
      title: "Resources & Glossary",
      description: "A quick reference for acronyms, printable checklists, and a glossary of adulting terms.",
      icon: BookOpen,
      path: "/resources",
      moduleNumber: "Extra"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Free Survival Guide for Filipinos
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
            Adulting doesn't have <br className="hidden md:block" /> to be a <span className="text-accent italic">mystery.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A step-by-step resource helping Filipino fresh grads and young adults navigate 
            government IDs, taxes, banking, and independent living.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/module-1"
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              Explore Modules
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/resources"
              className="w-full sm:w-auto bg-white border border-gray-200 text-primary px-8 py-4 rounded-full font-bold text-lg hover:border-primary transition-all flex items-center justify-center gap-2"
            >
              Download Checklist
            </Link>
          </div>

          {/* Progress Tracker Visual (Decorative) */}
          <div className="mt-20 max-w-3xl mx-auto bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-primary">Your Adulting Progress</span>
              <span className="text-sm font-bold text-accent">40% Complete</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-accent w-[40%] transition-all duration-1000" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Gov't IDs", status: true },
                { label: "Bank Account", status: true },
                { label: "Emergency Fund", status: false },
                { label: "HMO/Insurance", status: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 size={16} className={item.status ? "text-primary" : "text-gray-300"} />
                  <span className={item.status ? "text-primary" : "text-muted"}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Survival Modules</h2>
          <p className="text-muted max-w-xl mx-auto">
            We've broken down adulting into 5 essential modules. Start from the beginning or jump to what you need right now.
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

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10">Ready to start your journey?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Join thousands of young Filipinos who are navigating adult life with confidence and clarity.
          </p>
          <Link
            to="/module-1"
            className="inline-block bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all relative z-10"
          >
            Start with Module 1
          </Link>
        </div>
      </section>
    </div>
  );
}
