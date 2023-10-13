// import { Routes, Route } from 'react-router-dom'
import Button from './Button'
import LogoNetflix from '../img/NetflixLogo.png'

import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.container_logo}>
				<Link to={'/'}>
					<img
						className={styles.logo_netflix}
						src={LogoNetflix}
						alt="Logo Netflix"
					/>
				</Link>
			</div>
			<div className={styles.buttons}>
				<div className={styles.botao}>
					<Button
						customClass="cadastrar"
						to={'/cadastro'}
						text={'Cadastro'}
					/>
				</div>
				<div className={styles.botao}>
					<Button to={'/entrar'} text={'Entrar'}/>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
