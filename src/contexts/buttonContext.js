import React, {createContext, useState} from 'react'
import { useHistory } from 'react-router-dom'

const Context = createContext()


function ButtonProvider({ children }) {
	let [index, setIndex] = useState(0)

  	function handleMovement(movement) {
	   
	    if(movement == 1) {
	       if(index === 0) {
	          setIndex(document.getElementsByClassName("interact_btn").length - 1)
	       } else {
	         setIndex(index - 1)
	       }
	    } else if(movement == 2) {
	        if(index === document.getElementsByClassName("interact_btn").length - 1) {
	          setIndex(0)
	       } else {
	         setIndex(index + 1)
	       }
	    } else if (movement == 3) {
	        document.getElementsByClassName('interact_btn')[index].click()
	        document.getElementsByClassName('interact_btn')[index].focus()
	    }
  	}

	return (
		<Context.Provider value={{ index, handleMovement, setIndex}} >
			{children}
		</Context.Provider>
	)
}

export { Context, ButtonProvider }