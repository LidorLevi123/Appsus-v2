import { useEffect } from "react"
import { useSelector } from "react-redux"
import { MailList } from "../cmps/MailList"
import { loadMails } from "../../../store/actions/mail.action"
import { MailAppHeader } from "../cmps/MailAppHeader"
import { MailSideNav } from "../cmps/MailSideNav"
import { useParams } from "react-router"

export function MailIndex() {

    const mails = useSelector(state => state.mailModule.mails)
    const folder = useParams().folder
    // console.log(folder);

    // const isSidenavExpanded = useSelector(state => state.systemModule.isSidenavExpanded)


    useEffect(() => {
        loadMails()
    }, [])

    // console.log(mails);
    // const sidenavClass = isSidenavExpanded ? 'expanded' : ''


    if (!mails.length) return <div>no mails</div>

    return (
        <section className="mail-index ">
            <MailAppHeader />
            <section className="main-layout">
                <MailSideNav />
                <MailList mails={mails} />
            </section>
        </section>
    )
}

