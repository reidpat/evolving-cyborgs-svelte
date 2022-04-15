import { config } from 'dotenv';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json'
import preprocess from 'svelte-preprocess';

export default {
    plugins: [
        replace({
            __api: JSON.stringify({
                env: {
                    isProd: production,
                    ...config().parsed // attached the .env config
                }
            }),
            delimiters: ['', '']
        }),
        json(),
        svelte({
            /* ... */
            preprocess: preprocess()
        }),
        // ...
        // ...
    ],

}