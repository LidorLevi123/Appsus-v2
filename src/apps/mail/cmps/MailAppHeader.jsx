import { TOGGLE_SIDENAV } from "../../../store/reducers/system.reducer"
import { store } from "../../../store/store"
import gmailLogo from '../../../../public/img/gmailLogo.svg'
import { useRef, useState } from "react"

export function MailAppHeader() {
    const [isinputExist, setIsinputExist] = useState(false)
    const inputRef = useRef().current

    function onToggleSidebar() {
        store.dispatch({ type: TOGGLE_SIDENAV })
    }

    function onCheckInput(event) {
        console.log(event.target.value);
        const value = event.target.value
        setIsinputExist(!!value)
    }

    function onFormReset() {
        setTimeout(() => {
            setIsinputExist(false)
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
                    <img src={gmailLogo} alt="" />
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
                    {isinputExist && <button type="reset" className="reset-btn">
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
