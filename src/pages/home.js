import React, {useState, useEffect, useContext} from 'react';
import api from '../services/api'

import { useHistory } from 'react-router-dom'

import { BsChevronDoubleRight, BsChevronDoubleLeft} from "react-icons/bs"

//images
import logomarca from "../assets/images/logomarca.png"
import seta from "../assets/images/seta.svg"

//context 
import { Context } from '../contexts/buttonContext'
import { RequestContext } from '../contexts/requestContext'

import '../assets/css/style.css'

function Home() {
  const { index, setMovement, setIndex } = useContext(Context)
  const { funcao, makeRequest } = useContext(RequestContext)
  let history = useHistory()

  async function goToLib(e) {
    const TVkeyCode = e.currentTarget.id
    const data = {keyCode: TVkeyCode}
    //await api.post('/', data)
    history.push('/biblioteca')
  }
  
  useEffect(() => {
      let btn;
      btn = document.getElementsByClassName("interact_btn")[index]
      btn.focus();
  }, [index]);

  useEffect(() => {
      setIndex(0)
  }, []);



  return (
    <div className="container" onKeyPress={setMovement} tabIndex={-1}>
		<div className="interface">
			<div className="logo">
				<img src={logomarca} className="logomarca"/>
			</div>
			<div className="content">
				<div className="control">
					<button id="40" className="leftButton interact_btn" value="esquerda" onClick={makeRequest}><p><BsChevronDoubleLeft/></p></button>
					<button id="13" className="okButton interact_btn" value="OK" onClick={makeRequest}>OK</button>
          			<button id="38" className="rightButton interact_btn" value="direita" onClick={makeRequest}><p><BsChevronDoubleRight /></p></button>
				</div>
				<button id="48" className="library interact_btn" onClick={goToLib}> 
					<img src={seta} className="setaLibrary"/>  
				</button>
			</div>
			<p className="libraryDesc leftTitle"> Você trocou para {funcao}</p>
		</div>
	</div>
  );
}

export default Home;
