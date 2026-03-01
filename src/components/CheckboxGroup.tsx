import { Check } from 'lucide-react';

interface CheckboxGroupProps {
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
}

export default function CheckboxGroup({ options, values, onChange }: CheckboxGroupProps) {
  const toggle = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  };

  return (
    <div className="space-y-3">
      {options.map((option) => {
        const checked = values.includes(option);
        return (
          <label
            key={option}
            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border ${
              checked
                ? 'bg-[#6c5ce7]/20 border-[#6c5ce7]'
                : 'bg-[#2f3436] border-[#444444] hover:border-[#6c5ce7]/50'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(option)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 ${
                checked ? 'bg-[#6c5ce7] border-[#6c5ce7]' : 'border-[#a3a3a3]'
              }`}
            >
              {checked && <Check className="w-3 h-3 text-white" />}
            </div>
            <span className="text-[#e5e5e5]">{option}</span>
          </label>
        );
      })}
    </div>
  );
}
