import { useEffect, useState } from "react";
import "../Component/Styles/SliderSectionStyles.css"


const SliderSection = () => {
    const [index, setIndex] = useState(0)

    const images = [
        {
            id:1,
            img:"https://media.istockphoto.com/id/1010631724/photo/female-friends-walking-by-window-at-airport.jpg?s=612x612&w=0&k=20&c=TMR9lZK77hERqr2o1DlZFXpQQqhj3L8yTCf3GnnLUZY="
        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/497391487/photo/beautiful-sunrise-with-african-elephants-under-a-tree.jpg?s=612x612&w=0&k=20&c=PLappncsqMN9DQlw-UU30sPKdfNaPZw8DF3QEznXjkI="
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/1614797250/photo/young-woman-taking-selfie-with-maasai-woman-mount-kilimanjaro-on-background-kenya-africa.jpg?s=612x612&w=0&k=20&c=I6qp4lkrvaDdI2K9sHgJrK52cbimGSqNoSPHq_izFIQ="
        },
        {
            id:4,
            img:"https://media.istockphoto.com/id/1468433582/photo/woman-walking-on-rope-bridge-in-lush-jungles-a.jpg?s=612x612&w=0&k=20&c=mRD_eqhkt2HMMVAxANBJ2ZxtJyoIjpye3BYx6gX81WQ="
        },
        {
            id:5,
            img:"https://media.istockphoto.com/id/478170228/photo/giraffe.jpg?s=612x612&w=0&k=20&c=NsbcQfnPJP8CZO8-SOVzND5t8krIje2uaKbScR0shy8="
        },
        {
            id:6,
            img:"https://media.istockphoto.com/id/174866813/photo/aerial-view-of-victoria-falls.jpg?s=612x612&w=0&k=20&c=QsjBUF_MIhlcbqVATf-p62SIcDqh209DYCAarcw5JCE="
        },
        {
            id:7,
            img:"https://media.istockphoto.com/id/466668798/photo/recreation-and-relaxation-on-the-beach-in-mombasa-in-kenya.jpg?s=612x612&w=0&k=20&c=U9LvrSgOsUSwh2wwOf5Qs1NZfGSLohqlC_AjF5WMtMg="
        },
        {
            id:8,
            img:"https://media.istockphoto.com/id/683267076/photo/wildebeest-migration.jpg?s=612x612&w=0&k=20&c=ah3h4fIprwTQTmPd7YNdTb4ezNYA8Vdfma1w1eV87vk="
        },
        {
            id:9,
            img:"https://media.istockphoto.com/id/1415384257/photo/group-of-friends-taking-selfies-at-the-party.jpg?s=612x612&w=0&k=20&c=PKEsqnqlN0xDphZDTX2mm0GVIr62FVTz7tiEufLTfQs="
        },
        {
            id:10,
            img:"https://media.istockphoto.com/id/951280044/photo/young-man-traveler-and-photographer-taking-photo-of-oryx-a-type-of-wildlife-animal-in-african.jpg?s=612x612&w=0&k=20&c=NTBiXX3bpHbKvHc_5eTN90QOLzXGlYzMQW4gzjNPin4="
        },
        {
            id:11,
            img:"https://media.istockphoto.com/id/1405376049/photo/couple-using-mobile-phone-for-orientation-while-exploring-island.jpg?s=612x612&w=0&k=20&c=p9xSj64ig3KpXCo8TqIf_N_M5cTPpZargq8HWtm677U="
        },
        {
            id:12,
            img:"https://media.istockphoto.com/id/1445251069/photo/phone-selfie-friendship-and-car-road-trip-or-nature-safari-holiday-travel-in-africa-together.jpg?s=612x612&w=0&k=20&c=FUvRT4WhfFVp61ZLWEp00bnHUDP1Py71WPCYDRnBr7Y="
        }

    ]
    
    const {img} = images[index]
    
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    
    const Next=()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            if(newIndex>images.length-1){
             return 0;
            }
            
            return newIndex;
         })
    }
    useEffect(() => {
        const interval = setInterval(() => {
          Next();
        }, 8000); 
    
        
        return () => {
          clearInterval(interval);
        };
      }, []);
    return ( 
        <section className="slider-section">
            <div className="slider-background-image" style={backgroundStyle} >
                <div className="slider-section-text">
                    <h2>KujiaRetink  EU Techies Safari supports  youths in poverty  and refugees in Kenya to learn digital and tech skills to enable them  earn money and empower <br/> their families</h2>
                </div>
            </div>
  
        </section>
     );
}
 
export default SliderSection;