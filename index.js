let contestants = ['Rock','Paper','Scissors'];

let line = document.getElementById('picked');
let comp =document.getElementById('computer');
let result = document.getElementById('result');
 
console.log(randomNumber);
function pick(){
    let lNo = Math.floor(Math.random()*3);
 let cNo = Math.floor(Math.random()*3);
 let res = '';

line.innerHTML = `You got ${contestants[lNo]}.`;
comp.innerHTML = `Computer got ${contestants[cNo]}.`;






if(lNo == 0 && cNo == 1){
    res = "Paper beats rock, you lose." ;
}
else if(lNo == 1 && cNo == 0){
    res = "Paper beats rock, you won."; 
}
else if(lNo == 0 && cNo == 2){
    res = "Rock  beats scissors, you won."; 
}
else if(lNo == 2 && cNo == 0){
    res = "Rock  beats scissors, you lose."; 
}
else if(lNo == 1 && cNo == 2){
    res = "Scissors  cuts paper, you lose.";
}
else if (lNo == 2 && cNo == 1){
    res = "Scissors  cuts paper, you won.";
}
else{
    res = "It's even.";
}

result.innerHTML = res;


}