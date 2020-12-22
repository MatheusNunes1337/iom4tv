import React, {useState} from 'react';

//images
import logomarca from "../assets/images/logomarca.png"
import seta from "../assets/images/seta.svg"

import '../assets/css/style.css'

function Home() {
  let [direcao, setDirecao] = useState('')
  function trocarCanal(e) {
  	setDirecao(e.currentTarget.value)
  }

  function escolherCanal() {

  }


  return (
    <div className="container">
		<div className="interface">
			<div className="logo">
				<img src={logomarca} className="logomarca"/>
			</div>
			<div className="content">
				<div className="control">
					<button className="rightButton" value="direita" onClick={trocarCanal}> <p> dir </p> </button>
					<button className="leftButton" value="esquerda" onClick={trocarCanal}> <p> esq </p> </button>
					<button className="okButton" value="OK" onClick={escolherCanal}>OK</button>
				</div>
				<button className="library"> 
					<img src={seta} className="setaLibrary"/>  
				</button>
			</div>
			<p className="libraryDesc leftTitle"> Você trocou para {direcao}</p>
		</div>
	</div>
  );
}

export default Home;
