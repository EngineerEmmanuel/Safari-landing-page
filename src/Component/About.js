import RubberBand from 'react-reveal/RubberBand';

const About = () => {
    return ( 
        <section>
            <div className="about-text-con">
                <p>KujiaRetink is open to partnership: Partnering with local tech <br/>companies and startups to provide learners with exposure to <br/>industry trends and best practices, as well as networking <br/>opportunities and potential job placements.</p>
                <RubberBand>
                <div className="about-btn-con">
                    <button> <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUqb6rir7x7Z3SlSt0ZUHHHPc1jSaCmuk4_2VjSdfEmo04sg/viewform" style={{color:"white"}}>Partner With Us</a></button>
                </div>
                </RubberBand>
                
            </div>
        </section>
     );
}
 
export default About;