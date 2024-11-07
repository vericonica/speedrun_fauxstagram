import Link from 'next/link';
import { FC } from 'react'; 
import styles from '../styles/icon_link.module.css'
import {AddPost, Explore, Hamburger, Home, Likes, Logo, Messages, Reels, Search} from './Icons';

const IconLink: FC<IconLinkProps> = ({name ="", href ="/"}) => { 
    return <Link href={href} className={styles.icon_link}>
        {IconLookup[name] ?? name}
    </Link>
}

const IconLookup: {[x: string]: JSX.Element} = { 
    "home": <Home />, 
    "logo" : <Logo />, 
    "search": <Search />, 
    "explore": <Explore />,
    "likes": <Likes />, 
    "add_post": <AddPost/>,
    "reels": <Reels/>, 
    "messages": <Messages />, 
    "hamburger": <Hamburger/>

}

interface IconLinkProps { 
    name: string; 
    href: string; 
}

export default IconLink; 