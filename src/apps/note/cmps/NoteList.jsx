import { NotePreview } from "./NotePreview";

export function NoteList({ notes }) {
    return (
        <ul className="note-list">
            {
                notes.map(note => 
                    <li key={note.id}><NotePreview note={note}/></li>
                )
            }
        </ul>
    )
}
