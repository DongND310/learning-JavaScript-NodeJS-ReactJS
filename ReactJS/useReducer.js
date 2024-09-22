import { useReducer} from 'react'
// import Content from './Content'

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1) 

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1) 
// 3. Reducer
// 4. Dispatch

const initState = 0
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action: ')  
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div style={{padding: '10px 30px'}}>
          <h1>{count}</h1>
          <button
            onClick={() => dispatch(UP_ACTION)}> Up
          </button>
          <button
            onClick={() => dispatch(DOWN_ACTION)}> Down
          </button>
        </div>
    )
}

export default App;
