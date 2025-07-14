import { useDispatch, useSelector } from "react-redux"
import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"
import { store } from "../../../store/store"
import gmailLogo2 from '/imgs/gmailLogo2.png'
import { useRef, useState } from "react"
import { sideNavSvgs } from "./MailSvg"

export function MailAppHeader() {
    const [isInputExist, setisInputExist] = useState(false)
    const isForcedOpen = useSelector(state => state.systemModule.isSidenavForcedOpen)
    const inputRef = useRef().current
    const dispatch = useDispatch()

    function onToggleSidebar() {
        dispatch({ type: TOGGLE_SIDENAV, 'isForced': !isForcedOpen })
    }

    function onCheckInput(event) {
        const value = event.target.value
        setisInputExist(!!value)
    }

    function onFormReset() {
        setTimeout(() => {
            setisInputExist(false)
        }, 0)
    }

    return (
        <section className="mail-header-container">


            <div className="logo-container flex">
                <button title="Main-menu" onClick={onToggleSidebar}>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <div title="Gmail" className="logo">
                    <img src={gmailLogo2} alt="" />
                </div>
            </div>

            <form className="search-container" action="" onReset={onFormReset}>
                <button className="search-btn">
                    <span title="Search" class="material-symbols-outlined icon">
                        search
                    </span>
                </button>

                <input type="text" placeholder="Search mail" onInput={onCheckInput} ref={inputRef} />
                <div className="flex">
                    {isInputExist && <button type="reset" className="reset-btn">
                        <span class="material-symbols-outlined icon">
                            close
                        </span>
                    </button>}

                    <button>

                        <span class="material-symbols-outlined icon">
                            tune
                        </span>
                    </button>
                </div>
            </form>
        </section>
    )
}
