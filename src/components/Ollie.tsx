import ollieImg from '../assets/ollie.png';

interface OllieProps {
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

export default function Ollie({ size = 'md', animate = true, className = '' }: OllieProps) {
  const sizeMap = {
    sm: 48,
    md: 96,
    lg: 160,
  };

  const px = sizeMap[size];

  return (
    <div
      className={`select-none ${animate ? 'animate-float animate-glow-pulse' : ''} ${className}`}
    >
      <img
        src={ollieImg}
        alt="Ollie mascote"
        width={px}
        height={px}
        className="object-contain"
        style={{ width: px, height: px }}
      />
    </div>
  );
}
