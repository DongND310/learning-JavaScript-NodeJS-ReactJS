import {useState} from 'react'

const courses = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  },
];

// 2-way binding
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [checked, setChecked] = useState([])
  const [checkedR, setCheckedR] = useState(1)

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    })
  }

  const handleSubmit = () => {
    console.log({
      name,
      email,
      idR: checkedR,
      id: checked
    })
  }

  return (
    <div style={{padding: 20}}>
      {courses.map(course => (
        <div key = {course.id} >
          <input 
            type ="radio" 
            checked={checkedR === course.id} 
            onChange={() => setCheckedR(course.id)}
            />
          {course.name}
          </div>
      ))}

      {courses.map(course => (
        <div key = {course.id} >
          <input 
            type ="checkbox" 
            checked={checked.includes(course.id)} 
            onChange={() => handleCheck(course.id)}
            />
          {course.name}
          </div>
      ))}

      <input 
        value ={name}
        onChange={e => setName(e.target.value)} />

      <input 
        value ={email}
        onChange={e => setEmail(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


// array
// const gifts = [
//   'gift1', 'gift2', 'gift3',
// ]

// function App() {

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }
  
//   return (
//     <div style={{padding: 20}}>
//       <h1>{gift || 'Chua co phan thuong'}</h1>
//       <button onClick={randomGift}>Lay thuong</button>

//     </div>
//   )
// }

// setState
// function App() {
//   const [info, setInfo] = useState({
//       name: 'A',
//       age: 20,
//       address: 'VN'
//     })

//     const handleUpdate = () => {
//       setInfo(prev => ({
//         ...prev,
//         bio: 'hehe'
//       }))
//     }
    
//     return (
//       <div className="App" style={{padding: 10}}>
//         <h1>{JSON.stringify(info)}</h1>
//         <button onClick={handleUpdate}>Update</button>
//       </div>
//     );
// }

export default App;
