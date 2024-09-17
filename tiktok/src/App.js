import {useState} from 'react'

function App() {
  const [info, setInfo] = useState({
    name: 'A',
    age: 20,
    address: 'VN'
  })

  const handleUpdate = () => {
    setInfo(prev => ({
      ...prev,
      bio: 'hehe'
    }))
  }
  
  return (
    <div className="App" style={{padding: 10}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
