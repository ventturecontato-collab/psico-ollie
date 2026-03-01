import { useState } from 'react';
import type { ScheduleBlock } from '../types';
import { getSubjectColor } from '../lib/subjectColors';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface WeeklyScheduleProps {
  schedule: Record<string, ScheduleBlock[]>;
}

const dayLabels: Record<string, string> = {
  segunda: 'Segunda',
  terca: 'Terça',
  quarta: 'Quarta',
  quinta: 'Quinta',
  sexta: 'Sexta',
  sabado: 'Sábado',
  domingo: 'Domingo',
};

const dayLabelsShort: Record<string, string> = {
  segunda: 'Seg',
  terca: 'Ter',
  quarta: 'Qua',
  quinta: 'Qui',
  sexta: 'Sex',
  sabado: 'Sáb',
  domingo: 'Dom',
};

const dayOrder = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];

function ScheduleBlockCard({ block }: { block: ScheduleBlock }) {
  const color = getSubjectColor(block.materia);
  const isAula = block.tipo === 'aula';

  return (
    <div
      className="rounded-lg p-2 text-xs"
      style={{
        backgroundColor: isAula ? '#374151' : `${color}20`,
        borderLeft: `3px solid ${isAula ? '#6B7280' : color}`,
      }}
    >
      <div className="font-semibold text-[#a3a3a3] truncate text-[10px]">
        {block.horario}
      </div>
      <div
        className="font-bold truncate"
        style={{ color: isAula ? '#9CA3AF' : color }}
      >
        {block.materia.length > 20
          ? block.materia.substring(0, 18) + '...'
          : block.materia}
      </div>
      {block.tipo === 'estudo' && (
        <div className="text-[#a3a3a3] truncate text-[10px] mt-0.5">
          {block.atividade}
        </div>
      )}
    </div>
  );
}

function EmptyBlock() {
  return (
    <div className="rounded-lg p-3 text-xs text-[#6e6e6e] text-center border border-dashed border-[#444444]">
      Livre
    </div>
  );
}

// Mobile: accordion vertical com cada dia expandível
function MobileSchedule({ schedule }: WeeklyScheduleProps) {
  const [expandedDay, setExpandedDay] = useState<string | null>('segunda');

  return (
    <div className="space-y-2">
      {dayOrder.map((day) => {
        const blocks = schedule[day] || [];
        const isExpanded = expandedDay === day;
        const hasBlocks = blocks.length > 0;

        return (
          <div
            key={day}
            className="bg-[#2f3436] border border-[#444444] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedDay(isExpanded ? null : day)}
              className="w-full flex items-center justify-between p-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#e5e5e5] text-sm">
                  {dayLabels[day]}
                </span>
                <span className="text-[#6e6e6e] text-xs">
                  {hasBlocks ? `${blocks.length} atividade${blocks.length > 1 ? 's' : ''}` : 'Livre'}
                </span>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#a3a3a3]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#a3a3a3]" />
              )}
            </button>

            {isExpanded && (
              <div className="px-3 pb-3 space-y-1.5 animate-fade-in">
                {blocks.map((block, i) => (
                  <ScheduleBlockCard key={i} block={block} />
                ))}
                {!hasBlocks && <EmptyBlock />}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Desktop: grid horizontal
function DesktopSchedule({ schedule }: WeeklyScheduleProps) {
  return (
    <div className="flex gap-3">
      {dayOrder.map((day) => {
        const blocks = schedule[day] || [];
        return (
          <div key={day} className="flex-1 min-w-[90px]">
            <div className="text-center text-sm font-bold text-[#e5e5e5] mb-2 py-2 bg-[#2f3436] rounded-lg">
              {dayLabelsShort[day]}
            </div>
            <div className="space-y-1.5">
              {blocks.map((block, i) => (
                <ScheduleBlockCard key={i} block={block} />
              ))}
              {blocks.length === 0 && <EmptyBlock />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WeeklySchedule({ schedule }: WeeklyScheduleProps) {
  return (
    <>
      {/* Mobile: accordion */}
      <div className="md:hidden">
        <MobileSchedule schedule={schedule} />
      </div>
      {/* Desktop: grid horizontal */}
      <div className="hidden md:block">
        <DesktopSchedule schedule={schedule} />
      </div>
    </>
  );
}
