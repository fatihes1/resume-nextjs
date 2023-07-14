import {NextApiRequest, NextApiResponse} from 'next';
import {createClient} from "@supabase/supabase-js";
export default async function handler(req: NextApiRequest, res:NextApiResponse ) {
    if (req.method === 'GET') {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

        try {
            const supabase = createClient(supabaseUrl, supabaseKey)
            const { data: home, error } = await supabase
                .from('home')
                .select('*')

            console.log(home);
            res.status(200).json({data: home, error: error});
        } catch (err) {
            res.status(403).json({message: 'Something went wrong.'});
        }

    }
}