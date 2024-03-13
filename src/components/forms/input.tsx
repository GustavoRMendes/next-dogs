import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string
}

export default function Input({label, ...props} : InputProps) {
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type="text" id={props.name} {...props}/>
    </> 
  )
}
