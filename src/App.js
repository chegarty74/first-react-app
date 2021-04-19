import React, { useState } from 'react'
import ColorChangeButton from './ColorChangeButton'
import './App.css';

function App() {
  const [color, setColor] = useState('')
  return (
  <div className="App">

      <header className="App-header">
      <div className='hello'>
        <h1>Hello World! This is my first React app. 🥳 🙌🏻</h1>
      </div>
     </header>

     <section className={`react-root ${color}`}>
      <div className='centered'>
      <h2>Click a color to change the background:</h2>
          <div className='buttonFlexWrap'>
              <ColorChangeButton color='candy' setColor={setColor} />
              <ColorChangeButton color='blue' setColor={setColor} />
              <ColorChangeButton color='mint' setColor={setColor} />
              <ColorChangeButton color='lemon' setColor={setColor} />
              <ColorChangeButton color='orange' setColor={setColor} />
          </div>
      </div>
     </section>
      <footer>
          <p>All thanks to the <a href="https://www.ladybug.dev/">Ladybug podcast</a> for the React episodes that made me want to try this: "Getting Hooked on React" and "Getting Hooked on React Part 2" and to <a
              href="https://dev.to/aspittel/a-complete-beginner-s-guide-to-react-hooks-edition-1bi0">Ali Spittel's tutorial</a> that walked me through creating this.</p>
      </footer>
    </div>
  );
}

export default App;
