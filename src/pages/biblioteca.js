import React, {useState} from 'react';

import api from '../services/api'

import { useHistory } from 'react-router-dom'

//images
import logomarca from "../assets/images/logomarca.png"
import seta from "../assets/images/seta.svg"

import '../assets/css/style.css'

function Biblioteca() {
  let [funcao, setFuncao] = useState('')
  const history = useHistory()

  async function trocarVideo(e) {
  	const funcao = e.currentTarget.value
  	let TVkeyCode

  	setFuncao(funcao)
  	if(funcao === 'esquerda') {
  		TVkeyCode = 37
  	} else {
  		TVkeyCode = 39
  	}
  	const data = {keyCode: TVkeyCode}
  	const response = await api.post('/', data)
  	console.log(response.data)
  }

  async function escolherVideo() {
  	const TVkeyCode = 13
  	const data = {keyCode: TVkeyCode}
  	const response = await api.post('/', data)
  	console.log(response.data)
  }

  async function goBackHome() {
  	const TVkeyCode = 48
  	const data = {keyCode: TVkeyCode}
  	await api.post('/', data)
  	history.push('/')
  }


  return (
    <div className="container">
		<div className="interface">
			<div className="logo">
				<img src={logomarca} className="logomarca"/>
			</div>
			<div className="content">
				<div className="control lib">
					<button className="lib rightButton" value="direita" onClick={trocarVideo}> <p> dir </p> </button>
					<button className="lib leftButton" value="esquerda" onClick={trocarVideo}> <p> esq </p> </button>
					<button className="lib okButton" value="OK" onClick={escolherVideo}>OK</button>
				</div>
				<button className="library" onClick={goBackHome}> 
					<img src={seta} className="setaLibrary"/>  
				</button>
			</div>
			<p className="libraryDesc leftTitle"> Você trocou para {funcao}. </p>
		</div>
	</div>
  );
}

export default Biblioteca;
