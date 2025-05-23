import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_ANON_KEY);

// export const supabase = createClient("https://bxqmxauojqepcnjbhxzw.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4cW14YXVvanFlcGNuamJoeHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjMxNDUsImV4cCI6MjA2MzU5OTE0NX0._DcfxAsJz_CtUmMfJMi2qKQvKdUn3DJyDPZdLVmXrgo");
