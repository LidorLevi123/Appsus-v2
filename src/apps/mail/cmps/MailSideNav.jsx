import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"
import { Link } from "react-router-dom"

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
                <span class="material-symbols-outlined">
                    edit
                </span>
                {isSidenavExpanded && <h2>Compose</h2>}
            </div>



            <ul className="folders-container">

                {folders.map(folder => {
                    const isActive = folder.name === folderName ? 'active' : ''
                    return (
                        <li className={`folder-box ${isActive}`}
                            key={folder.name}
                        >

                            {/* <div> */}
                            <Link
                                onClick={() => onChangeFolder(folder.name)}
                                className={`folder-preview ${isActive} `}>

                                <span class={`material-symbols-outlined ${'filled'}`}>
                                    {folder.name}
                                </span>
                                {isSidenavExpanded && <p>{folder.title}</p>}
                                {folder.name === 'inbox' && isSidenavExpanded && <p className="folder-number">236</p>}
                            </Link>
                            {/* </div> */}
                        </li>
                    )

                })}
            </ul>

        </section >
    )
}
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router"
// import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"

// export function MailSideNav() {
//     const isSidenavExpanded = useSelector(state => state.systemModule.isSidenavExpanded)
//     const isSidenavForcedOpen = useSelector(state => state.systemModule.isSidenavForcedOpen)
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const folderName = useParams().folder
//     const sidenavClass = isSidenavExpanded ? 'expanded' : ''

//     const folders = [
//         { title: 'Inbox', name: 'inbox' },
//         { title: 'Starred', name: 'star' },
//         { title: 'Sent', name: 'send' },
//         { title: 'Drafts', name: 'draft' },
//         { title: 'Bin', name: 'delete' },
//     ]

//     function onChangeFolder(folder) {
//         // Force open only if not already forced or if explicitly clicking compose/folder
//         // This ensures that if it's forced open, it stays open on navigation
//         if (!isSidenavForcedOpen || folder === 'compose') { // Always allow compose to force open
//             dispatch({ type: TOGGLE_SIDENAV, 'isOpen': true, 'isForced': true })
//         }
//         navigate(`/mail/${folder}`)
//     }

//     function toggleExpandSideNav(isOpen) {
//         if (isSidenavForcedOpen) return
//         if (isSidenavExpanded !== isOpen) {
//             dispatch({ type: TOGGLE_SIDENAV, isOpen })
//         }
//     }

//     return (
//         <section
//             className={`sidenav ${sidenavClass}`}
//             onMouseEnter={() => toggleExpandSideNav(true)}
//             onMouseLeave={() => toggleExpandSideNav(false)}
//         >
//             <div className="compose flex" onClick={() => onChangeFolder('compose')}>
//                 <span className="material-symbols-outlined">
//                     edit
//                 </span>
//                 {/* Text is always present, but its visibility is controlled by CSS max-width and opacity */}
//                 <h2>Compose</h2>
//             </div>

//             <div className="folders-container">
//                 {folders.map(folder => {
//                     const isActive = folder.name === folderName ? 'active' : ''
//                     return (
//                         <div className={`folder-box ${isActive}`} key={folder.name}>
//                             <div
//                                 onClick={() => onChangeFolder(folder.name)}
//                                 className={`folder-preview ${isActive}`}
//                             >
//                                 <span className={`material-symbols-outlined ${folder.name === folderName ? 'filled' : ''}`}>
//                                     {folder.name}
//                                 </span>
//                                 {/* New wrapper for folder title and number to control their visibility */}
//                                 <div className="folder-text-wrapper">
//                                     <p>{folder.title}</p>
//                                     {folder.name === 'inbox' && <p className="folder-number">236</p>}
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </section >
//     )
// }