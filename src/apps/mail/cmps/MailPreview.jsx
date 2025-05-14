export function MailPreview({ mail }) {
    return (
        <li key={mail.id} className="flex">

            <div className="">
                {/* <input type="checkbox" /> */}
                <span class="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span class="material-symbols-outlined">star</span>
            </div>

            <p>{mail.subject}</p>
            <p>{mail.body}</p>
            <p>{mail.createdAt}</p>

            <div className="hover-btn-actions">
                <span class="material-symbols-outlined">archive</span>
                <span class="material-symbols-outlined">delete</span>
                {mail.isRead ? (
                    <span class="material-symbols-outlined">drafts</span>
                ) : (
                    <span class="material-symbols-outlined">mark_email_unread</span>
                )}
            </div>
        </li >
    )
}
