import { FC } from 'react'
import Image from "next/image"
import PostHeader from "./PostHeader"
import styles from "../../styles/feed_post.module.css"
import PostActionsBar from './PostActionsBar'
import PostAddComment from './PostAddComment'
import PostCaption from './PostCaption'
import PostComments from './PostComments'
import PostLikesCount from './PostLikesCount'

const FeedPost: FC<FeedPostProps> = ({data}) => { 
    console.log('data', data)
    return <div className={styles.feed_post}>
        <PostHeader username="user" timeStamp="now"/>
        <div style={{height: "468px", width:"468px", border: "1px solid pink"}}>
            <Image src="/antarctica.png" alt="antarctica" height={468} width={468}/>
        </div>
        <PostActionsBar />
        <PostLikesCount count={123456789}/>
        <PostCaption username="username" caption="This is my interesting caption for my beautiful image. Please enjoy!"/>
        <PostComments />
        <PostAddComment />

    </div>
}

interface FeedPostProps{ 
    data: {}
}

export default FeedPost;