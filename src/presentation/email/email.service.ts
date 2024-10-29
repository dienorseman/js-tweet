import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'

export interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];
}

// todo attachemtns
interface Attachment {
    filename: string;
    path: string;
}

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET
        }
    });

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options
        try {
            const sentInfo = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments
            })
            console.log(sentInfo)
            return true
        } catch (err) {
            return false
        }

    }

    sendEmaiilWithFileSystemLogs(to: string | string[]) {
        const subject = 'Server logs'
        const htmlBody = `
        <h3>System Logs </h3>    
        <p>These are our system logs </p>
        `
        const attachments:Attachment[] = [
            {filename: 'logs-low.low', path: './logs/logs-low.log'}
        ]

        this.sendEmail({
            to, subject, attachments, htmlBody
        })
    }
}
