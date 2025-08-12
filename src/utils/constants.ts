export const COLORS = {
  primary: {
    from: 'from-purple-500',
    to: 'to-pink-500',
    hover: {
      from: 'hover:from-purple-600',
      to: 'hover:to-pink-600'
    }
  },
  secondary: {
    from: 'from-blue-500',
    to: 'to-cyan-500',
    hover: {
      from: 'hover:from-blue-600',
      to: 'hover:to-cyan-600'
    }
  },
  background: {
    main: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    overlay: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent',
    card: 'bg-white/10 backdrop-blur-xl border border-white/20',
    cardSecondary: 'bg-slate-800/50',
    cardTertiary: 'bg-slate-800/30',
    stats: 'bg-white/5 backdrop-blur-sm border border-white/10'
  },
  text: {
    primary: 'text-white',
    secondary: 'text-slate-300',
    tertiary: 'text-slate-400',
    error: 'text-red-300'
  },
  border: {
    primary: 'border-white/20',
    secondary: 'border-slate-600/50',
    tertiary: 'border-slate-600/30',
    error: 'border-red-500/30'
  },
  button: {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    secondary: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
    disabled: 'from-slate-600 to-slate-600',
    icon: 'bg-slate-700/50 hover:bg-slate-600/50'
  }
} as const;

export const SIZES = {
  container: 'max-w-6xl mx-auto',
  card: 'rounded-3xl shadow-2xl',
  button: 'rounded-2xl',
  input: 'rounded-2xl'
} as const;

export const SPACING = {
  section: 'mb-12',
  card: 'p-8',
  button: 'px-6 py-3',
  input: 'px-6 py-4'
} as const;
