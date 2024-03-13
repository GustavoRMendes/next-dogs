import Login from '@/actions/login'
import React from 'react'

export default function LoginForm() {
  return (
    <>
      <form action={Login}>
        <input type="text" name='username' placeholder='usuário'/>
        <input type="password" name='password'/>
        <button>Entrar</button>
      </form>
    </>
  )
}
