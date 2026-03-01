interface RadioGroupProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}

export default function RadioGroup({ options, value, onChange, name }: RadioGroupProps) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option}
          className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border ${
            value === option
              ? 'bg-[#6c5ce7]/20 border-[#6c5ce7]'
              : 'bg-[#2f3436] border-[#444444] hover:border-[#6c5ce7]/50'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              value === option ? 'border-[#6c5ce7]' : 'border-[#a3a3a3]'
            }`}
          >
            {value === option && <div className="w-2.5 h-2.5 rounded-full bg-[#6c5ce7]" />}
          </div>
          <span className="text-[#e5e5e5]">{option}</span>
        </label>
      ))}
    </div>
  );
}
