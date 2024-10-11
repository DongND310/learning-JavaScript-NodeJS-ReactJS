// import Heading from './components/Heading'
// import Paragraph from './components/Paragraph'
// import Button from './components/Button'
// import GlobalStyles from './components/GlobalStyles'
import React from 'react';
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
     <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

     </div>
    );

}
export default App