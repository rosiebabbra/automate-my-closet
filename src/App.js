import React from 'react';
import sweatpant from './images/sweatpant.png';
import pullover from './images/pullover.png';
import jeans from './images/jeans.jpg';
import hoodie from './images/hoodie.jpg';
import Shuffle from './components/Shuffle.js'
import './App.css';


function App() {

  const tops = [pullover, hoodie],
        bottoms = [sweatpant, jeans]

  const tops_imgs = [],
        bottoms_imgs = []

  // Populate tops_imgs and bottoms_imgs with all possible respective images
  for (const [index, value] of tops.entries()) {
    tops_imgs.push(<img class='tops' src={value} key={index} height={500} width={300}></img>)
  }

  for (const [index, value] of bottoms.entries()) {
    bottoms_imgs.push(<img class='bottoms' src={value} key={index} height={500} width={300}></img>)
  }


  return (
    <div className="App">
      <header className="App-header">

      {/* <button onClick={document.getElementsByTagName('img')[0].src=Shuffle(tops_imgs, 1)}>
        Activate Lasers
      </button> */}
      {/* Grab one top and one bottom from all possible tops and bottoms */}
      {/* This simply outputs the <img> tags, which is why onClick is not working */}
      {Shuffle(tops_imgs, 1)}
      {Shuffle(bottoms_imgs, 1)}
      </header>
    </div>
  );
}

export default App;
