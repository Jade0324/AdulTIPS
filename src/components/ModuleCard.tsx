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
      className="group bg-surface border border-gray-100 card-radius p-6 hover:border-accent transition-all hover:shadow-lg flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-accent group-hover:text-white transition-all">
          <Icon size={24} />
        </div>
        <span className="text-xs font-bold text-muted uppercase tracking-wider">Module {moduleNumber}</span>
      </div>
      <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-grow">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm group-hover:text-accent transition-colors">
        <span>Explore Module</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
