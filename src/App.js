import './App.css';
import React, {useState} from 'react';

function App() {
  const [panelVisible, setPanelVisible] = useState(false);

  const [infoVisible, setInfoVisible] = useState(false);

  const [infoContent, setInfoContent] = useState(<div></div>);

  const click = () => {
      setPanelVisible(!panelVisible);
  };

  function HandInfo({content}) {
      return (
          <div className='info' style={{display: infoVisible ? 'flex' : 'none'}}>
              {content}
          </div>
      )
  }

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

          <div id='contentContainer' style={{display: panelVisible ? 'flex' : 'none'}}>
              <div className='contentPanel'>
                  <div className='hands'>
                      <div id='royalFlush' onMouseEnter={() => {
                          setInfoContent(<div>nigger</div>);
                          setInfoVisible(true);}}
                          onMouseLeave={() => setInfoVisible(false)}>
                          ROYAL FLUSH
                          <div className='redStartCard'>
                              <CardGraphic rank='T'/>
                          </div>
                          <div id='rf2card'>
                              <CardGraphic rank='J'/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='K'/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='A'/>
                          </div>
                      </div>
                      <div id='straight' onMouseEnter={() => {
                          setInfoContent(<div>nyeyo</div>);
                          setInfoVisible(true);}}
                          onMouseLeave={() => setInfoVisible(false)}>
                          STRAIGHT
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                          </div>
                          <div id='s2card'>
                              <CardGraphic rank='2'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='3'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='4'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='5'/>
                          </div>
                      </div>
                      <div id='straightFlush'>
                          STRAIGHT FLUSH
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                          </div>
                          <div id='sf2card'>
                              <CardGraphic rank='2'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='3'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='4'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='5'/>
                          </div>
                      </div>
                      <div id='trips'>
                          THREE OF A KIND
                          <div className='blkStartCard'>
                              <CardGraphic rank='7'/>
                          </div>
                          <div id='t2card'>
                              <CardGraphic rank='7'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='7'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='K'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='2'/>
                          </div>
                      </div>
                      <div id='quads'>
                          FOUR OF A KIND
                          <div className='blkStartCard'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div id='q2card'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                          </div>
                      </div>
                      <div id='twoPair'>
                          TWO PAIR
                          <div className='blkStartCard'>
                              <CardGraphic rank='8'/>
                          </div>
                          <div id='tp2card'>
                              <CardGraphic rank='8'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='J'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='J'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='4'/>
                          </div>
                      </div>
                      <div id='fullHouse'>
                          FULL HOUSE
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                          </div>
                          <div id='fh2card'>
                              <CardGraphic rank='A'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                          </div>
                      </div>
                      <div id='pair'>
                          PAIR
                          <div className='blkStartCard'>
                              <CardGraphic rank='K'/>
                          </div>
                          <div id='p2card'>
                              <CardGraphic rank='K'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='3'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='J'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='6'/>
                          </div>
                      </div>
                      <div id='flush'>
                          FLUSH
                          <div className='blkStartCard'>
                              <CardGraphic rank='3'/>
                          </div>
                          <div id='f2card'>
                              <CardGraphic rank='5'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='J'/>
                          </div>
                      </div>
                      <div id='highCard'>
                          HIGH CARD
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                          </div>
                          <div id='h2card'>
                              <CardGraphic rank='7'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='Q'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='4'/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='5'/>
                          </div>
                      </div>
                  </div>
                  <div id='strongest'>
                      Strongest
                  </div>
                  <div id='weakest'>
                      Weakest
                  </div>
                  <HandInfo content={infoContent}/>
              </div>
          </div>
      </>
    </div>
  );
}

function CardGraphic({rank}) {
    return (
        <div className='cardText'>
            {rank}
        </div>
    )
}

export default App;
