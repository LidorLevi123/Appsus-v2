import { MailPreview } from "./MailPreview";

export function MailList(mails) {
    return (
        <section className="mail-list">
            mail list
            <MailPreview mails={mails} />
        </section>
    )
}
