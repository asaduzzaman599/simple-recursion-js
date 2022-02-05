/* for(let i = 1; i<=5; i++){
    console.log(i);
} */


//simple incremantal loop with recursion 
function simpleRecursion(i){
    if(i==0){
        return;
    }
    simpleRecursion(i-1);
    
    console.log(i);
}

simpleRecursion(5);  //output: //1 //2 //3 //4 //5