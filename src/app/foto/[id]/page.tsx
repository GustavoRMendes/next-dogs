import React from 'react'
type Params = {
  params: {
    id:number
  }
}
export default function FotoIdPage({params} : Params ) {
  return (
    <div>
      <h1 className='title'>Foto Id : {params.id}</h1>
    </div>
  )
}
