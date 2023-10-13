import { FaGithub } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
	return (
		<footer className={styles.container}>
			<p>
				Created by <strong>Jonathan Kirch</strong> <br />
				Follow me PLS :) <br />
				<a
					href="https://github.com/jonathankirch"
					target="_blank"
					rel="noreferrer"
				>
						<FaGithub color="white" fontSize="30px" />
				</a>
			</p>
		</footer>
	)
}

export default Footer
