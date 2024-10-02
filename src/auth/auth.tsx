// auth.ts
import { supabase } from '../supabaseClient';

export const signIn = async (email: string, password: string) => {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw new Error(error.message);
  return user;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) throw new Error(error.message);
};
