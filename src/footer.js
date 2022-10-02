import facebook from './Facebook.svg';
import twitter from './Twitter.svg';
import instagram from './Instagram.svg';
import github from './GitHub.svg';
import './App.css';


function Footer() {
    return (
        <div className="footer">
            <a href="https://www.facebook.com/Airidas7878"><img src={facebook} className="footer-social" alt="facebook"/></a>
            <a href="https://twitter.com/AiridasWord"><img src={twitter} className="footer-social" alt="twitter" /></a>
            <a href="https://www.instagram.com/adridas111/"><img src={instagram} className="footer-social" alt="instagram" /></a>
            <a href="https://github.com/Adridas"><img src={github} className="footer-social" alt="github" /></a>
        </div>
    )
}
export default Footer;