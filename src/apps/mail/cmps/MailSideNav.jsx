import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"
import { useState } from "react"

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

            <div className="compose-container" onClick={() => onChangeFolder('compose')}>
                <div className="compose flex">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                    {isSidenavExpanded && <h2>Compose</h2>}
                </div>
            </div>



            <div className="folders-container">

                {folders.map(folder => {
                    const isActive = folder.name === folderName ? 'active' : ''
                    return (
                        <div className={`folder-box ${isActive}`}
                            key={folder.name}
                        >

                            <div
                                onClick={() => onChangeFolder(folder.name)}

                                className={`folder-preview ${isActive} `}>

                                <span class={`material-symbols-outlined ${'filled'}`}>
                                    {folder.name}
                                </span>
                                {isSidenavExpanded && <p>{folder.title}</p>}
                                {folder.name === 'inbox' && isSidenavExpanded && <p className="folder-number">236</p>}
                            </div>
                        </div>
                    )

                })}
            </div>

        </section >
    )
}
