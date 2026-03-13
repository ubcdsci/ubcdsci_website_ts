const API_BASE = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/api/membership`
  : '/api/membership';

export const createCheckoutSession = async (): Promise<{ url: string; sessionId: string }> => {
  const res = await fetch(`${API_BASE}/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to create checkout session');
  return res.json();
};

export const verifySession = async (sessionId: string): Promise<{ status: string; customerEmail: string }> => {
  const res = await fetch(`${API_BASE}/verify-session?session_id=${encodeURIComponent(sessionId)}`);
  if (!res.ok) throw new Error('Failed to verify session');
  return res.json();
};
