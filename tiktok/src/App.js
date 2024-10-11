import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles'
import React from 'react';

function App() {
    return (
     <GlobalStyles>
        <div style={{padding:'0 30px'}}>
          <Heading/>
          <Paragraph/>
        <Button/>
        </div>
     </GlobalStyles> 
    );

}
export default App