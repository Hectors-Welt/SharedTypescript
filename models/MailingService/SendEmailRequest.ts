export class SendEmailRequest {
    from: string
    to: string
    cc: string
    bcc: string
    replyTo: string
    subject: string
    text: string
    html: string
    attachments: any
}