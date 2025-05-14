import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"
import { store } from "../../../store/store"

export function NoteAppHeader() {

    function onToggleSidebar() {
        store.dispatch({ type: TOGGLE_SIDENAV })
    }

    return (
        <section className="mail-list">
            <button onClick={onToggleSidebar}>🍔</button>
            NOTE APP HEADER
        </section>
    )
}
