'use client'
import { FC, useState } from 'react'

const MobileNavMenu: FC = () => { 
    const [open, setOpen] = useState(false)
    return <button onClick={() => setOpen(open => !open)}>
        Fauxstagram
        {open && <div>
            the menu is open! 
        </div> }
    </button>
}

export default MobileNavMenu; 