import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kgorvzujhhojkneqxxio.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnb3J2enVqaGhvamtuZXF4eGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MTI1MjgsImV4cCI6MjA0MzM4ODUyOH0.ndbYR0_cWAkrA7i7fpBrvbzzOk6i3Ex79CExagfSb88';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


