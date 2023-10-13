import styles from './Entrar.module.css'

import Button from '../components/Button'

import { useUser } from '../components/UserContext'

import { Link } from 'react-router-dom'

// import { userEmail } from '../components/InputAssinatura'

function Entrar() {
	const { userEmail, setUserEmail } = useUser()
	// const { userEmail } = useUser();

	function indisponivel() {
		alert('[ERRO] Esta ação não esta disponivel.')
		console.log(userEmail)
	}

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<form>
					<h1>Entrar</h1>
					<div className={styles.input}>
						<input
							type="email"
							placeholder="Email"
							defaultValue={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</div>
					<div className={styles.input}>
						<input type="password" placeholder="Senha" />
					</div>
					<div className={styles.btn}>
						<Button
							text={'Entrar'}
							customClass="login"
							onClick={indisponivel}
						/>
					</div>
					<div className={styles.check}>
						<label>
							<input type="checkbox" name="checkbox" />
							Lembre-se de mim
						</label>
					</div>
				</form>
				<div className={styles.cadastrar}>
					<p>
						Conta nova? <Link to="/cadastro">Cadastre-se</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Entrar
