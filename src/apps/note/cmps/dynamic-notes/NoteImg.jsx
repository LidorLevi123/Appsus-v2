export function NoteImg({ info }) {
    // console.log(' info:', info)
    return (
        <section className="note-img note-layout">
            <img src={info.url} alt="note img" />
            {info.title && <h2 className="title">{info.title}</h2>}
            {info.txt && <pre className="txt">{info.txt}</pre>}
        </section>
    )
}