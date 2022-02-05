

// finding factorial with recursion 

function factorialRecursion(n){
    if(n == 0)return 1;

    return n * factorialRecursion(--n);
}

console.log(factorialRecursion(6));   // output : 720