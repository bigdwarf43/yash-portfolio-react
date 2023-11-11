
function generateLevel(){
    grid = [];
    result = [];
        tryTo('generate map', function(){
        return generateTiles() == randomPassableTile().getConnectedTiles().length;
    });

    generateMonsters();

    for(let i=0;i<3;i++){                                         
        randomPassableTile().treasure = true;                            
    }

}

function generateTiles(){

    let passableTiles=0;
    tiles = [];
    
    for(let i=0;i<numTiles;i++){
        tiles[i] = [];
        grid[i] = [];
        for(let j=0;j<numTiles;j++){
            if(Math.random() < 0.3 || !inBounds(i,j)){
                tiles[i][j] = new Wall(i,j);
                grid[i][j] = 0;
            }else{
                tiles[i][j] = new Floor(i,j);
                passableTiles++;
                grid[i][j] = 1;
            
            }
        }
    }
    return passableTiles;
}

function inBounds(x,y){
    return x>0 && y>0 && x<numTiles-1 && y<numTiles-1;
}


function getTile(x, y){
    if(inBounds(x,y)){
        return tiles[x][y];
    }else{
        return new Wall(x,y);
    }
}

function randomPassableTile(){
    let tile;
    tryTo('get random passable tile', function(){
        let x = randomRange(0,numTiles-1);
        let y = randomRange(0,numTiles-1);
        tile = getTile(x, y);
        return tile.passable && !tile.monster;
    });
    return tile;
}


function generateMonsters(){
    monsters = [];
    let numMonsters = level+1;
    for(let i=0;i<numMonsters;i++){
        spawnMonster();
    }
}


function spawnMonster(tileToSpawn, monsterToSpawn){

    let monsterType;
    if(monsterToSpawn == null){
        if(level<3){
            monsterType = shuffle([Bird, Snake, Tank, Eater, Jester])[0];
            
        }
        else{
            monsterType = shuffle([Bird, Snake, Tank, Eater, Jester, Summoner])[0];
        } 
    }
    else{
    monsterType = monsterToSpawn;
    }
    // let monsterType = shuffle([Jester])[0];
    let monster;
    if(tileToSpawn== null){
         monster = new monsterType(randomPassableTile());
    }
    else{
         monster = new monsterType(tileToSpawn);
    }
    
    
    monsters.push(monster);
}