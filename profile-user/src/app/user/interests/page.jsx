'use client'
import React from 'react'
import styles from '../../style/Interests.module.css'
import CardInterests from '@/app/component/cardInterests'

function Interests() {
  const interests = [
  {
    title: 'patinar',
    description: 'salir a patinar a la plaza por la tarde y por la mañana los fines de semana'
  },
  {
    title: 'cocinar',
    description: 'en su mayoria postres y cosas dulces'
  }
  ]

  return (
    <div className={styles.cont_card}>
      <h3 className={styles.title}>Intereses</h3>
       {
        interests.map((interest,index)=>(
            <CardInterests key={index} interest={interest}/>
        ))
      } 
    </div>
  )
}

export default Interests