import Ollie from '../components/Ollie';
import OllieSpeech from '../components/OllieSpeech';
import { welcomeMessage } from '../data/ollieMessages';

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <Ollie size="lg" />

      <div className="mt-8 mb-8">
        <OllieSpeech message={welcomeMessage} />
      </div>

      <button
        onClick={onStart}
        className="px-8 sm:px-10 py-4 bg-[#6c5ce7] text-white text-lg font-bold rounded-2xl hover:bg-[#5a4bd6] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#6c5ce7]/25"
      >
        Começar Agora
      </button>

      <p className="mt-4 text-[#6e6e6e] text-sm">Leva uns 3 minutinhos</p>
    </div>
  );
}
