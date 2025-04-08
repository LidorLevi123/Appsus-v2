export function NoteTxt({ info }) {
    return (
        <section className="note-txt note-layout">
            { info.title && <h2 className="title">{info.title}</h2> }
            <pre className="txt">{info.txt}</pre>
        </section>
    )
}