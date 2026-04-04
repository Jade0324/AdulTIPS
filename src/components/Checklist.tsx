import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChecklistProps {
  id: string;
  title: string;
  items: string[];
}

export default function Checklist({ id, title, items }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem(`checklist-${id}`);
    return saved ? JSON.parse(saved) : {};
  });

  const toggleItem = (item: string) => {
    const newChecked = { ...checkedItems, [item]: !checkedItems[item] };
    setCheckedItems(newChecked);
    localStorage.setItem(`checklist-${id}`, JSON.stringify(newChecked));
  };

  return (
    <div className="bg-white border border-gray-100 card-radius p-6 my-6">
      <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
        <CheckCircle2 size={20} className="text-primary" />
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <label
            key={item}
            className={cn(
              "checklist-item cursor-pointer hover:border-primary/30",
              checkedItems[item] && "bg-primary/5 border-primary/20"
            )}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={!!checkedItems[item]}
              onChange={() => toggleItem(item)}
            />
            <div className={cn(
              "mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
              checkedItems[item] ? "bg-primary border-primary" : "border-gray-300"
            )}>
              {checkedItems[item] && <CheckCircle2 size={12} className="text-white" />}
            </div>
            <span className={cn(
              "text-sm",
              checkedItems[item] ? "text-primary font-medium" : "text-body"
            )}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
