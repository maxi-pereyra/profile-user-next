    'use client'
    import React, {useState} from 'react'
    import styles from '../style/Navigation.module.css'

    import Link from 'next/link'
    
    function Navigation() {
        const [isOpen,setIsOpen] = useState(false);
      return (
        <nav>
            <div className={`${styles.navigation} ${isOpen && styles.open}`}>
                <ul>
                    <li>
                        <Link href={"/user/about"} onClick={()=>setIsOpen(!isOpen)}>Sobre mi</Link>
                    </li>
                    <li>
                        <Link href={"/user/interests"} onClick={()=>setIsOpen(!isOpen)}>Intereses</Link>
                    </li>
                    <li>
                        <Link href={"/user/contactForm"} onClick={()=>setIsOpen(!isOpen)}>Contact</Link>
                    </li>
                </ul>
                <div className={`${styles.toogle_menu} ${isOpen && styles.open}`} onClick={()=>setIsOpen(!isOpen)}>
                   <span></span>
                   <span></span>
                   <span></span>
                </div>
            </div>
        </nav>
      )
    }
    
    export default Navigation