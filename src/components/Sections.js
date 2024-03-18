import Section1 from './Section1'
import Section2 from './Section2'

function Sections() {
	return (
		<div>
			<Section1
				texth2={'Aproveite na TV'}
				textp={
					'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.'
				}
				img={'https://via.placeholder.com/1000x1000?text=Representação de imagem'}
			/>
			<Section2
				texth2={'Assista onde quiser'}
				textp={
					'Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.'
				}
				img={'https://via.placeholder.com/560x420?text=Representação de imagem'}
			/>
			<Section1
				texth2={'Crie perfis para crianças'}
				textp={'Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.'}
				img={'https://via.placeholder.com/560x420?text=Representação de imagem'}
			/>
			<Section2
				texth2={'Baixe séries para assistir offline'}
				textp={'Disponíveis somente em planos sem anúncios.'}
				img={'https://via.placeholder.com/560x420?text=Representação de imagem'}
			/>
		</div>
	)
}

export default Sections
