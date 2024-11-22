import React from 'react';
import './Cards.css';

const Cards = () => (
   <div className="case-studies-container">
   <div className="the-olympian">
     <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="4" fill="#D100C9"/>
      </svg>
     <h3>The Olympian</h3>
     <p className="case-study-paragraph">The only athlete in the world to do her Olympic routine in 2020.</p>
   </div>

   <div className="the-savings-jar">
     <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="4" fill="#D100C9"/>
      </svg>
     <h3>The Savings Jar</h3>
     <p className="case-study-paragraph">Grow your savings treasure and grow your dragon.</p>
   </div>

   <div className="skhokho-semali">
   <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="4" fill="#D100C9"/>
      </svg>
     <h3>Skhokho seMali</h3>
     <p className="case-study-paragraph">Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
   </div>

 </div>
);

export default Cards;
