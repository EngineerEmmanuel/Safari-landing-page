import kujiaLogo from "./Images/355443429_224217057121720_7508926847034413107_n.jpg"
import kampusLogo from "./Images/Logonew.png";

import mainLogo from "./Images/main-logo.jpg";
const Footer = () => {
    return ( 
        <footer>
            <h2>Partners</h2>

            <div className="footer-logos-con">
                <img src="https://retink.io/LOGO.svg" alt="" />
                <img src={kujiaLogo} alt="Kujai logo"  />
                <img src={kampusLogo} alt="Kampus logo" />
                
            </div>
            <div className="footer-con">
                <div className="footer-last-logo">
                    <img src={mainLogo} alt="A logo" />
                </div>
                <div className="safari-business">
                    <h4>KujiaRetink Safari</h4>
                    <ul>
                        <li>Become a Partner</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div className="career">
                    <h4>Help</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Help and Support</li>
                        <li>Investors</li>
                    </ul>
                </div>
                <div className="terms">
                    <h4>Terms</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Cookies Settings</li>
                        <li>Sitemap</li>
                        <li>Accessibility Statement</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="last-footer-con">
                <p>kujiaretinksafari 2023</p>
                <ul>
                    <li> <a href="https://youtube.com/@retinkmedia"><i class="fa-brands fa-youtube"></i></a></li>
                    <li> <a href="https://www.facebook.com/retinkmedia/"><i class="fa-brands fa-facebook"></i></a></li>
                    <li> <a href="@RetinkMedia"><i class="fa-brands fa-twitter"></i></a></li>
                    <li> <a href="https://www.tiktok.com/@retinkmedia?_t=8e7rqNu9Gze&_r=1"><i class="fa-brands fa-tiktok"></i></a></li>
                    <li> <a href="https://instagram.com/retinkmedia?igshid=MmIzYWVlNDQ5Yg=="><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;