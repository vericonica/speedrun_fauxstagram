import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"

const PostAddComment: FC<PostAddCommentProps> = () => {
    return <div className={styles.post_add_comment}>
        Add comment...
    </div>
}

interface PostAddCommentProps { 
    x?:string
}

export default PostAddComment