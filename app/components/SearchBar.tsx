'use client'
import { FC, useState } from 'react'
import styles from "../styles/top_menu_bar.module.css"
import {SmallSearch as SearchIcon} from './Icons';



const SearchBar: FC = () => { 
    const [input, setInput] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => { 
        setInput(event.target.value)
    }
    return <div className={styles.top_menu_bar_search} >
        <SearchIcon color={"rgb(115, 115, 115)"} /><input className={styles.top_menu_bar_search_input} placeholder='Search' type="text" value={input} onChange={handleChange}/>
        </div>
}

export default SearchBar;