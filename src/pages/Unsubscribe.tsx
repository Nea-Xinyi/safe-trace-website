import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type Status = 'loading' | 'valid' | 'already_unsubscribed' | 'invalid' | 'success' | 'error';

export default function Unsubscribe() {
  const [status, setStatus] = useState<Status>('loading');
  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    if (!token) { setStatus('invalid'); return; }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: SUPABASE_KEY },
    })
      .then(r => r.json())
      .then(data => {
        if (data.valid === false && data.reason === 'already_unsubscribed') setStatus('already_unsubscribed');
        else if (data.valid) setStatus('valid');
        else setStatus('invalid');
      })
      .catch(() => setStatus('error'));
  }, [token]);

  const handleUnsubscribe = async () => {
    setStatus('loading');
    try {
      const { data } = await supabase.functions.invoke('handle-email-unsubscribe', { body: { token } });
      setStatus(data?.success ? 'success' : 'error');
    } catch { setStatus('error'); }
  };

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="max-w-md w-full text-center space-y-6 p-8">
          {status === 'loading' && <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />}
          {status === 'valid' && (
            <>
              <h1 className="font-display text-2xl font-bold text-foreground">Unsubscribe</h1>
              <p className="text-muted-foreground">Are you sure you want to unsubscribe from our emails?</p>
              <Button onClick={handleUnsubscribe} size="lg">Confirm Unsubscribe</Button>
            </>
          )}
          {status === 'success' && (
            <>
              <CheckCircle2 className="h-12 w-12 text-safety mx-auto" />
              <h1 className="font-display text-2xl font-bold text-foreground">Unsubscribed</h1>
              <p className="text-muted-foreground">You have been successfully unsubscribed.</p>
            </>
          )}
          {status === 'already_unsubscribed' && (
            <>
              <CheckCircle2 className="h-12 w-12 text-muted-foreground mx-auto" />
              <h1 className="font-display text-2xl font-bold text-foreground">Already Unsubscribed</h1>
              <p className="text-muted-foreground">You've already been unsubscribed from our emails.</p>
            </>
          )}
          {(status === 'invalid' || status === 'error') && (
            <>
              <XCircle className="h-12 w-12 text-destructive mx-auto" />
              <h1 className="font-display text-2xl font-bold text-foreground">
                {status === 'invalid' ? 'Invalid Link' : 'Something Went Wrong'}
              </h1>
              <p className="text-muted-foreground">
                {status === 'invalid' ? 'This unsubscribe link is invalid or has expired.' : 'Please try again later.'}
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
