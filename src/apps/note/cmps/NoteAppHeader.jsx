import { useDispatch } from "react-redux"
import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"

export function NoteAppHeader() {
    const dispatch = useDispatch()


    function onToggleSidebar() {
        dispatch({ type: TOGGLE_SIDENAV })
    }

    return (
        <section className="mail-list">
            <button onClick={onToggleSidebar}>🍔</button>
            NOTE APP HEADER
        </section>
    )
}
