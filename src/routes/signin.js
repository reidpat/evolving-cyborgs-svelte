import { serialize } from 'cookie';
import { supabase } from '../supabaseClient';

export async function post(event) {
    let session = await event.request.json();

    return {
        status: 200,
        body: 'success',
        headers: {
            'Set-Cookie': serialize('session', JSON.stringify(session), {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // one week
            })
        }
    }
}

export async function get(event){
    let access_token = await event.request.headers.get("token");
    const { user, error } = await supabase.auth.setAuth(access_token);
    if(error){
        return {
            status: error.status,
            message: error.message
        }
    }
    return {
        status: 200,
        message: "all good!"
    }
}