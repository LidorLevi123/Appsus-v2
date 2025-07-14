import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"

export function MailSideNav() {
    const isSidenavExpanded = useSelector(state => state.systemModule.isSidenavExpanded)
    const isSidenavForcedOpen = useSelector(state => state.systemModule.isSidenavForcedOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const folderName = useParams().folder
    const sidenavClass = isSidenavExpanded ? 'expanded' : ''

    const folders = [
        { title: 'Inbox', name: 'inbox' },
        { title: 'Starred', name: 'star' },
        { title: 'Sent', name: 'send' },
        { title: 'Drafts', name: 'draft' },
        { title: 'Bin', name: 'delete' },
    ]

    function onChangeFolder(folder) {
        dispatch({ type: TOGGLE_SIDENAV, 'isOpen': true, 'isForced': true })
        navigate(`/mail/${folder}`)
    }

    function toggleExpandSideNav(isOpen) {
        if (isSidenavForcedOpen) return
        if (isSidenavExpanded !== isOpen) {
            dispatch({ type: TOGGLE_SIDENAV, isOpen })
        }
    }

    return (
        <section
            className={`sidenav ${sidenavClass}`}
            onMouseEnter={() => toggleExpandSideNav(true)}
            onMouseLeave={() => toggleExpandSideNav(false)}
        >

            <div className="compose flex" onClick={() => onChangeFolder('compose')}>
                <span className="material-symbols-outlined">
                    edit
                </span>
                {isSidenavExpanded && <h2>Compose</h2>}
            </div>



            <ul className="folders-container flex column">

                {folders.map(folder => {
                    const isActive = folder.name === folderName ? 'active' : ''

                    return (
                        <li className={`folder-box ${isActive} flex`}
                            key={folder.name}
                            onClick={() => onChangeFolder(folder.name)}
                        >
                            <div
                                className={`folder-preview ${isActive} flex`}
                                key={folder.name}>
                                <span className={`material-symbols-outlined ${'filled'}`}>
                                    {folder.name}
                                </span>
                                {isSidenavExpanded && <p>{folder.title}</p>}
                                {folder.name === 'inbox' && isSidenavExpanded && <p className="folder-number">236</p>}
                            </div>
                        </li>
                    )

                })}
            </ul>

        </section >
    )
}
