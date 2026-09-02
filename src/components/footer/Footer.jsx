import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
return (
<footer className="footer">
<div className="footer-container">
<div className="footer-section">
<h2 className="footer-logo">COSMO</h2>
<p>Discover the latest technology, electronics, gadgets and accessories all in one place.</p>
</div>

            <div className="footer-section">
                <h3 className='foot-head'>Categories</h3>
                <ul>
                    <li><Link to="/categorypage/mobiles">Mobiles</Link></li>
                    <li><Link to="/categorypage/laptops">Laptops</Link></li>
                    <li><Link to="/categorypage/cameras">Cameras</Link></li>
                    <li><Link to="/categorypage/audio">Audio</Link></li>
                    <li><Link to="/categorypage/gaming">Gaming</Link></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3 className='foot-head'>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3 className='foot-head'>Connect With Us</h3>
                <p>📧 support@cosmo.com</p>
                <p>📍 Chennai, India</p>
                <div className="social-icons">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2026 COSMO. All Rights Reserved.</p>
        </div>
    </footer>
);

}

export default Footer;