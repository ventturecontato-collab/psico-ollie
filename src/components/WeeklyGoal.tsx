import { Target } from 'lucide-react';

interface WeeklyGoalProps {
  goal: string;
}

export default function WeeklyGoal({ goal }: WeeklyGoalProps) {
  return (
    <div className="bg-gradient-to-r from-[#6c5ce7]/20 to-[#8e44ad]/20 border border-[#6c5ce7]/30 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-2">
        <Target className="w-6 h-6 text-[#6495ed]" />
        <h3 className="text-lg font-bold text-[#6495ed]">Meta da Semana</h3>
      </div>
      <p className="text-[#e5e5e5] text-base">{goal}</p>
    </div>
  );
}
