'use client'
import { FC, useState } from 'react'

const SearchBar: FC = () => { 
    const [input, setInput] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => { 
        setInput(event.target.value)
    }
    return <input placeholder='Search' type="text" value={input} onChange={handleChange}/>
}

export default SearchBar;