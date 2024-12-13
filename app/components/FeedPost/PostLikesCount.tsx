import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"

const PostLikesCount: FC<PostLikesCountProps> = ({count}) => {
    return <div className={styles.post_likes_count}>
        {count} likes
    </div>
}

interface PostLikesCountProps { 
    count: number;
}

export default PostLikesCount