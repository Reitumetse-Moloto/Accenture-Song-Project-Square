import React from 'react';
import './Cards.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Carousel } from 'antd';

const Cards = () => (

   <div className="case-studies-container">
      <div className="desktopView">
         <div className="the-olympian">
            <div className="the-olympian-text">
               <svg
                  width="40"
                  height="4"
                  viewBox="0 0 40 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect width="40" height="4" fill="#D100C9" />
               </svg>
               <h3>The Olympian</h3>
               <p className="case-study-paragraph">
                  The only athlete in the world to do her Olympic routine in 2020.
               </p>
            </div>
         </div>

         <div className="the-savings-jar">
            <div className="savings-jar-text">
               <svg
                  width="40"
                  height="4"
                  viewBox="0 0 40 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect width="40" height="4" fill="#D100C9" />
               </svg>
               <h3>The Savings Jar</h3>
               <p className="case-study-paragraph">
                  Grow your savings treasure and grow your dragon.
               </p>
            </div>
         </div>

         <div className="skhokho-semali">
            <div className="skhokho-semali-text">
               <svg
                  width="40"
                  height="4"
                  viewBox="0 0 40 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect width="40" height="4" fill="#D100C9" />
               </svg>
               <h3>Skhokho seMali</h3>
               <p className="case-study-paragraph">
                  Helping South Africans become #CashCleva with Skhokho and
                  TymeBank.
               </p>
            </div>
         </div>
      </div>

      {/* Mobile view slider */}
      <div className="mobileView">
         <div style={{
            display: 'block', width: 357, padding: 0
         }}>
            <>
               <Carousel arrows infinite={false}>
                  <div className="the-olympian">
                     <div className="the-olympian-text">
                        <svg
                           width="40"
                           height="4"
                           viewBox="0 0 40 4"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width="40" height="4" fill="#D100C9" />
                        </svg>
                        <h3>The Olympian</h3>
                        <p className="case-study-paragraph">
                           The only athlete in the world to do her Olympic routine in 2020.
                        </p>
                     </div>
                  </div>

                  <div className="the-savings-jar">
                     <div className="savings-jar-text">
                        <svg
                           width="40"
                           height="4"
                           viewBox="0 0 40 4"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width="40" height="4" fill="#D100C9" />
                        </svg>
                        <h3>The Savings Jar</h3>
                        <p className="case-study-paragraph">
                           Grow your savings treasure and grow your dragon.
                        </p>
                     </div>
                  </div>

                  <div className="skhokho-semali">
                     <div className="skhokho-semali-text">
                        <svg
                           width="40"
                           height="4"
                           viewBox="0 0 40 4"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <rect width="40" height="4" fill="#D100C9" />
                        </svg>
                        <h3>Skhokho seMali</h3>
                        <p className="case-study-paragraph">
                           Helping South Africans become #CashCleva with Skhokho and
                           TymeBank.
                        </p>
                     </div>
                  </div>
               </Carousel>
            </>
         </div>
      </div>

   </div>
);

export default Cards;