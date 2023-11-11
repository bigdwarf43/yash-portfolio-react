spells  = {
    WOOP: function(){
        player.move(randomPassableTile());
    },

    QUAKE: function(){
        for(let i =0 ;i< numTiles; i++){
            for(let j=0; j<numTiles; j++){
                let tile = getTile(i, j);
                if(tile.monster){
                    let numwalls = 4 - tile.getAdjacentPassableNeighbors().length;
                    tile.monster.hit(numwalls * 2);
                }
            }
        }
        shakeAmount = 20
    },

    MAELSTORM: function(){
        for(let i=0; i<monsters.length; i++){
            monsters[i].move(randomPassableTile());
            monsters[i].teleportCounter = 2;
        }
    },


    // AURA: function(){
    //     // player.heal(1);
    //     player.tile.getAdjacentNeighbors().forEach(function(t){
    //         t.setEffect(13);
    //         if(t.monster){
    //             t.monster.damage(1);
    //             t.monster.teleportCounter = 2;
    //         }
    //     });
    //     player.tile.setEffect(13);
        
        
    // },

    // DASH: function(){
    //     let newTile = player.tile;
    //     while(true){
    //         let testTile = newTile.getNeighbor(player.lastMove[0],player.lastMove[1]);
    //         if(testTile.passable && !testTile.monster){
    //             newTile = testTile;
    //         }else{
    //             break;
    //         }
    //     }

    //     if(player.tile != newTile){
    //         player.move(newTile);
    //         newTile.getAdjacentNeighbors().forEach(t => {
    //             if(t.monster){
    //                 t.setEffect(14);
    //                 t.monster.stunned = true;
    //                 t.monster.hit(1);
    //             }
    //         });
    //     }
    // },


    DIG: function(){
        for(let i=0; i<numTiles; i++){
            for(let j=0; j<numTiles; j++){
                let tile = getTile(i, j);
                if(!tile.passable){
                    tile = tile.replace(Floor);
                } 
            }
        }
        player.tile.setEffect(13);
        // player.heal(2);
    },

    // KINGMAKER: function(){
    //     for(let i=0; i<monsters.length;i++){
    //         monsters[i].heal(1);
    //         monsters[i].tile.treasure = true;
    //     }
    // },

    // ALCHEMY: function(){
    //     player.tile.getAdjacentNeighbors().forEach(function(t){
    //         if(!t.passable && inBounds(t.x, t.y)){
    //             t.replace(Floor).treasure = true;
    //         }
    //     })
    // },

    POWER: function(){
        player.bonusAttack = 5;
    },



    BRAVERY: function(){
        player.shield = 2;
        for(let i=0;i<monsters.length;i++){
            monsters[i].stunned = true;
        }
    },

    BOLT: function(){
        boltTravel(player.lastMove, 15 + Math.abs(player.lastMove[1]), 4);
    },

    CROSS: function(){
        let directions = [[0, 1],
                        [0, -1],
                        [1, 0],
                        [-1, 0]]
        for(let k=0; k<directions.length; k++){
            boltTravel(directions[k], 15 + Math.abs(directions[k][1]), 2);
        }
    },

    EX: function(){
        let directions = [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ];
        for(let k=0;k<directions.length;k++){
            boltTravel(directions[k], 14, 3);
        }
    }

};


function boltTravel(direction, effect, damage){
    let newTile = player.tile;
    while(true){
        let testTile = newTile.getNeighbor(direction[0], direction[1]);
        if(testTile.passable){
            newTile = testTile;
            if(newTile.monster){
                newTile.monster.hit(damage);
            }
            newTile.setEffect(effect);
        }else{
            break;
        }
    }
}