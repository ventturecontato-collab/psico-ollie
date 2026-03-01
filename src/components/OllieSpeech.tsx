interface OllieSpeechProps {
  message: string;
  className?: string;
}

export default function OllieSpeech({ message, className = '' }: OllieSpeechProps) {
  return (
    <div
      className={`relative bg-[#2f3436] border border-[#444444] rounded-2xl px-6 py-4 max-w-md mx-auto ${className}`}
    >
      <p className="text-[#e5e5e5] text-base leading-relaxed text-center">{message}</p>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2f3436] border-l border-t border-[#444444] rotate-45" />
    </div>
  );
}
