import { useEffect } from "react"
import { loadNotes } from "../../../store/actions/note.actions"
import { useSelector } from "react-redux"
import { NoteList } from "../cmps/NoteList"

export function NoteIndex() {
    const notes = useSelector(state => state.noteModule.notes)

    useEffect(() => {
        loadNotes()
    }, [])

    return (
        <section className="note-index">
            <NoteList notes={notes} />
        </section>
    )
}
