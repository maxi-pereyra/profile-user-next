'use client'
import React from 'react'
import styles from '../style/CardInterests.module.css'
import { useState } from 'react'

function CardInterests({interest}) { 
    const [open,setOpen] = useState(false)
    console.log(open)
    return (
    <div className={styles.card}>
      <div className={`${styles.title} ${open && styles.open}`} onClick={()=>setOpen(!open)}>
        <h3>{interest.title}</h3>
        <div className={`${styles.bandera} ${open && styles.isopen}`} >
          <span></span> 
          <span></span>
        </div>
      </div>
      <div className={`${styles.cont_description} ${open && styles.open_description}`}>
        <p>{interest.description}</p>
      </div>
    </div>
  )
}

export default CardInterests