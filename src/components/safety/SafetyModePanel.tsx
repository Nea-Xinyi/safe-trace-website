import { useState } from 'react';
import { 
  ShieldAlert, 
  Trash2, 
  Eye, 
  MapPin, 
  Key,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useToast } from '@/hooks/use-toast';

interface SafetyModePanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SafetyModePanel({ open, onOpenChange }: SafetyModePanelProps) {
  const { disguiseMode, setDisguiseMode } = useAccessibility();
  const { toast } = useToast();
  const [actionStates, setActionStates] = useState<Record<string, 'idle' | 'done'>>({});

  const clearLocalData = () => {
    try {
      // Clear localStorage
      localStorage.clear();
      // Clear sessionStorage
      sessionStorage.clear();
      // Clear cookies (as much as possible from JS)
      document.cookie.split(';').forEach((cookie) => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name.trim() + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      });
      
      setActionStates(prev => ({ ...prev, clearData: 'done' }));
      toast({
        title: 'Data cleared',
        description: 'Local browser data has been removed.',
      });
    } catch (error) {
      toast({
        title: 'Could not clear all data',
        description: 'Some data may remain. Consider using private browsing.',
        variant: 'destructive',
      });
    }
  };

  const toggleDisguiseMode = () => {
    setDisguiseMode(!disguiseMode);
    setActionStates(prev => ({ ...prev, disguise: disguiseMode ? 'idle' : 'done' }));
    toast({
      title: disguiseMode ? 'Normal view restored' : 'Disguise mode activated',
      description: disguiseMode 
        ? 'The page now looks normal again.' 
        : 'The page now looks like a simple notes app.',
    });
  };

  const actions = [
    {
      id: 'clearData',
      icon: Trash2,
      title: 'Clear Local Data',
      description: 'Remove browsing history, cookies, and stored data from this site',
      action: clearLocalData,
      buttonText: 'Clear Now',
    },
    {
      id: 'disguise',
      icon: Eye,
      title: 'Disguise Mode',
      description: 'Make this page look like a calculator or notes app',
      action: toggleDisguiseMode,
      buttonText: disguiseMode ? 'Turn Off' : 'Activate',
      isToggle: true,
      isActive: disguiseMode,
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location Sharing Guide',
      description: 'Learn how to disable location tracking on your device',
      action: () => {
        window.open('https://support.google.com/accounts/answer/3467281', '_blank', 'noopener');
      },
      buttonText: 'View Guide',
      isExternal: true,
    },
    {
      id: 'access',
      icon: Key,
      title: 'Third-Party Access Guide',
      description: 'Learn how to revoke app permissions and connected accounts',
      action: () => {
        window.open('https://support.google.com/accounts/answer/3466521', '_blank', 'noopener');
      },
      buttonText: 'View Guide',
      isExternal: true,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <ShieldAlert className="h-5 w-5 text-safety" />
            Emergency Safety Mode
          </DialogTitle>
          <DialogDescription className="text-safe">
            Quick actions to protect your privacy. These work instantly and don't require an account.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {actions.map((action) => (
            <div
              key={action.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/30 transition-calm"
            >
              <div className="mt-0.5 p-2 rounded-full bg-safety/10">
                <action.icon className="h-5 w-5 text-safety" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground">{action.title}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {action.description}
                </p>
              </div>
              <Button
                onClick={action.action}
                variant={action.isActive ? 'default' : 'outline'}
                size="sm"
                className={`shrink-0 ${action.isActive ? 'bg-safety hover:bg-safety/90' : ''}`}
              >
                {actionStates[action.id] === 'done' && !action.isToggle ? (
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                ) : null}
                {action.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">
                <strong>Remember:</strong> If someone has physical access to your device, they may still be able to see your activity. Consider using private/incognito browsing or a trusted device.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
