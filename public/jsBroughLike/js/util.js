function tryTo(description, callback){
    for(let timeout=2000;timeout>0;timeout--){
        if(callback()){
            return;
        }
    }
    throw 'Timeout while trying to '+description;
}


function randomRange(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function shuffle(arr){
    let temp, r;
    for (let i = 1; i < arr.length; i++) {
        r = randomRange(0,i);
        temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
    return arr;
}



function rightPad(textArray){
    const playerName = textArray[0];
    const score = textArray[1];
    let paddedString = "";
    if(playerName){
                // Calculate the padding length to make both names equal in length
    const paddingLength = 15 - playerName.length;

    // Create the padded string
     paddedString = "User: "+ playerName.padEnd(15, ' ') +"Score: "+ score;
    
    }

    return paddedString;

}