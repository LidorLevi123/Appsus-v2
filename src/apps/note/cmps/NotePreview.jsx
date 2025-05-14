import { NoteImg } from "./dynamic-notes/NoteImg";
// import { NoteTodos } from "./dynamic-notes/NoteTodos";
import { NoteTxt } from "./dynamic-notes/NoteTxt";

export function NotePreview({ note }) {
    return (
        <article className="note-preview">
            <DynamicCmp note={note} />
        </article>
    )
}

function DynamicCmp({ note }) {
    const cmpMap = {
        'NoteTxt': <NoteTxt {...note} />,
        'NoteImg': <NoteImg {...note} />,
        // 'NoteTodos': <NoteTodos {...note} />
    }

    return cmpMap[note.type]
}