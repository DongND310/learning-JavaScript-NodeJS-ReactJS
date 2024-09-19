import {useState, useRef, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(60)

    // useRef: tra ve object -> lay gia tri: ref.current
    const timerId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
      prevCount.current = count
    }, [count])

    useEffect(() => {
      console.log(h1Ref.current)
      const rect = h1Ref.current.getBoundingClientRect()
      console.log(rect)
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('start: ', timerId.current)
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('stop: ', timerId.current)

    }
    console.log(count, prevCount.current)
 
    return (
        <div>
           <h1 ref={h1Ref}>{count}</h1>
           <button onClick={handleStart}>Start</button>
           <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default App;
