import InputAssinatura from '../components/InputAssinatura'

import Sections from '../components/Sections'
import Perguntas from '../components/Perguntas'
import Footer from '../components/Footer'

import styles from './Home.module.css'

function Home() {
	return (
		<div>
			<div className={styles.background}>
				<header className={styles.container_home}>
					<h1>Filmes, séries e muito mais, sem limites.</h1>
					<p>Assistea onde quiser. Cancele quando quiser.</p>
				</header>
				<InputAssinatura />
			</div>
			<Sections />
			<Perguntas />
			<Footer />
		</div>
	)
}

export default Home
