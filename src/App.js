import './App.css';
import React, {useState} from 'react';

function App() {
  const [contVisible, setContVisible] = useState(false);

  const click = () => {
      setContVisible(!contVisible);
  };

  return (
    <div className='App'>
      <>
          <header className='App-header'>Hold'em Handbook</header>

          <div className='App-body'>
              <button className='Button' onClick={() => click()}>
                  Odds
              </button>
              <button className='Button' onClick={() => click()}>
                  yuh
              </button>
          </div>

          <div id='contentContainer' style={{display: contVisible ? 'flex' : 'none'}}>
              <div className='content'>
                  <div id='royalFlush'>
                      ROYAL FLUSH
                      <div className='startCard'>
                          <CardGraphic rank='A'/>
                      </div>
                      <div className='card'>
                          <CardGraphic rank='2'/>
                      </div>
                  </div>
                  <div id='straight'>
                      STRAIGHT
                      <CardGraphic />
                  </div>
                  <div id='straightFlush'>
                      STRAIGHT FLUSH
                      <CardGraphic />
                  </div>
                  <div id='trips'>
                      THREE OF A KIND
                      <CardGraphic />
                  </div>
                  <div id='quads'>FOUR OF A KIND</div>
                  <div id='twoPair'>TWO PAIR</div>
                  <div id='fullHouse'>FULL HOUSE</div>
                  <div id='pair'>PAIR</div>
                  <div id='flush'>FLUSH</div>
                  <div id='highCard'>HIGH CARD</div>
              </div>
          </div>
      </>
    </div>
  );
}

function CardGraphic({rank}) {
    return (
        <div>
            {rank}
        </div>
    )
}

export default App;
