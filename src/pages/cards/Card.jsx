import React from 'react'
import Styles from '../cards/Card.module.css'

function Card() {


  const cards = [
    { src: "../images/card/card1.png", text: " Grey Jean with Black belt"},
    { src: "../images/card/card2.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card3.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card4.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card5.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card6.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card7.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card8.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card9.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card10.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card11.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card12.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card13.png", text: "Grey Jean with Black belt" },
    { src: "../images/card/card14.png", text: "Grey Jean with Black belt" }
  ];


  return (
    <>
      <div className={Styles.main_cards}>
        <div className={Styles.card_container}>

    <div className={Styles.main_cards}>
      {cards.map((card, index) => (
        <div className={Styles.card} key={index}>
          <img className={Styles.img} src={card.src} alt={`Card ${index + 1}`} />
          <p className={Styles.text}>{card.text}</p>
        </div>
      ))}
    </div>

        
        </div>
      </div>
    </>
  );
}

export default Card;
