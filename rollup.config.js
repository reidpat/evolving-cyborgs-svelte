import { config } from 'dotenv';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json'
import preprocess from 'svelte-preprocess';
const production = !process.env.ROLLUP_WATCH;

export default {
    plugins: [
        replace({
            __api: JSON.stringify({
                env: {
                    ...config().parsed // attached the .env config
                }
            }),
            isProduction: production,
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