export function MailPreview({ mail }) {
    return (
        <li>

            <div >
                <span className="material-symbols-outlined box-icon">
                    check_box_outline_blank
                </span>
                <span className="material-symbols-outlined star-icon">star</span>
            </div>

            <p className="sender">{mail.SenderName}</p>
            <p className="content">{mail.body}</p>
            {/* <p className="sender">{mail.createdAt}</p> */}
            <p className="date">1.9</p>

            {/* <div className="hover-btn-actions">
                <span className="material-symbols-outlined">archive</span>
                <span className="material-symbols-outlined">delete</span>
                {mail.isRead ? (
                    <span className="material-symbols-outlined">drafts</span>
                ) : (
                    <span className="material-symbols-outlined">mark_email_unread</span>
                )}
            </div> */}
        </li >
    )
}
