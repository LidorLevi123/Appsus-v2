import { useEffect } from "react"
import { useSelector } from "react-redux"
import { MailList } from "../cmps/MailList"
import { loadMails } from "../../../store/actions/mail.action"
import { MailAppHeader } from "../cmps/MailAppHeader"

export function MailIndex() {

    const mails = useSelector(state => state.mailModule.mails)
    const isSidenavExpanded = useSelector(state => state.systemModule.isSidenavExpanded)


    useEffect(() => {
        loadMails()
    }, [])

    // console.log(mails);
    const sidenavClass = isSidenavExpanded ? 'expanded' : ''


    if (!mails.length) return <div>no mails</div>

    return (
        <>
            <MailAppHeader />
            <section className="mail-index main-layout">
                <section className={`sidenav ${sidenavClass}`}>MAIL SIDENAV</section>
                <MailList mails={mails} />
            </section>
        </>
    )
}

