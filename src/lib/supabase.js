import { createClient } from '@supabase/supabase-js';

let supabase;

export function getSupabaseClient() {
  const projectUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
  const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!projectUrl || !publishableKey) {
    throw new Error(
      'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your .env file, then restart the dev server.',
    );
  }

  if (!supabase) {
    supabase = createClient(projectUrl, publishableKey);
  }

  return supabase;
}
