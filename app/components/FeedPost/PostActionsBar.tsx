"use client"

import { FC, useState } from 'react'
import styles from "../../styles/feed_post.module.css"
import { Likes, Share, Comment, Save } from '../Icons'

const PostActionsBar: FC<PostActionsBarProps> = () => {
    // later these can be refactored to take status of liked/saved from externally passed in data
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const handleLikeClick = () => setLiked(liked => !liked)
    const handleSaveClick = () => setSaved(saved => !saved)
    return <div className={styles.post_action_bar}>
        <div className={styles.post_action_bar_left}>
        <div>
            <Likes liked={liked} onClick={handleLikeClick}/>
        </div>
        <div>
            <Comment/>
        </div>
        <div>
            <Share />
        </div>
        </div>
        <div className={styles.post_action_bar_right}>
            <Save saved={saved} onClick={handleSaveClick}/>
        </div>

    </div>
}

interface PostActionsBarProps { 
    x?:string
}

export default PostActionsBar