import { MailPreview } from "./MailPreview";

export function MailList({ mails }) {
    return (
        <section className="mail-list">
            <ul>
                {mails.map(mail => {
                    // return <li key={mail.id}>{mail.subject}</li>
                    return <MailPreview mail={mail} />
                })}
            </ul>
        </section>
    )
}
