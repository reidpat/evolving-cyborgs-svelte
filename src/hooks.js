import {parse} from 'cookie'

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
    const cookies = parse(event.request.headers.get("cookie") || '');
    return cookies;
}