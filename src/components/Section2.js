import styles from './Section2.module.css'

function Section({ texth2, textp, img, alt }) {
	return (
		<section className={styles.container}>
			<div className={styles.container_img}>
				<img src={img} alt={alt} />
			</div>
			<div className={styles.container_div_p}>
				<h2>{texth2}</h2>
				<p>{textp}</p>
			</div>
		</section>
	)
}

export default Section
