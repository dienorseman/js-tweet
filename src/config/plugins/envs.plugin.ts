import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
    PORT: env.get('PORT').required().asIntPositive(),
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
}