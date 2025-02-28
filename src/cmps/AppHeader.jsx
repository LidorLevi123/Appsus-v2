import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()

	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	return (
		<header className="app-header full">
			<nav>
				<NavLink to="" className="logo">
					E2E Demo
				</NavLink>
				<NavLink to="home">Home</NavLink>
				<NavLink to="about">About</NavLink>
				<NavLink to="mail">Mail</NavLink>
				<NavLink to="note">Notes</NavLink>
			</nav>
		</header>
	)
}
