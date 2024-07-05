import React from 'react'
import styles from '../style/Header.module.css'
import Image from 'next/image'
import user from '../../../public/user.png'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image src={user} alt='user'/>
        <h2 className={styles.container_type_name}>Nombre del usuario</h2>
      </div>
    </header>
  )
}

export default Header