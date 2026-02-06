import { useState } from 'react';
import { Type, Contrast } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const fontSizes = [
  { value: 'text-sm', label: 'Small' },
  { value: 'text-base', label: 'Normal' },
  { value: 'text-lg', label: 'Large' },
  { value: 'text-xl', label: 'Extra Large' },
] as const;

export function AccessibilityControls() {
  const [open, setOpen] = useState(false);
  const { fontSize, setFontSize, highContrast, setHighContrast } = useAccessibility();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0"
          aria-label="Accessibility settings"
        >
          <Type className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Text Size</h4>
            <div className="flex gap-1">
              {fontSizes.map((size) => (
                <Button
                  key={size.value}
                  variant={fontSize === size.value ? 'default' : 'outline'}
                  size="sm"
                  className="flex-1 text-xs px-2"
                  onClick={() => setFontSize(size.value)}
                >
                  {size.label.charAt(0)}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">High Contrast</h4>
            <Button
              variant={highContrast ? 'default' : 'outline'}
              size="sm"
              className="w-full gap-2"
              onClick={() => setHighContrast(!highContrast)}
            >
              <Contrast className="h-4 w-4" />
              {highContrast ? 'On' : 'Off'}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
