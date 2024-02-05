import './App.css';
import React, {useState, useEffect} from 'react';
import {Context, Text} from 'react-mathjax2';
import axios from 'axios';
import Card from './Card';

function App() {
  const diamondImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/1200px-Card_diamond.svg.png';

  const clubImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Card_club.svg/458px-Card_club.svg.png';

  const heartImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/1200px-Card_heart.svg.png';

  const spadeImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Card_spade.svg/784px-Card_spade.svg.png';

  const [buttonMousePosition, setButtonMousePosition] = useState({x: 0, y: 0})

  const [handsContent, setHandsContent] = useState(false);

  const [equityContent, setEquityContent] = useState(false);

  const [handInfoVisible, setHandInfoVisible] = useState(false);

  const [handInfoContent, setHandInfoContent] = useState(<div></div>);

  const showHandsContent = () => {
      if (equityContent) setEquityContent(!equityContent);
      setHandsContent(!handsContent);
  };

  const showEquityContent = () => {
      if (handsContent) setHandsContent(!handsContent);
      setEquityContent(!equityContent);
  };

  function HandsCardGraphic({rank}) {
      return (<div className='cardText'>{rank}</div>);
  }

  function Math({text}) {
      return (
          <Context>
              <Text text={text} />
          </Context>
      );
  }

  function HandInfo({content}) {
      return (
          <div className='info' style={{display: handInfoVisible ? 'flex' : 'none'}}>
              {content}
          </div>
      );
  }

  function AvailableCardsGraphic({deck, index}) {
      let img = '';
      let imgClass = '';
      const [color, setColor] = useState('black');

      useEffect(() => {
          if (deck[index].suit === 'diamonds' || deck[index].suit === 'hearts') {
              setColor('red');
          }
      }, []);

      if (deck[index].suit === 'clubs') {
          img = clubImg;
          imgClass = 'availableCardsClubImg';
      }
      else if (deck[index].suit === 'spades') {
          img = spadeImg;
          imgClass = 'availableCardsSpadeImg';
      }
      else if (deck[index].suit === 'diamonds') {
          img = diamondImg;
          imgClass = 'availableCardsDiamondImg';
      }
      else {
          img = heartImg;
          imgClass = 'availableCardsHeartImg';
      }

      return (
          <div className='availableCardsGraphic' style={{color: color}}>
              {deck[index].rank}
              <img className={imgClass} src={img} />
          </div>
      );
  }

  const [data, setData] = useState([{}]);
  useEffect(() => {
        fetch('/members').then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
      }, [])

  function HandUnderliner({handLength}) {
      let width = 0;

      if (handLength === 1) width = 35;

      else if (handLength === 2) width = 74.5;

      else if (handLength === 3) width = 113.5;

      else if (handLength === 4) width = 152.5;

      else if (handLength === 5) width = 191;

      return (
          <div className='underlines' style={{width: width + 'px'}}></div>
      );
  }

  const handleOnMouseMove = e => {
      const {currentTarget: target} = e;

      const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

      setButtonMousePosition({x, y});
  };


  const [deck, setDeck] = useState([new Card('A', 'clubs'), new Card('2', 'clubs'),
  new Card('3', 'clubs'), new Card('4', 'clubs'), new Card('5', 'clubs'),
  new Card('5', 'clubs'), new Card('6', 'clubs'), new Card('7', 'clubs'),
  new Card('8', 'clubs'), new Card('9', 'clubs'), new Card('10', 'clubs'),
  new Card('J', 'clubs'), new Card('Q', 'clubs'), new Card('K', 'clubs'),
  new Card('A', 'spades'), new Card('2', 'spades'), new Card('3', 'spades'),
  new Card('4', 'spades'), new Card('5', 'spades'), new Card('5', 'spades'),
  new Card('6', 'spades'), new Card('7', 'spades'), new Card('8', 'spades'),
  new Card('9', 'spades'), new Card('10', 'spades'), new Card('J', 'spades'),
  new Card('Q', 'spades'), new Card('K', 'spades'),
  new Card('A', 'diamonds'), new Card('2', 'diamonds'), new Card('3', 'diamonds'),
  new Card('4', 'diamonds'), new Card('5', 'diamonds'), new Card('5', 'diamonds'),
  new Card('6', 'diamonds'), new Card('7', 'diamonds'), new Card('8', 'diamonds'),
  new Card('9', 'diamonds'), new Card('10', 'diamonds'), new Card('J', 'diamonds'),
  new Card('Q', 'diamonds'), new Card('K', 'diamonds'),
  new Card('A', 'hearts'), new Card('2', 'hearts'), new Card('3', 'hearts'),
  new Card('4', 'hearts'), new Card('5', 'hearts'), new Card('5', 'hearts'),
  new Card('6', 'hearts'), new Card('7', 'hearts'), new Card('8', 'hearts'),
  new Card('9', 'hearts'), new Card('10', 'hearts'), new Card('J', 'hearts'),
  new Card('Q', 'hearts'), new Card('K', 'hearts')]);

  return (
    <div className='App'>
      <>
          <header className='App-header'>Hold'em Handbook</header>

          <div className='App-body'>
              <button className='Button'
                      onClick={() => showHandsContent()}
                      onMouseMove={handleOnMouseMove}
                      style={{'--mouse-x': `${buttonMousePosition.x}px`,
                              '--mouse-y': `${buttonMousePosition.y}px`}}>
                  <div className='buttonContentContainer'>
                      <p className='buttonTitle'>
                          HANDS
                      </p>
                      <p className='buttonDescription'>
                          Learn how each hand ranks and the probability of which they occur on a full board.
                      </p>
                  </div>
              </button>
              <button className='Button' onClick={() => showEquityContent()}
                      onMouseMove={handleOnMouseMove}
                      style={{'--mouse-x': `${buttonMousePosition.x}px`,
                              '--mouse-y': `${buttonMousePosition.y}px`}}>
                  <div className='buttonContentContainer'>
                      <p className='buttonTitle'>
                          EQUITY CALCULATOR
                      </p>
                      <p className='buttonDescription'>
                          Analyze the equity of your and your opponents' hands in any scenario.
                      </p>
                  </div>
              </button>
          </div>

          <div className='contentContainer' style={{display: handsContent ? 'flex' : 'none'}}>
              <div className='contentPanel'>
                  <div className='hands'>
                      <div id='royalFlush' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>ROYAL FLUSH</p>
                                  <p className='infoText'>
                                      The rarest and most formidable hand conceivable in all of
                                      poker. This hand represents the highest ranking straight flush possible. It's
                                      probability of occurring can be represented as,
                                  </p>
                                  <div id='rfMath'>
                                      <Math text={'\\[P(\\text{Royal Flush}) = ' +
                                          '\\frac{4 \\times C(47, 2)}{C(52, 7)} ≈ 0.0032\\text{%}\\]'} />
                                  </div>
                                  <p>
                                      On average, you will play about 30,939 hands for every royal flush you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                          onMouseLeave={() => setHandInfoVisible(false)}>
                          ROYAL FLUSH
                          <div className='redStartCard'>
                              <HandsCardGraphic rank='T'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div id='rf2card'>
                              <HandsCardGraphic rank='J'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='K'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='A'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <HandUnderliner handLength={5} />
                      </div>
                      <div id='straight' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>STRAIGHT</p>
                                  <p className='infoText'>
                                      A very strong hand that's difficult to put your opponents on. All this hand
                                      requires is five cards consecutive to each other. It's probability of occurring
                                      can be represented as,
                                  </p>
                                  <div id='sMath'>
                                      <Math text={'\\[P(\\text{Straight}) = \\frac{217 \\times [4^7 - 756 - 4 - 84]}' +
                                          '{C(52, 7)}\\]'} />
                                      <Math text={'\\[+ \\, \\frac{71 \\times 36 \\times 990}{C(52, 7)} + ' +
                                          '\\frac{10 \\times 5 \\times 4 \\times [256 - 3] + 10 \\times C(5, 2) ' +
                                          '\\times 2268}{C(52, 7)}\\]'}/>
                                      <Math text={'\\[≈ 4.62\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 21 hands for every straight you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                          onMouseLeave={() => setHandInfoVisible(false)}>
                          STRAIGHT
                          <div className='blkStartCard'>
                              <HandsCardGraphic rank='A'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div id='s2card'>
                              <HandsCardGraphic rank='2'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='3'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='4'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='5'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <HandUnderliner handLength={5} />
                      </div>
                      <div id='straightFlush' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>STRAIGHT FLUSH</p>
                                  <p className='infoText'>
                                      A highly impressive hand that forms the blueprint for the royal flush. This hand
                                      requires fives cards of the same suit which are consecutive to each other
                                      in rank. Its probability of occurring can be represented as,
                                  </p>
                                  <div id='sfMath'>
                                      <Math text={'\\[P(\\text{Straight Flush}) = \\frac{35 \\times C(47, 2) + ' +
                                          'C(46, 2)}{C(52, 7)}\\]'}/>
                                      <Math text={'\\[≈ 0.029\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 3,442 hands for every straight flush you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                          onMouseLeave={() => setHandInfoVisible(false)}>
                          STRAIGHT FLUSH
                          <div className='blkStartCard'>
                              <HandsCardGraphic rank='A'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div id='sf2card'>
                              <HandsCardGraphic rank='2'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='3'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='4'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='5'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <HandUnderliner handLength={5} />
                      </div>
                      <div id='trips' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>THREE OF A KIND</p>
                                  <p className='infoText'>
                                      A rare yet ever threatening hand, simply comprised of three cards of the same
                                      rank. Its probability of occurring can be represented as,
                                  </p>
                                  <div id='tMath'>
                                      <Math text={'\\[P(\\text{Three of a Kind}) =\\]'} />
                                      <Math text={'\\[\\frac{[C(13, 5) - 10] \\times C(5, 1) \\times C(4, 1) \\times ' +
                                          '[[C(4, 1)]^4 - 3]}{C(52, 7)} ≈ 4.83\\text{%}\\]'}/>

                                  </div>
                                  <p>
                                      On average, you will play about 20 hands for every three of a kind you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          THREE OF A KIND
                          <div className='redStartCard'>
                              <HandsCardGraphic rank='7'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div id='t2card'>
                              <HandsCardGraphic rank='7'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='7'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='K'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='2'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <HandUnderliner handLength={3} />
                      </div>
                      <div id='quads' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>FOUR OF A KIND</p>
                                  <p className='infoText'>
                                      A monster hand, elegant in its simplicity and ruthless in its lethality. Every
                                      instance of one rank must appear to complete this hand. Its probability of
                                      occurring can be represented as,
                                  </p>
                                  <div id='qMath'>
                                      <Math text={'\\[P(\\text{Four of a Kind}) = ' +
                                          '\\frac{13 \\times C(48, 3)}{C(52, 7)} ≈ 0.168\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 594 hands for every four of a kind you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          FOUR OF A KIND
                          <div className='redStartCard'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div id='q2card'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='9'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <HandUnderliner handLength={4} />
                      </div>
                      <div id='twoPair' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>TWO PAIR</p>
                                  <p className='infoText'>
                                      A classic hand: The pair's big brother. As the name suggests, two pairs must
                                      appear to complete this hand. Its probability of occurring can be represented as,
                                  </p>
                                  <div id='tpMath'>
                                      <Math text={'\\[P(\\text{Two Pair}) = \\frac{1277 \\times 10 \\times' +
                                          '[6 \\times 62 + 24 \\times 63 + 6 \\times 64]}{C(52, 7)}\\]'} />
                                      <Math text={'\\[+ \\frac{C(13, 3) \\times [C(4, 1)]^3 \\times 40}{C(52, 7)}' +
                                          '≈ 23.5\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 3 hands for every two pair you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          TWO PAIR
                          <div className='blkStartCard'>
                              <HandsCardGraphic rank='8'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div id='tp2card'>
                              <HandsCardGraphic rank='8'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='J'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='J'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='T'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <HandUnderliner handLength={4} />
                      </div>
                      <div id='fullHouse' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>FULL HOUSE</p>
                                  <p className='infoText'>
                                      Often referred to as a boat, a full house rewards the player who's managed to
                                      managed to decorate their three of a kind with a pair. This mega hand's
                                      probability of occurring can be represented as,
                                  </p>
                                  <div id='fhMath'>
                                      <Math text={'\\[P(\\text{Full House}) = ' +
                                          '\\frac{C(13, 2) \\times [C(4, 3)]^2 \\times 44}{C(52, 7)}\\]'}/>
                                      <Math text={'\\[+ \\, \\frac{13 \\times C(4, 3) \\times C(12, 2) \\times ' +
                                          '[C(4, 2)]^2}{C(52, 7)}\\]'} />
                                      <Math text={'\\[ + \\, \\frac{13 \\times C(11, 2) \\times 12' +
                                          '\\times C(4, 3) \\times C(4, 3) \\times C(4, 2) \\times [C(4, 1)]^2}' +
                                          '{C(52, 7)} ≈ 2.8\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 38 hands for every full house you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          FULL HOUSE
                          <div className='blkStartCard'>
                              <HandsCardGraphic rank='A'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div id='fh2card'>
                              <HandsCardGraphic rank='A'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='9'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='9'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='9'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <HandUnderliner handLength={5} />
                      </div>
                      <div id='pair' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>PAIR</p>
                                  <p className='infoText'>
                                      This humble hand will prove to be a common starting place for many of your poker
                                      plays. A pair requires two cards of the same rank. Its probability of occurring
                                      can be represented as,
                                  </p>
                                  <div id='pMath'>
                                      <Math text={'\\[P(\\text{Pair}) = \\frac{[C(13, 6) - 71] \\times 6 \\times 6' +
                                          '\\times 990}{C(52, 7)} ≈ 43.8\\text{%}\\]'}/>

                                  </div>
                                  <p>
                                      On average, you will play about 1 hand for every pair you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          PAIR
                          <div className='redStartCard'>
                              <HandsCardGraphic rank='K'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div id='p2card'>
                              <HandsCardGraphic rank='K'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='3'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='J'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='6'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <HandUnderliner handLength={2} />
                      </div>
                      <div id='flush' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>FLUSH</p>
                                  <p className='infoText'>
                                      A killer hand that's easy on the eyes. A flush simply requires five cards of the
                                      same suit. It's probability of occurring can be represented as,
                                  </p>
                                  <div id='fMath'>
                                      <Math text={'\\[P(\\text{Flush}) = \\frac{4 \\times [C(13, 7) - 217]}' +
                                          '{C(52, 7)}\\]'}/>
                                      <Math text={'\\[+ \\, \\frac{4 \\times [C(13, 6) - 71] \\times 39}' +
                                          '{C(52, 7)} + \\frac{4 \\times [C(13, 5) - 10] \\times C(39, 2)}' +
                                          '{C(52, 7)}\\]'}/>
                                      <Math text={'\\[≈ 3.03\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 32 hands for every flush you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          FLUSH
                          <div className='redStartCard'>
                              <HandsCardGraphic rank='3'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div id='f2card'>
                              <HandsCardGraphic rank='5'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='9'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='J'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <HandUnderliner handLength={5} />
                      </div>
                      <div id='highCard' onMouseEnter={() => {
                          setHandInfoContent(
                              <div>
                                  <p className='infoTitle'>HIGH CARD</p>
                                  <p className='infoText'>
                                      A hand is only as good as your opponents think it is; The high card hand exudes
                                      this attitude as it represents the absence of a hand. It's worth is found in the
                                      rank of your highest card. It's probability of occurring can be represented as,
                                  </p>
                                  <div id='hMath'>
                                      <Math text={'\\[P(\\text{High Card}) = \\frac{1499 \\times [4^7 - 756 - 4 -84]}' +
                                          '{C(52, 7)} ≈ 17.4\\text{%}\\]'}/>
                                  </div>
                                  <p>
                                      On average, you will play about 5 hands for every high card you see.
                                  </p>
                              </div>
                          );
                          setHandInfoVisible(true);}}
                           onMouseLeave={() => setHandInfoVisible(false)}>
                          HIGH CARD
                          <div className='blkStartCard'>
                              <HandsCardGraphic rank='A'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div id='h2card'>
                              <HandsCardGraphic rank='7'/>
                              <img className='handsClubImg'
                                   src={clubImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='Q'/>
                              <img className='handsDiamondImg'
                                   src={diamondImg}/>
                          </div>
                          <div className='redCard'>
                              <HandsCardGraphic rank='T'/>
                              <img className='handsHeartImg'
                                   src={heartImg}/>
                          </div>
                          <div className='blkCard'>
                              <HandsCardGraphic rank='5'/>
                              <img className='handsSpadeImg'
                                   src={spadeImg}/>
                          </div>
                          <HandUnderliner handLength={1} />
                      </div>
                  </div>
                  <div id='strongest'>
                      Strongest
                  </div>
                  <div id='weakest'>
                      Weakest
                  </div>
                  <HandInfo content={handInfoContent}/>
              </div>
          </div>

          <div className='contentContainer' style={{display: equityContent ? 'flex' : 'none'}}>
              <div className='contentPanel'>
                  <div id='availableCards'>
                      <AvailableCardsGraphic deck={deck} index={1} hey/>



                  </div>
              </div>
          </div>
      </>
    </div>
  );
}

export default App;