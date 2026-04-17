import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bqqsyhckhypqpyfwowua.supabase.co';
const supabaseKey = 'sb_publishable_O9r27mW0ilvxzs0pl2QlDg_QQNFcTd3';

export const supabase = createClient(supabaseUrl, supabaseKey);
