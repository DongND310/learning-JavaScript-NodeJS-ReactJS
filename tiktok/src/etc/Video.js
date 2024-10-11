import Download from './videos/Download.mp4'
import {forwardRef, useImperativeHandle, useRef} from 'react'

function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}  
            src={Download} 
            width="200 px" 
            controls
        />
    )
}

export default forwardRef(Video);