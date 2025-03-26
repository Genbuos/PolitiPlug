import { createClient } from '@supabase/supabase-js'


// do not forget to create 7's database. also we need to think about how we are tracking the vehicles .
// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseAnonKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)