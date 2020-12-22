import React from 'react';

import '../assets/css/style.css'

function Biblioteca() {
  let [direcao, setDirecao] = useState('')
  function trocarVideo() {
  	console.log('oi')
  }

  function escolherVideo() {
  	console.log('oi')
  }


  return (
    <div className="container">
		<div className="interface">
			<div className="logo">
				<img src="assets/images/logomarca.png" className="logomarca"/>
			</div>
			<div className="content">
				<div className="control">
					<button className="rightButton" value="direita" onClick={trocaVideo}> <p> dir </p> </button>
					<button className="leftButton" value="esquerda" onClick={trocaVideo}> <p> esq </p> </button>
					<button className="okButton" value="OK" onClick={escolherVideo}>OK</button>
				</div>
				<button className="library"> 
					<img src="../assets/images/seta.svg" className="setaLibrary"/>  
				</button>
			</div>
			<p className="libraryDesc leftTitle"> Você trocou para esquerda. </p>
		</div>
	</div>
  );
}

export default Biblioteca;
