import styles from './DivPerguntas.module.css'

import InputAssinatura from './InputAssinatura'

import DivPerguntas from './DivPerguntas'

function Perguntas() {
	return (
		<div className={styles.container}>
			<h2>Perguntas frequentes</h2>
			<section>
				<DivPerguntas
					pergunta={'O que é a Netflix?'}
					resposta={
						'dsfasdf sdafasdfahsdfjasdhf shdf safjhasfjksfhaskjhf '
					}
				/>
				<DivPerguntas
					pergunta={'Quanto custa a Netflix?'}
					resposta={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aperiam repellat voluptatibus maxime quia earum inventore optio consequatur quidem. Unde eaque dolore aperiam quaerat error cumque ipsa saepe reprehenderit.'
					}
				/>
				<DivPerguntas
					pergunta={'Onde posso assistir?'}
					resposta={
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia corrupti distinctio odit a molestias tenetur fuga, quaerat aliquam perferendis temporibus voluptates, porro mollitia? Veritatis praesentium ad tempore eos culpa quasi.'
					}
				/>
				<DivPerguntas
					pergunta={'Como  faço para cancelar?'}
					resposta={
						'            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere? Illum sunt eaque, tempore expedita atque mollitia nesciunt amet harum, adipisci, tempora ratione nisi. Quaerat eligendi numquam praesentium error omnis!'
					}
				/>
				<DivPerguntas
					pergunta={'O que eu posso assistir na Netfix?'}
					resposta={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime deleniti commodi soluta cumque error suscipit ipsam non expedita libero ea quod incidunt dolor nihil, voluptate quibusdam ad ullam sint.'
					}
				/>

				<DivPerguntas
					pergunta={'A Netflix é adequada para crianças?'}
					resposta={
						'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam beatae consectetur sequi eum, harum, a debitis iste, velit exercitationem commodi dolorem quas excepturi similique dicta? Velit at reiciendis blanditiis error.'
					}
				/>
			</section>
			<InputAssinatura className={styles.assinatura} />
		</div>
	)
}

export default Perguntas
