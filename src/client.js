import { createClient } from '@supabase/supabase-js'
const URL = 'https://sxqbvwbjejsyewtfhuvy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWJ2d2JqZWpzeWV3dGZodXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNzIxODgsImV4cCI6MjA0NTc0ODE4OH0.dfmMhyOC7g0XfMqqmBUMIgn6RG69BBAmjairBmdg6Tk';
export const supabase = createClient(URL, API_KEY);
