interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextInput({
  value,
  onChange,
  placeholder = 'Digite sua resposta aqui (opcional)...',
}: TextInputProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="w-full p-4 bg-[#2f3436] border border-[#444444] rounded-xl text-[#e5e5e5] placeholder-[#6e6e6e] resize-none focus:outline-none focus:border-[#6c5ce7] transition-colors"
    />
  );
}
