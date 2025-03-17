import { useEffect } from "react"
import { useSelector } from "react-redux"
import { MailList } from "../cmps/MailList"
import { loadMails } from "../../../store/actions/mail.action"

export function MailIndex() {

    const mails = useSelector(state => state.mailModule.mails)

    useEffect(() => {
        loadMails()
    }, [])

    console.log(mails);

    return (
        <section className="mail-index">
            <MailList mails={mails} />
        </section>
    )
}

