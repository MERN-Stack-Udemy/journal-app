import { useState } from "react"

export const useForm = ( initialState ) => {
  
  const [formState, setFormState] = useState(initialState)
 
  const reset = (newFormState = initialState) =>{
    setFormState( newFormState );
  }

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ] : target.value
    })
  }

  return [
    formState,
    handleChange,
    reset
  ]
}