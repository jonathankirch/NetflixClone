import Button from "./Button";

import styles from "./InputAssinatura.module.css";

import { useUser } from "./UserContext";
import { useNavigate } from 'react-router-dom';

function InputAssinatura() {
	const { userEmail, setUserEmail } = useUser();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/cadastro');
	};

	return (
		<form className={styles.container_form} onSubmit={handleSubmit}>
			<div>
				<h3>
					Quer assistir? Informe seu email para criar ou reiniciar sua
					assinatura.
				</h3>
			</div>
			<div>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					value={userEmail}
					onChange={(e) => setUserEmail(e.target.value)}
				/>
				<Button to={"/cadastro"} text={"Vamos lá >"} />
			</div>
		</form>
	);
}

export default InputAssinatura;