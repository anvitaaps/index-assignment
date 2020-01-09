export class Mail
{
    id: string;
    from: {
        name: string,
        avatar: string,
        email: string
    };
    to: {
        name: string,
        email: string
    }[];
    subject: string;
    message: string;
    time: string;
    read: boolean;
    selected: boolean;

    /**
     * Constructor
     *
     * @param mail
     */
    constructor(mail)
    {
        this.id = mail.id;
        this.from = mail.from;
        this.to = mail.to;
        this.subject = mail.subject;
        this.message = mail.message;
        this.time = mail.time;
        this.read = mail.read;
        this.selected = mail.selected;
    }
}
