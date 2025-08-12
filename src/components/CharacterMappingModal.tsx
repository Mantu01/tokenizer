import { X } from 'lucide-react';
import { getCharacterMapping } from '../utils/tokenizer';
import { COLORS, SIZES } from '../utils/constants';

interface CharacterMappingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CharacterMappingModal({ isOpen, onClose }: CharacterMappingModalProps) {
  if (!isOpen) return null;

  const mapping = getCharacterMapping();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-600 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-600">
          <h2 className="text-2xl font-bold text-white">Character to Token Mapping</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mapping.map(({ char, token, display }) => (
              <div
                key={token}
                className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 hover:bg-slate-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-mono text-white">{display}</span>
                  <span className="text-sm text-slate-400">#{token}</span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Char Code: {char.charCodeAt(0)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
