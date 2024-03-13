"use client"
import { useFormStatus } from 'react-dom'
import Login from '@/actions/login'
import React from 'react'
import Button from '../forms/button'
import Input from '../forms/input'

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
        <Input label='Usuário' name='username' />
        <Input label='Senha' name='password'/>
        <input type="text" name='username' placeholder='usuário' />
        <input type="password" name='password' placeholder='senha' /> <br/>
        <FormButton />
      </form>
    </>
  )
}
