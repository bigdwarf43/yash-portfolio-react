import { useState } from 'react';
import Spritesheet from 'react-responsive-spritesheet';


const Pixelanimation = () => {
    const images = ['cat1.png', 'cat2.png', 'cat3.png', 'cat4.png', 'cat5.png']; // Add your image names here
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const getNextIndex = () => (currentIndex + 1) % images.length;

    return(
        <div style={{overflow: "hidden", width: "400px", height:"250px", justifyItems:"center"}}>
        <Spritesheet 
            image={`${process.env.PUBLIC_URL}/${images[currentIndex]}`}
            widthFrame={512}
            heightFrame={292}
            steps={8}
            fps={12}
                        
            direction="forward"
            autoplay="true"
            loop="true"
            isResponsive="true"
            onClick={() =>
                        {
                           setCurrentIndex(getNextIndex());
                    }
                }
            />

        </div>
    )
    
}





export default Pixelanimation