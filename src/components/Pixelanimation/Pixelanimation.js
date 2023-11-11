import Spritesheet from 'react-responsive-spritesheet';

const Pixelanimation = () => {
    return(
        <div style={{overflow: "hidden"}}>
        <Spritesheet
            image={`${process.env.PUBLIC_URL}/cat2.png`}
            widthFrame={512}
            heightFrame={292}
            steps={8}
            fps={12}
            direction="forward"
            autoplay="true"
            loop="true"
            
            />

        </div>
    )
        
    
}

export default Pixelanimation