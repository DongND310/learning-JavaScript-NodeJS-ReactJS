import {useState, useCallback} from 'react'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])
  // neu deps [] rong -> tra ve tham chieu cu -> khong thay doi -> khong render lai
  
    return (
        <div style={{padding: '10px 30px'}}>
          <Content onIncrease={handleIncrease} />
           <h1>{count}</h1>
        </div>
    )
}

export default App;

import {useState, memo} from "react";
import React from 'react'

function Content({onIncrease}) {
 
    console.log("Content");
    return (
        <>
           <h1>Hello</h1>
           <button onClick={onIncrease}>Click</button>
        </>
    )
}

// export default React.memo(Content);