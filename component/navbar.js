import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const navbar = () => {
  return (
    <div className={styles.container}>
         <main className={styles.main}>
        <ul className={styles.ul} >
            <Link href='/'><li className={styles.li}><a >Home</a></li></Link>
            <Link href='/blog'><li className={styles.li}><a >Blog</a></li></Link>
            <Link href='/contact'><li className={styles.li}><a >Contact</a></li></Link>
            <Link href='/about'><li className={styles.li}><a >About</a></li></Link>
            <Link href='/login'><li className={styles.li}><a >Login</a></li></Link>
        </ul>
        </main>
    </div>
  )
}

export default navbar