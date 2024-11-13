import { FC } from 'react'
import styles from "../styles/feed.module.css"
import FeedPost from './FeedPost/FeedPost';

const Feed: FC = () => { 
    const postsData = [
        {}, {}, {}
    ]
    return <div className={styles.feed}>
        {postsData.map(data => <FeedPost data={data}/>)}
    </div>
}

export default Feed; 