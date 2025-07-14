export function MailPreview({ mail }) {
    return (
        <li className="flex">

            <div >
                {/* <input type="checkbox" /> */}
                <span className="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span className="material-symbols-outlined">star</span>
            </div>

            <p>{mail.subject}</p>
            <p>{mail.body}</p>
            <p>{mail.createdAt}</p>

            <div className="hover-btn-actions">
                <span className="material-symbols-outlined">archive</span>
                <span className="material-symbols-outlined">delete</span>
                {mail.isRead ? (
                    <span className="material-symbols-outlined">drafts</span>
                ) : (
                    <span className="material-symbols-outlined">mark_email_unread</span>
                )}
            </div>
        </li >
    )
}
