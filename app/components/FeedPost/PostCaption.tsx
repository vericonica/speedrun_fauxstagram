import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"

const PostCaption: FC<PostCaptionProps> = ({username, caption }) => {
    return <div className={styles.post_caption}>
        <div><span className={styles.post_caption_username}>{username}</span><span>{caption}</span></div>
     
        
    </div>
}

interface PostCaptionProps { 
    username: string; 
    caption: string;

}

export default PostCaption