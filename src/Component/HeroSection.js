import heroImage from "./Images/stock-photo-smiling-african-american-woman-shirt-removebg-preview.png"
import RubberBand from 'react-reveal/RubberBand';
const HeroSection = () => {
    return ( 
        <section>
            <div className="hero-text-con">
                <h1>THE ONLY SAFARI FOR TECHIES<br/>SUPPORTING NEW TECHIES</h1>
                <p>Your safari makes it possible for a Kenyan youth from the slum<br className="break-tag"/>or shanties to learn digital skills that helps take them off poverty</p>
                <RubberBand>
                <div className="hero-btn-con">
                    <button><a href="http://safarisales.retinkmedia.com/">Book Trip Now</a></button>
                    
                </div>
                </RubberBand>
                
            </div>
            <div className="hero-img-con">
                <img src={heroImage} alt="" />
            </div>
        </section>
     );
}
 
export default HeroSection;