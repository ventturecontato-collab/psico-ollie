import { AlertTriangle } from 'lucide-react';
import ollieImg from '../assets/ollie.png';

interface AlertBannerProps {
  alerts: string[];
}

export default function AlertBanner({ alerts }: AlertBannerProps) {
  if (alerts.length === 0) return null;

  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <AlertTriangle className="w-6 h-6 text-red-400" />
        <h3 className="text-lg font-bold text-red-300">Alertas Importantes</h3>
        <img src={ollieImg} alt="Ollie" className="w-7 h-7 object-contain" />
      </div>
      <ul className="space-y-2">
        {alerts.map((alert, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-red-400 mt-0.5 shrink-0">!</span>
            <span className="text-[#e5e5e5] text-sm">{alert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
