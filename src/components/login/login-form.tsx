"use client"
import { useFormStatus } from 'react-dom'
import Login from '@/actions/login'
import React from 'react'
import Button from '../forms/button'

function FormButton () {
  const status = useFormStatus()
  return (
    <>
      {status.pending ? <Button disabled={status.pending}>Carregando...</Button> :
        <Button>Entrar</Button>}
    </>)
}

export default function LoginForm () {
  return (
    <>
      <form action={Login}>
        <input type="text" name='username' placeholder='usuário' />
        <input type="password" name='password' placeholder='senha' />
        <FormButton />
      </form>
    </>
  )
}
