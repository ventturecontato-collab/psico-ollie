import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import type { Technique } from '../types';

interface TechniqueCardProps {
  technique: Technique;
}

export default function TechniqueCard({ technique }: TechniqueCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[#2f3436] border border-[#444444] rounded-xl overflow-hidden cursor-pointer transition-all hover:border-[#6c5ce7]/50"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#6c5ce7] shrink-0" />
          <span className="font-semibold text-[#e5e5e5]">{technique.nome}</span>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-[#a3a3a3]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#a3a3a3]" />
        )}
      </div>

      {expanded && (
        <div className="px-4 pb-4 space-y-2 animate-fade-in">
          <p className="text-[#a3a3a3] text-sm">{technique.descricao}</p>
          <p className="text-sm">
            <span className="text-[#6495ed] font-medium">Quando usar: </span>
            <span className="text-[#a3a3a3]">{technique.quando_usar}</span>
          </p>
          <p className="text-sm">
            <span className="text-[#6c5ce7] font-medium">Por que para você: </span>
            <span className="text-[#a3a3a3]">{technique.por_que}</span>
          </p>
        </div>
      )}
    </div>
  );
}
