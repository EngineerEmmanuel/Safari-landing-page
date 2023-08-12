import { useState } from "react";


const SliderSection = () => {
    const [index, setIndex] = useState(0)

    const images = [
        {
            id:1,
            img:"https://images.pexels.com/photos/3943882/pexels-photo-3943882.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/1223690610/photo/tropical-island-and-coral-reef-split-view-with-waterline.jpg?s=612x612&w=0&k=20&c=Gux9T4ckpvGG-wEiN9fIede1Xd_H3cd-iL8BOXIK8HE="
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/1483009085/photo/lake-island.jpg?s=612x612&w=0&k=20&c=AMQsc4TrhXuUf76OQx9oPamoaIk7S-5J0ZR5pMGL-sw="
        }
    ]
    
    const {img} = images[index]
    const backgroundStyle ={
        backgroundImage: ` url(${img})`,
        height:"70vh",
        width:"100%",
        backgroundRepeat:"noRepeat",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        maxWidth:"100%",
        imageRendering: "pixelated"
    }
    const Prev =()=>{
        setIndex((index)=>{
            let newIndex = index -1;
            if(newIndex<0){
                return images.length-1;
            }
            return newIndex
          
        })

    }
    const Next=()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            if(newIndex>images.length-1){
             return 0;
            }
            
            return newIndex;
         })
    }
    return ( 
        <section className="slider-section">
            <div className="slider-background-image" style={backgroundStyle}>
                <div className="slider-section-text">
                    <h2>KujiaRetink  EU techies Safari supports  youths in poverty  and refugees in Kenya to learn digital and tech skills to enable them  earn money and empower their families</h2>
                </div>
            </div>
            <div className="left-arrow" onClick={Prev}> &larr;</div>
            <div className="right-arrow" onClick={Next}> &rarr;</div>
        </section>
     );
}
 
export default SliderSection;