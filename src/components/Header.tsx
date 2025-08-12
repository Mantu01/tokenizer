import { Zap } from 'lucide-react';
import { COLORS, SIZES, SPACING } from '../utils/constants';

export default function Header() {
  return (
    <div className={`text-center ${SPACING.section}`}>
      <div className="inline-flex items-center gap-3 mb-6">
        <div className={`p-3 bg-gradient-to-r ${COLORS.primary.from} ${COLORS.primary.to} ${SIZES.button} shadow-lg`}>
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white">Tokenizer</h1>
      </div>
    </div>
  );
}
