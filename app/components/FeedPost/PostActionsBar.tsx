import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"

const PostActionsBar: FC<PostActionsBarProps> = () => {
    return <div className={styles.post_action_bar}>
        <div className={styles.post_action_bar_left}>
        <div>
            {"<3"}
        </div>
        <div>
            O
        </div>
        <div>
            {"-|>"}
        </div>
        </div>
        <div className={styles.post_action_bar_right}>
            {"[]"}
        </div>

    </div>
}

interface PostActionsBarProps { 
    x?:string
}

export default PostActionsBar