
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://osrrjafwviymrswezaxq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zcnJqYWZ3dml5bXJzd2V6YXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDIxOTMsImV4cCI6MjA2NTU3ODE5M30.OnXYZ1A58Q889ztFG9fhV4VF2FJ-LgPB-hj6T0nbgqs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
