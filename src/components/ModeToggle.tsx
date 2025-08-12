import { Hash, Type } from 'lucide-react';
import { COLORS, SIZES, SPACING } from '../utils/constants';

interface ModeToggleProps {
  mode: 'text-to-token' | 'token-to-text';
  onModeSwitch: () => void;
}

export default function ModeToggle({ mode, onModeSwitch }: ModeToggleProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className={`${COLORS.background.cardSecondary} ${SIZES.button} p-2 flex items-center gap-2`}>
        <button
          onClick={onModeSwitch}
          className={`flex items-center gap-2 ${SPACING.button} ${SIZES.button} font-semibold transition-all duration-300 ${
            mode === 'text-to-token'
              ? `bg-gradient-to-r ${COLORS.primary.from} ${COLORS.primary.to} text-white shadow-lg`
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Type className="w-4 h-4" />
          Text → Token
        </button>
        <button
          onClick={onModeSwitch}
          className={`flex items-center gap-2 ${SPACING.button} ${SIZES.button} font-semibold transition-all duration-300 ${
            mode === 'token-to-text'
              ? `bg-gradient-to-r ${COLORS.primary.from} ${COLORS.primary.to} text-white shadow-lg`
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Hash className="w-4 h-4" />
          Token → Text
        </button>
      </div>
    </div>
  );
}
