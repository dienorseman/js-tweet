import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'

export interface SendMailOptions {
    to: string,
    subject: string,
    htmlBody: string,
    // attachemetns
}

// todo attachemtns

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET
        }
    });

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        try {
            
        } catch (err) {

        }
    }
}
