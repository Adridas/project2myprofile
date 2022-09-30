import logo from './air.png';
import facebook from './Facebook.svg';
import twitter from './Twitter.svg';
import instagram from './Instagram.svg';
import github from './GitHub.svg';
import email from './mail.png';
import link from './in.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="picture">
        <img src={logo} className="picture" alt="airidas"/>
      </div>
      <div className="main">
        <h1 className="name">Airidas Kirstukas</h1>
        <h3 className="tag-line">Frontend Developer</h3>
        <p className="my-website">www.airIdas.co.uk</p>
        <div className="social-buttons">
        <a href="mailto:"><button className="email"><img src={email} alt="email" height = "10px"/>Email</button></a>
        <a href="https://www.linkedin.com/in/airidas-kirstukas-34256a18a/"><button className="Linkedin"><img src={link} alt="linkedin" height = "10px"/>LinkedIn</button></a>
        </div>
        <h2 className="subheadline">About</h2>
        <p className="paragraph about">I am a frontend developer with a particular interest in making things simple and automating daily tasks.
         I try to keep up with security and best practices, and am always looking for new things to learn.
        </p>
        <h2 className="subheadline" >Interest</h2>
        <p className="paragraph interest" >
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
        Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <div className="footer">
      <a href="https://www.facebook.com/Airidas7878"><img src={facebook} className="footer-social" alt="facebook"/></a>
      <a href="https://twitter.com/AiridasWord"><img src={twitter} className="footer-social" alt="twitter" /></a>
      <a href="https://www.instagram.com/adridas111/"><img src={instagram} className="footer-social" alt="instagram" /></a>
      <a href="https://github.com/Adridas"><img src={github} className="footer-social" alt="github" /></a>
      </div>

    </div>
  );
}

export default App;


// {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}