import Image from 'next/image'
import styles from './header.module.css'
import Link from 'next/link'
import React from 'react'

export default function Header () {
  const user = true
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <Link className={styles.logo} href='/'>
            <Image
              src='/assets/dogs.svg'
              alt='Dogs'
              height={22}
              width={28}
              priority
            />
          </Link>
          {user ? (<Link className={styles.login} href='/conta'>dogs</Link>
          ) : (<Link className={styles.login} href='/login'>Login/Criar</Link>)
          }
        </nav>
      </header>
    </>
  )
}
