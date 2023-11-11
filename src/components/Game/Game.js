import "./Game.css"
import Broughlike from "../Broughlike/Broughlike";


const Game = () => 
        <div className="flex-container-Game">
             <div className='game-container' >
                <div style={{width: "400px", height: "397px"}}>
                    <Broughlike />
                </div>
            </div>


            <div className="game-text-container">
                <h1 >
                    I am an Engineer
                </h1>
                <h1>
                    A Game Developer
                </h1>
                <h1>
                    And a Storyteller!
                </h1>
            </div>



           





        </div>

export default Game;
