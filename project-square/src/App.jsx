import logo from './logo.svg';
import './App.css';
import Header from '/Users/reitumetse/git-repos/Accenture-Song-Project-Square/project-square/src/components/Header/Header.jsx'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>

       
      <div className="page-wrapper">

      {/* What we do Section */}
      
      <div className="what-we-do">
        <div className="sub-heading-one">
        <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="4" fill="#D100C9"/>
      </svg>
      <p className="what-we-do-text">What we do</p>
        </div>

        {/* <img src="/Users/reitumetse/git-repos/Accenture-Song-Project-Square/project-square/src/assets/images/Heading Tag.png" alt="tag"/> */}
     
      <h1>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
      <div className="container">
        <div className="web-development">
          {/* <img src="/Users/reitumetse/git-repos/Accenture-Song-Project-Square/project-square/src/assets/icons/Web Dev Icon.svg" alt="web-icon" /> */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_307_12163)">
<path d="M52.898 55.5103H11.102C5.33123 55.5103 0.653061 50.8321 0.653061 45.0613V18.9388C0.653061 13.168 5.33123 8.48985 11.102 8.48985H52.898C58.6688 8.48985 63.3469 13.168 63.3469 18.9388V45.0613C63.3469 50.8321 58.6688 55.5103 52.898 55.5103Z" stroke="#D100C9" stroke-width="2"/>
<path d="M42.449 47.6735H21.551C18.6656 47.6735 16.3265 45.3344 16.3265 42.449V21.551C16.3265 18.6656 18.6656 16.3265 21.551 16.3265H42.449C45.3344 16.3265 47.6735 18.6656 47.6735 21.551V42.449C47.6735 45.3344 45.3344 47.6735 42.449 47.6735Z" stroke="#D100C9" stroke-width="2"/>
<path d="M45.0612 63.3469H18.9388C13.168 63.3469 8.48979 58.6688 8.48979 52.8979V11.102C8.48979 5.33121 13.168 0.653046 18.9388 0.653046H45.0612C50.832 0.653046 55.5102 5.33121 55.5102 11.102V52.8979C55.5102 58.6688 50.832 63.3469 45.0612 63.3469Z" stroke="#D100C9" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_307_12163">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>
          <h4>Web development</h4>
          <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
        </div>

        <div className="user-experience">
          {/* <img src="/Users/reitumetse/git-repos/Accenture-Song-Project-Square/project-square/src/assets/icons/Web Dev Icon.svg" alt="web-icon" /> */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_307_12179)">
<path d="M37.2245 63.3469H11.1021C5.33124 63.3469 0.653076 58.6688 0.653076 52.8979V26.7755C0.653076 21.0047 5.33124 16.3265 11.1021 16.3265H37.2245C42.9953 16.3265 47.6735 21.0047 47.6735 26.7755V52.8979C47.6735 58.6688 42.9953 63.3469 37.2245 63.3469Z" stroke="#D100C9" stroke-width="2"/>
<path d="M52.898 47.6735H26.7755C21.0047 47.6735 16.3265 42.9953 16.3265 37.2245V11.102C16.3265 5.33122 21.0047 0.653053 26.7755 0.653053H52.898C58.6688 0.653053 63.3469 5.33122 63.3469 11.102V37.2245C63.3469 42.9953 58.6688 47.6735 52.898 47.6735Z" stroke="#D100C9" stroke-width="2"/>
<path d="M45.0612 55.5103H18.9387C13.1679 55.5103 8.48975 50.8321 8.48975 45.0613V18.9388C8.48975 13.168 13.1679 8.48985 18.9387 8.48985H45.0612C50.832 8.48985 55.5102 13.168 55.5102 18.9388V45.0613C55.5102 50.8321 50.832 55.5103 45.0612 55.5103Z" stroke="#D100C9" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_307_12179">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>
          <h4>User experience & design</h4>
          <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
        </div>

        <div className="user-experience">
          {/* <img src="/Users/reitumetse/git-repos/Accenture-Song-Project-Square/project-square/src/assets/icons/Web Dev Icon.svg" alt="web-icon" /> */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_307_12179)">
