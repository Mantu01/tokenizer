import { Eye } from 'lucide-react';
import { COLORS, SIZES, SPACING } from '../utils/constants';

interface ViewMappingButtonProps {
  onClick: () => void;
}

export default function ViewMappingButton({ onClick }: ViewMappingButtonProps) {
  return (
    <div className="mt-8 text-center">
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-3 ${SPACING.input} ${COLORS.button.primary} text-white font-semibold ${SIZES.button} transition-all duration-300 shadow-lg hover:shadow-xl`}
      >
        <Eye className="w-5 h-5" />
        View Character Mapping
      </button>
    </div>
  );
}
