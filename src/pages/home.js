import React, {useState, useEffect} from 'react';
import api from '../services/api'

import { useHistory } from 'react-router-dom'

//images
import logomarca from "../assets/images/logomarca.png"
import seta from "../assets/images/seta.svg"

import '../assets/css/style.css'

function Home() {
  let [funcao, setFuncao] = useState('')
  let [index, setIndex] = useState(0)

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


  function setMovement(e) {
    const movement = e.currentTarget.value

    if(movement === 'LEFT') {
       if(index === 0) {
          setIndex(document.getElementsByClassName("interact_btn").length - 1)
       } else {
         setIndex(index - 1)
       }
    } else if(movement === 'RIGHT') {
        if(index === document.getElementsByClassName("interact_btn").length - 1) {
          setIndex(0)
       } else {
         setIndex(index + 1)
       }
    } else {
        document.getElementsByClassName('interact_btn')[index].click()
    }
  }

  useEffect(() => {
      let btn;
      btn = document.getElementsByClassName("interact_btn")[index]
      btn.focus();
  }, [index]);





  return (
    <div className="container">
		<div className="interface">
			<div className="logo">
				<img src={logomarca} className="logomarca"/>
			</div>
			<div className="content">
				<div className="control">
					<button className="leftButton interact_btn" value="esquerda" onClick={trocarCanal}> <p> esq </p> </button>
					<button className="okButton interact_btn" value="OK" onClick={escolherCanal}>OK</button>
          <button className="rightButton interact_btn" value="direita" onClick={trocarCanal}> <p> dir </p> </button>
				</div>
				<button className="library interact_btn" onClick={goToLib}> 
					<img src={seta} className="setaLibrary"/>  
				</button>
			</div>
			<p className="libraryDesc leftTitle"> Você trocou para {funcao}</p>
		</div>
    <div className="buttons_wrapper">
        <button value="LEFT" onClick={setMovement}>Left</button>
        <button value="TOP" onClick={setMovement}>Top</button>
        <button value="RIGHT" onClick={setMovement}>Right</button>
     </div>
	</div>
  );
}

export default Home;
