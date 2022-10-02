import email from './mail.png';
import link from './in.png';
import './App.css';

function Main() {
    return (
        <div className="main">
            <h1 className="name">Airidas Kirstukas</h1>
            <h3 className="tag-line">Frontend Developer</h3>
            <p className="my-website">www.airIdas.co.uk</p>
            <div className="social-buttons">
            <a href="mailto:airidas.kirstukas@gmail.com"><button className="email"><img src={email} alt="email" height = "10px"/>Email</button></a>
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
    )
}
export default Main;