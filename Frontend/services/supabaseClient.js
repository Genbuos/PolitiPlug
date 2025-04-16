import { createClient } from '@supabase/supabase-js'
import {execSync} from 'child_process'
// need to put the url and key in keychain
const supabaseUrl = execSync('security find-generic-password -a SUPABASE_URL -s supabase -w', { encoding: 'utf8' }).trim()
const supabaseAnonKey = execSync('security find-generic-password -a SUPABASE_ANON_KEY -s supabase -w', { encoding: 'utf8' }).trim()

export const supabase = createClient(supabaseUrl, supabaseAnonKey)