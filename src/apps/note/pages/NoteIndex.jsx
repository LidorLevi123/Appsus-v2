import { useEffect, useState } from "react"
import { loadNotes } from "../../../store/actions/note.actions"
import { useSelector } from "react-redux"
import { NoteList } from "../cmps/NoteList"
import { NoteAppHeader } from "../cmps/NoteAppHeader"

export function NoteIndex() {
    const notes = useSelector(state => state.noteModule.notes)
    const isSidenavExpanded = useSelector(state => state.systemModule.isSidenavExpanded)

    useEffect(() => {
        loadNotes()
    }, [])

    const sidenavClass = isSidenavExpanded ? 'expanded' : ''

    return (
        <>
            <NoteAppHeader />
            <section className="note-index main-layout">
                {/* <NoteSidenav /> */}
                <div className={`sidenav ${sidenavClass}`}>sidenav</div>
                <NoteList notes={notes} />
            </section>
        </>
    )
}
