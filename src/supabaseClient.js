import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gcboldyshgunelezrqei.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDEwMjQyOSwiZXhwIjoxOTU5Njc4NDI5fQ.cUdBXiBRrJvVj212eJMAqNZ-KcDOvQe_xtdaDC3E5zg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)