<path d="M37.2245 63.3469H11.1021C5.33124 63.3469 0.653076 58.6688 0.653076 52.8979V26.7755C0.653076 21.0047 5.33124 16.3265 11.1021 16.3265H37.2245C42.9953 16.3265 47.6735 21.0047 47.6735 26.7755V52.8979C47.6735 58.6688 42.9953 63.3469 37.2245 63.3469Z" stroke="#D100C9" stroke-width="2"/>
<path d="M52.898 47.6735H26.7755C21.0047 47.6735 16.3265 42.9953 16.3265 37.2245V11.102C16.3265 5.33122 21.0047 0.653053 26.7755 0.653053H52.898C58.6688 0.653053 63.3469 5.33122 63.3469 11.102V37.2245C63.3469 42.9953 58.6688 47.6735 52.898 47.6735Z" stroke="#D100C9" stroke-width="2"/>
<path d="M45.0612 55.5103H18.9387C13.1679 55.5103 8.48975 50.8321 8.48975 45.0613V18.9388C8.48975 13.168 13.1679 8.48985 18.9387 8.48985H45.0612C50.832 8.48985 55.5102 13.168 55.5102 18.9388V45.0613C55.5102 50.8321 50.832 55.5103 45.0612 55.5103Z" stroke="#D100C9" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_307_12179">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>
          <h4>Mobile development</h4>
          <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
        </div>

        <div className="user-experience">
          {/* <img src="/Users/reitumetse/git-repos/Accenture-Song-Project-Square/project-square/src/assets/icons/Web Dev Icon.svg" alt="web-icon" /> */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_307_12174)">
<path d="M47.6735 63.3469H16.3265C7.67033 63.3469 0.653076 56.3297 0.653076 47.6735V16.3265C0.653076 7.6703 7.67033 0.653046 16.3265 0.653046H47.6735C56.3297 0.653046 63.347 7.6703 63.347 16.3265V47.6735C63.347 56.3297 56.3297 63.3469 47.6735 63.3469Z" stroke="#D100C9" stroke-width="2"/>
<path d="M47.6735 63.3469H16.3265C7.67033 63.3469 0.653076 56.3297 0.653076 47.6735V16.3265C0.653076 7.6703 7.67033 0.653046 16.3265 0.653046H47.6735C56.3297 0.653046 63.347 7.6703 63.347 16.3265V47.6735C63.347 56.3297 56.3297 63.3469 47.6735 63.3469Z" stroke="#D100C9" stroke-width="2"/>
<path d="M45.0612 55.5103H18.9388C13.168 55.5103 8.48981 50.8321 8.48981 45.0613V18.9388C8.48981 13.168 13.168 8.48985 18.9388 8.48985H45.0612C50.832 8.48985 55.5102 13.168 55.5102 18.9388V45.0613C55.5102 50.8321 50.832 55.5103 45.0612 55.5103Z" stroke="#D100C9" stroke-width="2"/>
<path d="M42.449 47.6735H21.551C18.6656 47.6735 16.3265 45.3344 16.3265 42.449V21.551C16.3265 18.6656 18.6656 16.3265 21.551 16.3265H42.449C45.3344 16.3265 47.6735 18.6656 47.6735 21.551V42.449C47.6735 45.3344 45.3344 47.6735 42.449 47.6735Z" stroke="#D100C9" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_307_12174">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>
          <h4>Blockchain solutions</h4>
          <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
        </div>
      </div>
      </div>
      
      {/* Case Studies Section */}
      <div className="sub-heading-two">
        <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="4" fill="#D100C9"/>
      </svg>
      <p className="what-we-do-text">Case Studies</p>
     
      </div>
      <Cards/>

      <Footer/>

      {/* Footer Section */}
      </div>

      
    </div>
  );
}

export default App;
