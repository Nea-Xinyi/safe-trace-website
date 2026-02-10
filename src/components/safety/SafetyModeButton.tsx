import { useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SafetyModePanel } from './SafetyModePanel';

export function SafetyModeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="border-safety text-safety hover:bg-safety hover:text-safety-foreground gap-1.5 transition-calm"
        aria-label="Emergency safety mode - quick privacy actions"
      >
        <ShieldAlert className="h-4 w-4" />
        <span className="hidden sm:inline">Safety</span>
      </Button>

      <SafetyModePanel open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
