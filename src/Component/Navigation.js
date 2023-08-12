import { useState } from "react";


const Navigation = () => {
    const [isMobile,setIsMobile] = useState(false);

    window.addEventListener("resize", ()=>{
        if(window.innerWidth>771 & isMobile === true){
            setIsMobile(false)
        }
    })
    return ( 
        <section>
            <nav>
                <div className="nav-con">
                    <div className="logo-con">
                        <img src="https://retink.io/LOGO.svg" alt="A logo" />
                    </div>
                    <ul>
                        <li>Home</li>
                        <li> <a href="https://retink.io/about/">About</a></li>
                        <li> <a href="https://retinkmedia.com/sponsor-a-techie/">Sponsorship</a></li>
                        <li>Blog</li>
                    </ul>
                    <button> <a href="https://retinkmedia.com/sponsor-a-techie/" style={{color:"white"}}>Support a Techie</a></button>
                    <div className="mobile-icon" onClick={()=> setIsMobile(!isMobile)}>
                        {isMobile? <i class="fa-solid fa-xmark"></i>:  <i class="fa-solid fa-bars"></i>}
                   
                </div>
                </div>
                { isMobile &&
                    <div className="mobile-nav-con">
                        <ul onClick={()=> setIsMobile(!isMobile)}>
                            <li>Home</li>
                            <li> <a href="https://retink.io/about/">About</a></li>
                            <li> <a href="https://retinkmedia.com/sponsor-a-techie/">Sponsorship</a></li>
                            <li>Blog</li>
                        </ul>
                        <button> <a href="https://retinkmedia.com/sponsor-a-techie/" style={{color:"white"}}>Support a Techie</a></button>
                    </div>
                }
            </nav>
        </section>
     );
}
 
export default Navigation;