import './App.css';
import './grid-portafolio.css';
import './CSS/normalize.css';
import React, { useState } from 'react'
import Cite from './Component/Cite.js'
import IconAuthor from './Component/IconAuthor';
import ButtonChange from './Component/ButtonChange'
import Data from './Component/quotes.json'

function App() {
  let ramdom = Math.round(Math.random() * 102);
  const [cite, setCite] = useState(ramdom);

  const handleCite = () => {
    let random = Math.round(Math.random() * 102);
    setCite(random)

    var color = "#";
    for (let i = 0; i < 6; i++) {
      let symbols = "0123456789ABCDEF";
      color = color + symbols[Math.floor(Math.random() * 16)];
    }

    let getId1 = document.getElementById('App');
    getId1.style.backgroundColor = color;

    let getId = document.getElementById('button');
    getId.style.backgroundColor = color;

  }


  return (
    <div className="App" id='App'>
      <div className="roww col-lg-4 col-md-7 col-sm-8 rounded">
        <Cite Cite={Data.quotes[cite].quote} />
        <IconAuthor Author={Data.quotes[cite].author} />
        <ButtonChange Action={handleCite} />
      </div>
    </div>
  );
}

export default App;
