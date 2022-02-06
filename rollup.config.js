import { config } from 'dotenv';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json'

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
  // ...
  ],
  // ...
}