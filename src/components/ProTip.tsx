import React from 'react';
import { Lightbulb } from 'lucide-react';

interface ProTipProps {
  children: React.ReactNode;
}

export default function ProTip({ children }: ProTipProps) {
  return (
    <div className="pro-tip my-6">
      <div className="flex items-center gap-2 text-accent font-bold mb-1">
        <Lightbulb size={18} />
        <span>Pro Tip:</span>
      </div>
      <div className="text-sm text-body leading-relaxed">
        {children}
      </div>
    </div>
  );
}
