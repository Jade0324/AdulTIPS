import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  moduleNumber: string;
  key?: string;
}

export default function ModuleCard({ title, description, icon: Icon, path, moduleNumber }: ModuleCardProps) {
  return (
    <Link
      to={path}
      className="group bg-surface border border-gray-100 card-radius p-8 hover:border-accent transition-all hover:shadow-lg flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-accent group-hover:text-white transition-all">
          <Icon size={28} />
        </div>
        <span className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Module {moduleNumber}</span>
      </div>
      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-grow">{description}</p>
      <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
        <span>Explore Module</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
