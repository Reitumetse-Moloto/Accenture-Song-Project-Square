import React from 'react';
import './Footer.css';

const Footer = () => (
   <div className="footer-container">
   {/* Contact Us Section */}
   <div className="contact-us">
     <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect width="40" height="4" fill="#D100C9" />
     </svg>
     <p className="what-we-do-text">Contact Us</p>
   </div>
 
   {/* Footer Main Section */}
   <div className="footer-main">
     {/* Footer Section One */}
     <div className="footer-section-one">
       <h1>Have a project in mind?<br /> Let's make it happen</h1>
       <address>
         22 Street Name, Suburb, 8000,<br /> Cape Town, South Africa<br />
         +27 21 431 0001<br />
         <a href="mailto:enquirie@website.co.za">enquirie@website.co.za</a>
       </address>
     </div>
 
     {/* Footer Section Two */}
     <div className="footer-section-two">
       <div className="links-group">
         <p><a href="#Terms-of-service">Terms of Service</a></p>
         <p><a href="#Privacy-policy">Privacy Policy</a></p>
         <p><a href="#Impressum">Impressum</a></p>
       </div>
       
       <div className="links-group">
         <p><a href="#Facebook">Facebook</a></p>
         <p><a href="#Instagram">Instagram</a></p>
         <p><a href="#Twitter">Twitter</a></p>
       </div>
 
       <div className="links-group">
         <p><a href="#Youtube">YouTube</a></p>
         <p><a href="#Behance">Behance</a></p>
         <p><a href="#Dribble">Dribble</a></p>
       </div>
 
       <div className="links-group">
         <p><a href="#Explore-open-jobs">Explore Open Jobs</a></p>
         <p>© 2000-2023 Media Solutions</p>
       </div>
     </div>
   </div>
 </div>
 
);

export default Footer;