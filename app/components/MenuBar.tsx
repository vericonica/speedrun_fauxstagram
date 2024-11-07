'use client'
import { FC } from 'react'
import styles from '../styles/menu_bar.module.css'
import IconLink from './IconLink';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import TopMenuBar from './TopMenuBar';

const MenuBar: FC = () => { 
    const isMobile = useMediaQuery(
        "(max-width: 768px)")
    return isMobile ? <TopMenuBar/> :<nav className={styles.menu_bar}>
        <div>
            <IconLink name="logo" href="/"/>
        </div>
        <div className={styles.menu_bar_middle}>
        <IconLink name="home" href="/"/>
        <IconLink name="search" href="/"/>
        <IconLink name="explore" href="/"/>
        <IconLink name="reels" href="/"/>
        <IconLink name="messages" href="/"/>
        <IconLink name="likes" href="/"/>
        <IconLink name="add_post" href="/"/>
        <Link href="/profile"/>
        </div>
        <div>
        <IconLink name="hamburger" href="/"/>
        </div>


    </nav>
}

export default MenuBar; 