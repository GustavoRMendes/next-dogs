import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  label: string
}

export default function Input({label, ...props} : InputProps) {
  return (
    <>
      <label htmlFor=''>{label}</label>
      <input type="text" {...props}/>
    </> 
  )
}
