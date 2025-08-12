import { ArrowRightLeft } from 'lucide-react';
import { COLORS, SIZES, SPACING } from '../utils/constants';

interface InputSectionProps {
  mode: 'text-to-token' | 'token-to-text';
  inputText: string;
  inputTokens: string;
  isProcessing: boolean;
  onInputTextChange: (value: string) => void;
  onInputTokensChange: (value: string) => void;
  onProcess: () => void;
}

export default function InputSection({
  mode,
  inputText,
  inputTokens,
  isProcessing,
  onInputTextChange,
  onInputTokensChange,
  onProcess
}: InputSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
        <h3 className="text-xl font-semibold text-white">
          {mode === 'text-to-token' ? 'Input Text' : 'Input Tokens'}
        </h3>
      </div>
      
      {mode === 'text-to-token' ? (
        <textarea
          value={inputText}
          onChange={(e) => onInputTextChange(e.target.value)}
          placeholder="Enter your text here to tokenize..."
          className={`w-full h-64 ${COLORS.background.cardSecondary} border ${COLORS.border.secondary} ${SIZES.input} ${SPACING.input} text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm leading-relaxed`}
        />
      ) : (
        <textarea
          value={inputTokens}
          onChange={(e) => onInputTokensChange(e.target.value)}
          placeholder="Enter tokens in array format: [1, 2, 3]"
          className={`w-full h-64 ${COLORS.background.cardSecondary} border ${COLORS.border.secondary} ${SIZES.input} ${SPACING.input} text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none font-mono text-sm leading-relaxed`}
        />
      )}

      <button
        onClick={onProcess}
        disabled={isProcessing}
        className={`w-full ${COLORS.button.primary} disabled:${COLORS.button.disabled} text-white font-semibold ${SPACING.input} ${SIZES.button} transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:cursor-not-allowed group`}
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Processing...
          </>
        ) : (
          <>
            <ArrowRightLeft className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
            {mode === 'text-to-token' ? 'Tokenize Text' : 'Convert to Text'}
          </>
        )}
      </button>
    </div>
  );
}
