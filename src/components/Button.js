
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

function Button( { text, to, customClass, onClick, btn_responsivo } ) {
    return <Link onClick={onClick} className={`${styles.btn} ${styles[customClass]}`} to={to}>{text}</Link>
}

export default Button