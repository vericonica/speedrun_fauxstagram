import { FC } from 'react'
import styles from "../styles/feed.module.css"
import FeedPost from './FeedPost/FeedPost';

const Feed: FC = () => { 
    const postsData = [
        "1", "2", "3"
    ]
    return <div className={styles.feed}>
        {postsData.map((data, i) => <FeedPost data={data} key={i}/>)}
    </div>
}

export default Feed; 