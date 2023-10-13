import styles from './Cadastro.module.css'

import Button from '../components/Button'

import { useUser } from '../components/UserContext'
import { Link } from 'react-router-dom'

function Cadastro() {
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
					<h1>Cadastrar-se</h1>
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
					<div className={styles.input}>
						<input type="password" placeholder="Confirme a senha" />
					</div>
					<div className={styles.btn}>
						<Button
							text={'Cadastrar'}
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
				<div className={styles.entrar}>
					<p>
						Já tem uma conta? <Link to="/entrar">Entrar</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cadastro
