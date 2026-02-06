import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  disguiseMode: boolean;
  setDisguiseMode: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>('text-base');
  const [highContrast, setHighContrast] = useState(false);
  const [disguiseMode, setDisguiseMode] = useState(false);

  useEffect(() => {
    // Apply font size class to html element
    const html = document.documentElement;
    html.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');
    html.classList.add(fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast class
    const html = document.documentElement;
    if (highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply disguise mode class
    const body = document.body;
    if (disguiseMode) {
      body.classList.add('disguise-mode');
    } else {
      body.classList.remove('disguise-mode');
    }
  }, [disguiseMode]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        disguiseMode,
        setDisguiseMode,
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
