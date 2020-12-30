import React, {createContext, useState} from 'react'
import { useHistory } from 'react-router-dom'

const Context = createContext()


function ButtonProvider({ children }) {
	let [index, setIndex] = useState(0)

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
	        document.getElementsByClassName('interact_btn')[index].focus()
	    }
  	}

	return (
		<Context.Provider value={{ index, setMovement, setIndex}} >
			{children}
		</Context.Provider>
	)
}

export { Context, ButtonProvider }