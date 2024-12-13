import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"

const PostComments: FC<PostCommentsProps> = () => {
    return <div className={styles.post_comments}>View all 45 comments</div>
}

interface PostCommentsProps { 
    x?:string
}

export default PostComments