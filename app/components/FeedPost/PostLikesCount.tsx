import { FC } from 'react'
import styles from "../../styles/feed.module.css"

const PostLikesCount: FC<PostLikesCountProps> = ({count}) => {
    return <div className={styles.post_likes_count}>
        {count} Likes
    </div>
}

interface PostLikesCountProps { 
    count: number;
}

export default PostLikesCount