import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import Content from './Content'
import './App.css'

// Context: compA -> compB -> compC
// 1. create context
// 2. provider
// 3. consumer

function App() {
  const context = useContext(ThemeContext)

  return (
      <div style={{padding: 20}}>
        <button onClick={context.toggleTheme} >Toggle Theme</button>
        <Content/>
      </div>
  )
}
export default App