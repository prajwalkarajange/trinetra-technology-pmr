import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
function createSupabaseClient() {
  const SUPABASE_URL = "https://wtczlxsidhhqojexkppk.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0Y3pseHNpZGhocW9qZXhrcHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NDU1MDMsImV4cCI6MjA5NjIyMTUwM30.X6IZ9FddXI9GQ_KLKLU0hxmcig7hNBWKvdRulbFb8LU";
  const looksLikePlaceholder = SUPABASE_URL?.includes("your-project.supabase.co") || SUPABASE_PUBLISHABLE_KEY?.includes("your-anon-key");
  if (looksLikePlaceholder) {
    const missing = [
      ...[],
      ...[],
      ...looksLikePlaceholder ? ["real Supabase credentials"] : []
    ];
    const message = `Missing or placeholder Supabase environment variable(s): ${missing.join(", ")}. Replace the values in your .env file with your real Supabase project URL and anon key.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
export {
  supabase as s
};
