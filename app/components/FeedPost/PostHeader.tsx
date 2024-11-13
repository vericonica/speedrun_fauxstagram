import { FC } from 'react'
import styles from "../../styles/feed_post.module.css"

const PostHeader: FC<PostHeaderProps> = ({
    username, 
    timeStamp
}) => { 
    console.log(username, timeStamp)

    return <div className={styles.feed_post_header}>
        <div>
        {/* <Profile Picture /> */}
        {/* <UserName username={username}/> */}
        {/* div styled as dot divider */}
        {/* <TimeSinceStamp timeStamp={timeStamp}/> -- has hover full timestap (readable DateTime) */}
        </div>
        {/* <MeatballsButtom /> */}
    </div>
}

interface PostHeaderProps{ 
    username: string; 
    timeStamp: string; //or num or date-time?
}

export default PostHeader;