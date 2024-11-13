'use client'
import { FC, useState } from 'react'
import styles from '../styles/top_menu_bar.module.css'
import Image from "next/image"
import { DownCaret } from './Icons'

const MobileNavMenu: FC = () => { 
    const [open, setOpen] = useState(false)
    return <button onClick={() => setOpen(open => !open)} className={styles.top_menu_bar_button}>
        <Image src="/fauxstagram.png" height={40} width={125} alt="Logo"/><DownCaret/>
        {open && <div>
            the menu is open! 
        </div> }
    </button>
}

export default MobileNavMenu; 