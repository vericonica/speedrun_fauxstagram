import { FC } from 'react'
import styles from "../styles/time_stamp_since.module.css"

const TimeStampSince: FC = () => { 
    return <div className={styles.time_stamp_since}>

<div style={{backgroundColor: 'lightgray', borderRadius: '50%', height: '4px', width: "4px"}}></div>
<div title="December 10 2024">3d</div>
    </div>
}

export default TimeStampSince; 