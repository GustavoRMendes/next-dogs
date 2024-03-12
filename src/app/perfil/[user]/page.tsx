import React from 'react'
type User = {
  params: {
    user:string
  }
}
export default function PerfilUserPage({params} : User) {
  return (
    <div>
      <h1>Perfil User: {params.user}</h1>
    </div>
  )
}
