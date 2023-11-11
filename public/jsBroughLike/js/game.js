function setupCanvas(){
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = tileSize*(numTiles);
    canvas.height = tileSize*numTiles;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
   
    ctx.imageSmoothingEnabled = false;
}

function drawSprite(sprite, x, y){
    ctx.drawImage(
        spritesheet,
        sprite*16,
        0,
        16,
        16,
        x*tileSize + shakeX,
        y*tileSize + shakeY,
        tileSize,
        tileSize
    );
}

function draw(){
    if(gameState == "running" || gameState == "dead"){  
        ctx.clearRect(0,0,canvas.width,canvas.height);

        screenshake();

        for(let i=0;i<numTiles;i++){
            for(let j=0;j<numTiles;j++){
                getTile(i,j).draw();
            }
        }

        for(let i=0;i<monsters.length;i++){
            monsters[i].draw();
        }

        player.draw();
       
    }
}

function tick(){
    for(let k=monsters.length-1;k>=0;k--){
        if(!monsters[k].dead){
            monsters[k].update();
        }else{
            monsters.splice(k,1);
        }
    }

    player.update();

    if(player.dead){    
        // addScore(score, playerName);
        gameState = "dead";
    }

    spawnCounter--;
    if(spawnCounter <= 0){  
        if(monsters.length >= 10 ){
            gameState="dead";
        }
        spawnMonster();
        spawnCounter = spawnRate;
        spawnRate--;
    }
}

function showTitle(){                         
    ctx.clearRect(0, 0, canvas.width, canvas.height);       
          
    ctx.fillStyle = 'rgba(0,0,0,.75)';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    gameState = "title";

    drawText("THE BRAVE LITTLE DWARF!", 50, true, canvas.height/2 , "white", "VT323, monospace");
    // drawText("BROUGH BROS.", 70, true, canvas.height/2 - 50, "white");
    // drawScores(); 
}

function showWinOrLoseScreen(gameWon){   
    
    gameState = "deadScreen";
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    // if(gameWon==true){
    //     drawText("You Won!", 40, true, canvas.height/2 - 150, "white", "Papyrus, serif");
    // }else{
    //     drawText("You Lost!", 40, true, canvas.height/2 - 150, "white", "Papyrus, serif");
    // }
    drawText("GO GO LITTLE DWARF!", 50, true, canvas.height/2 , "white", "VT323, monospace");
    // drawText("BROUGH BROS.", 70, true, canvas.height/2 - 50, "white");
    
    

    // drawScores(); 

   
}

function startGame(){                                           
    level = 1;
    score = 0;
    numSpells = 9;
    startLevel(startingHp);

    gameState = "running";
}

function startLevel(playerHp, playerSpells){ 
    spawnRate = 15;              
    spawnCounter = spawnRate;  

    generateLevel();

    player = new Player(randomPassableTile());
    player.hp = playerHp;

    if(playerSpells){
        player.spells = playerSpells;
    } 

    player.exitTile = randomPassableTile();
    player.exitTile.replace(Exit); 
}

function drawText(text, size, centered, textY, color, fontFamily){
    ctx.fillStyle = color;
    if(fontFamily!=null){
        ctx.font = size + "px "+fontFamily;
    }
    else{
    ctx.font = size + "px Arial";

    }
    let textX;
    if(centered){
        textX = (canvas.width-ctx.measureText(text).width)/2;
    }else{
        textX = canvas.width-uiWidth*tileSize+25;
    }

    ctx.fillText(text, textX, textY);
}

function getScores(){
    if(localStorage["scores"]){
        return JSON.parse(localStorage["scores"]);
    }else{
        return [];
    }
}

function addScore(score, playerName){
    let scores = getScores();
    let scoreObject = { score: score, player: playerName };
    scores.push(scoreObject);

    // Sort the scores in descending order
    scores.sort((a, b) => b.score - a.score);

    // Keep only the top three scores
    scores = scores.slice(0, 3);

    // Save the updated scores to local storage
    localStorage["scores"] = JSON.stringify(scores);
}

// function drawScores(){
//     let scores = getScores();
//     if(scores.length){
//         drawText(
//             "HIGHSCORES",
//             18,
//             true,
//             canvas.height/2 + 140,
//             "white",
//             "Papyrus, serif"
//         );

//         // let newestScore = scores.pop();
//         scores.sort(function(a,b){
//             return b.totalScore - a.totalScore;
//         });
//         // scores.unshift(newestScore);

//         for(let i=0;i<Math.min(3,scores.length);i++){
//             let scoreText = rightPad([scores[i].player, scores[i].score]);
//             drawText(
//                 scoreText,
//                 18,
//                 true,
//                 canvas.height/2 + 180+i*24,
//                 i == 0 ? "aqua" : "violet",
//                 "Papyrus, serif"
//             );
//         }
//     }
// }

function screenshake(){
    if(shakeAmount){
        shakeAmount--;
    }
    let shakeAngle = Math.random()*Math.PI*2;
    shakeX = Math.round(Math.cos(shakeAngle)*shakeAmount);
    shakeY = Math.round(Math.sin(shakeAngle)*shakeAmount);
}

