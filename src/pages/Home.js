import React, { Component } from 'react';

import Layout from './components/Layout';


import Container from './components/Container';
//import Input from './components/Input';
import Button from './components/Button';
//import Title from './components/Title';
import Img from './components/Img';
import BannerLarge from '../images/BannerHomeLarge.png';
import Banner1 from '../images/BannerHomeMedium1.png';
import Banner2 from '../images/BannerHomeMedium2.png';
import Banner3 from '../images/BannerHomeMedium3.png';
import CarExample from '../images/1299198-snow_004.png';


class Home extends Component {
    render(){
		return(
			<Layout isMiniFilter={true} history={this.props.history}>
				
				<Img mode={1} src={BannerLarge} addClassName="border-radius--xs"/>
				
				<div className="grid grid-gap--l grid-template-columns--3fr margin-bottom--l margin-top--l">
					<Container>
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><h2>Frota para todos os gostos</h2></div>
							<div><Img mode={1} src={Banner1}/></div>
							<div><label>Do mais econômico ao mais arrojado, você vai encontrar um carro 
										que é a sua cara!</label></div>
							<Button text={'Confira'} addClassName="gradient-color--black" />
						</div>
					</Container>
					<Container>
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><h2>Planeje sua viagem</h2></div>
							<div><Img mode={1} src={Banner2}/></div>
							<div><label>Confira aqui os melhores roteiros de viagem para conhecer
										com o carro alugado!</label></div>
							<Button text={'Conheça'} addClassName="gradient-color--black" />
						</div>
					</Container>
					<Container>
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><h2>Nossas unidades</h2></div>
							<div><Img mode={1} src={Banner3}/></div>
							<div><label>Estamos presentes nas principais capitais e regiões
										metropolitanas do Brasil.</label></div>
							<Button text={'Confira'} addClassName="gradient-color--black" />
						</div>
					</Container>
				</div>
				<Container>
					<h1>Veículos em destaque</h1>
					<div className="grid grid-gap--2xl grid-template-columns--4fr">
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><Img mode={1} src={CarExample}/></div>
							<div>Marca-modelo-ano</div>
							<Button text={'Confira'} addClassName="gradient-color--black" />
						</div>
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><Img mode={1} src={CarExample}/></div>
							<div>Marca-modelo-ano</div>
							<Button text={'Confira'} addClassName="gradient-color--black" />
						</div>
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><Img mode={1} src={CarExample}/></div>
							<div>Marca-modelo-ano</div>
							<Button text={'Confira'} addClassName="gradient-color--black" />
						</div>
						<div className="grid grid-gap--m grid-template-lines--3fr">
							<div><Img mode={1} src={CarExample}/></div>
							<div>Marca-modelo-ano</div>
							<Button text={'Confira'} addClassName="gradient-color--black" />
						</div>
					</div>
				</Container>
			</Layout>
		)
  	}
}

export default Home;