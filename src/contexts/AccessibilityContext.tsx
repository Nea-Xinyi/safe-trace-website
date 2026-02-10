import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('text-base');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');
    html.classList.add(fontSize);
  }, [fontSize]);

  useEffect(() => {
    const html = document.documentElement;
    if (highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }
  }, [highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
