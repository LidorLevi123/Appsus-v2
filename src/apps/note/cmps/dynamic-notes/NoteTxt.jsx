export function NoteTxt({ info }) {
    return (
        <article className="note-txt">
            { info.title && <h2 className="title">{info.title}</h2> }
            <pre className="txt">{info.txt}</pre>
        </article>
    )
}