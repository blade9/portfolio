export const colors = {
  // Dark gray base colors
  dark: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#1a1d20',
    950: '#0d1117',
  },
  
  // Purple luminescent accents
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  
  // Cyberpunk accent colors
  cyber: {
    neon: '#00ffff', // Cyan neon
    glow: '#ff00ff', // Magenta glow
    electric: '#00ff00', // Electric green
    warning: '#ff6b35', // Warning orange
  },
  
  // Background gradients
  gradients: {
    dark: 'linear-gradient(135deg, #0d1117 0%, #1a1d20 50%, #212529 100%)',
    purple: 'linear-gradient(135deg, #3b0764 0%, #581c87 50%, #7c3aed 100%)',
    cyber: 'linear-gradient(135deg, #0d1117 0%, #3b0764 50%, #7c3aed 100%)',
  }
} as const;

export type ColorScheme = typeof colors; 