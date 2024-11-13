import { FC } from 'react'
import styles from '../styles/top_menu_bar.module.css'
import MobileNavMenu from './MobileNavMenu';
import IconLink from './IconLink';
import SearchBar from './SearchBar';

const TopMenuBar: FC = () => { 
    return <nav className={styles.top_menu_bar}>
        <MobileNavMenu />
        <div className={styles.top_menu_bar_right}>
            <SearchBar /> 
            <IconLink name="likes" href="/notifications"/>
        </div>

    </nav>
}

export default TopMenuBar; 