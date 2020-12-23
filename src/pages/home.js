import React, {useState} from 'react';
import api from '../services/api'

import { useHistory } from 'react-router-dom'

//images
import logomarca from "../assets/images/logomarca.png"
import seta from "../assets/images/seta.svg"

import '../assets/css/style.css'

function Home() {
  let [funcao, setFuncao] = useState('')
  const history = useHistory()

  async function trocarCanal(e) {
  	const funcao = e.currentTarget.value
  	let TVkeyCode

  	setFuncao(funcao)
  	if(funcao === 'esquerda') {
  		TVkeyCode = 40
  	} else {
  		TVkeyCode = 38
  	}
  	const data = {keyCode: TVkeyCode}
  	//const response = await api.post('/', data)
  	//console.log(response.data)
  }

  async function escolherCanal() {
  	const TVkeyCode = 13
  	const data = {keyCode: TVkeyCode}
  	//const response = await api.post('/', data)
  	//console.log(response.data)

  }

  async function goToLib() {
  	const TVkeyCode = 48
  	const data = {keyCode: TVkeyCode}
  	//await api.post('/', data)
  	history.push('/biblioteca')
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
				<button className="library" onClick={goToLib}> 
					<img src={seta} className="setaLibrary"/>  
				</button>
			</div>
			<p className="libraryDesc leftTitle"> Você trocou para {funcao}</p>
		</div>
	</div>
  );
}

export default Home;
