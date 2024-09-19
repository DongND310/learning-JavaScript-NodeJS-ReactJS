import {useState} from 'react'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
    return (
        <div style={{padding: '10px 30px'}}>
          <Content />
           <h1>{count}</h1>
           <button onClick={increase}>Click</button>
        </div>
    )
}

export default App;


import { useRef, useState, memo} from "react";
import React from 'react'

function Content() {
 
    console.log("Content");
    return (
        <div>
           <h1>Hello</h1>
        </div>
    )
}

// export default React.memo(Content);