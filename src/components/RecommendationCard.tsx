import { Lightbulb } from 'lucide-react';

interface RecommendationCardProps {
  recommendations: string[];
}

export default function RecommendationCard({ recommendations }: RecommendationCardProps) {
  return (
    <div className="bg-[#2f3436] rounded-2xl p-6 border border-[#444444]">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="w-6 h-6 text-yellow-400" />
        <h3 className="text-lg font-bold text-[#e5e5e5]">Recomendações</h3>
      </div>
      <ul className="space-y-3">
        {recommendations.map((rec, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#6c5ce7] mt-0.5 shrink-0">•</span>
            <span className="text-[#a3a3a3] text-sm">{rec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
