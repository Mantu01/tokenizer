import { Copy, Download, Hash, Type } from 'lucide-react';
import { COLORS, SIZES, SPACING } from '../utils/constants';

interface OutputSectionProps {
  mode: 'text-to-token' | 'token-to-text';
  outputText: string;
  outputTokens: number[];
  error: string | null;
  onCopy: (text: string) => void;
  onDownload: () => void;
  inputText?: string;
}

export default function OutputSection({
  mode,
  outputText,
  outputTokens,
  error,
  onCopy,
  onDownload,
  inputText
}: OutputSectionProps) {
  const getOutputDisplay = () => {
    if (mode === 'text-to-token') {
      return outputTokens.length > 0 ? `[${outputTokens.join(', ')}]` : '';
    }
    return outputText;
  };

  const outputDisplay = getOutputDisplay();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
          <h3 className="text-xl font-semibold text-white">
            {mode === 'text-to-token' ? 'Generated Tokens' : 'Decoded Text'}
          </h3>
        </div>
        
        {outputDisplay && (
          <div className="flex gap-2">
            <button
              onClick={() => onCopy(outputDisplay)}
              className={`p-2 ${COLORS.button.icon} text-slate-300 hover:text-white ${SIZES.button} transition-colors duration-200`}
              title="Copy to clipboard"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={onDownload}
              className={`p-2 ${COLORS.button.icon} text-slate-300 hover:text-white ${SIZES.button} transition-colors duration-200`}
              title="Download result"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <textarea
          value={outputDisplay}
          readOnly
          placeholder={mode === 'text-to-token' 
            ? 'Tokenized output will appear here...' 
            : 'Decoded text will appear here...'}
          className={`w-full h-64 ${COLORS.background.cardTertiary} border ${COLORS.border.tertiary} ${SIZES.input} ${SPACING.input} text-white placeholder-slate-500 focus:outline-none resize-none font-mono text-sm leading-relaxed`}
        />
        {!outputDisplay && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-slate-500 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-700/30 rounded-full flex items-center justify-center">
                {mode === 'text-to-token' ? (
                  <Hash className="w-8 h-8" />
                ) : (
                  <Type className="w-8 h-8" />
                )}
              </div>
              <p>Results will appear here</p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
          {error}
        </div>
      )}

      {outputDisplay && (
        <div className={`${COLORS.background.cardTertiary} border ${COLORS.border.tertiary} ${SIZES.button} px-4 py-3 text-slate-300 text-sm`}>
          <div className="flex items-center gap-4">
            <span>
              {mode === 'text-to-token' 
                ? `${outputTokens.length} tokens generated` 
                : `${outputText.length} characters decoded`}
            </span>
            {mode === 'text-to-token' && inputText && (
              <span>
                Ratio: 1:1
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
