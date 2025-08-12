import { COLORS, SIZES, SPACING } from '../utils/constants';

interface StatsSectionProps {
  vocabularySize: number;
}

export default function StatsSection({ vocabularySize }: StatsSectionProps) {
  return (
    <div className="mt-12 text-center">
      <div className={`inline-flex items-center gap-8 ${COLORS.background.stats} ${SIZES.button} px-8 py-4`}>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{vocabularySize}</div>
          <div className="text-sm text-slate-400">Token Vocab Size</div>
        </div>
        <div className="w-px h-8 bg-slate-600"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">1:1</div>
          <div className="text-sm text-slate-400">Char to Token</div>
        </div>
        <div className="w-px h-8 bg-slate-600"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">∞</div>
          <div className="text-sm text-slate-400">Max Input Length</div>
        </div>
      </div>
    </div>
  );
}
