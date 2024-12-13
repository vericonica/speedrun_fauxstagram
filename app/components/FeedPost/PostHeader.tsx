import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"
import ProfilePicture from '../ProfilePicture'
import TimeStampSince from '../TimeStampSince'

const PostHeader: FC<PostHeaderProps> = ({
    username, 
    timeStamp
}) => { 
    console.log(username, timeStamp)

    return <div className={styles.feed_post_header}>
        <div className={styles.feed_post_header_right}>
            <ProfilePicture />
        {/* <Profile Picture /> */}
        <div style={{fontWeight: "600"}}>Username_username</div>
        <TimeStampSince />
       </div>
        {/* <MeatballsButtom /> */}
    </div>
}

interface PostHeaderProps{ 
    username: string; 
    timeStamp: string; //or num or date-time?
}

export default PostHeader;