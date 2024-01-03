import './App.css';
import React, {useState} from 'react';

function App() {
  const diamondImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/1200px-Card_diamond.svg.png';

  const clubImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Card_club.svg/458px-Card_club.svg.png';

  const heartImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/1200px-Card_heart.svg.png';

  const spadeImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Card_spade.svg/784px-Card_spade.svg.png';

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
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div id='rf2card'>
                              <CardGraphic rank='J'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='Q'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='K'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='A'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                      </div>
                      <div id='straight' onMouseEnter={() => {
                          setInfoContent(<div>nyeyo</div>);
                          setInfoVisible(true);}}
                          onMouseLeave={() => setInfoVisible(false)}>
                          STRAIGHT
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div id='s2card'>
                              <CardGraphic rank='2'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='3'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='4'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='5'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                      </div>
                      <div id='straightFlush'>
                          STRAIGHT FLUSH
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div id='sf2card'>
                              <CardGraphic rank='2'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='3'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='4'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='5'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                      </div>
                      <div id='trips'>
                          THREE OF A KIND
                          <div className='redStartCard'>
                              <CardGraphic rank='7'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div id='t2card'>
                              <CardGraphic rank='7'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='7'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='K'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='2'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                      </div>
                      <div id='quads'>
                          FOUR OF A KIND
                          <div className='redStartCard'>
                              <CardGraphic rank='Q'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div id='q2card'>
                              <CardGraphic rank='Q'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='Q'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='Q'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                      </div>
                      <div id='twoPair'>
                          TWO PAIR
                          <div className='blkStartCard'>
                              <CardGraphic rank='8'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div id='tp2card'>
                              <CardGraphic rank='8'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='J'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='J'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='T'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                      </div>
                      <div id='fullHouse'>
                          FULL HOUSE
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div id='fh2card'>
                              <CardGraphic rank='A'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='9'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='9'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='9'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                      </div>
                      <div id='pair'>
                          PAIR
                          <div className='redStartCard'>
                              <CardGraphic rank='K'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div id='p2card'>
                              <CardGraphic rank='K'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='3'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='J'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='6'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                      </div>
                      <div id='flush'>
                          FLUSH
                          <div className='redStartCard'>
                              <CardGraphic rank='3'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div id='f2card'>
                              <CardGraphic rank='5'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='Q'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='9'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='J'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                      </div>
                      <div id='highCard'>
                          HIGH CARD
                          <div className='blkStartCard'>
                              <CardGraphic rank='A'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div id='h2card'>
                              <CardGraphic rank='7'/>
                              <img className='clubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='Q'/>
                              <img className='diamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <CardGraphic rank='T'/>
                              <img className='heartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <CardGraphic rank='5'/>
                              <img className='spadeImg'
                                   src={spadeImg}/>
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
