// HarshitJoshi9152 https://github.com/HarshitJoshi9152
// Friday, January 8, 2021 at 11:23:14 PM GMT+5:30 
// javascript 

// Memoized Fibonacci https://www.codewars.com/kata/529adbf7533b761c560004e5 
// category: refactoring 
// rank: 5 kyu 

/*
### Problem Context

The [Fibonacci](http://en.wikipedia.org/wiki/Fibonacci_number) sequence is traditionally used to explain tree recursion.  

javascript
function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}


This algorithm serves welll its educative purpose but it's [tremendously inefficient](http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.2), not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. `fibonacci(n-2)`) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. `fibonacci(n-1)`).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to **implement the memoization solution**. This will be cool because it will let us *keep using the tree recursion* algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function that using  a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function? 

 

const log = console.log;
log("working")
var fibonacci = function(n) {
    // log(n)
    let mem = {};
    if(n==0 || n == 1) { 
        return n;
    } else if (mem.n) {
        return mem.n
    }
    let result = fibonacci(n-1) + fibonacci(n-2);
    mem[n] = result;
    return result;
}

let ans = fibonacci(2);
log(ans);*/



let mem = {};
var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    if(mem[n]) return mem[n]
    let result = fibonacci(n-1) + fibonacci(n-2);
    mem[n] = result;
    return result;
}

// timing...
// for (let i of [ ...Array(10001).keys()]) {
//     console.time(`fib no ${i}`);
//     let ans = fibonacci(i);
//     console.log(i,'\t', ans);
//     console.timeEnd(`fib no ${i}`);
// }

// oh and i used codewars-solve for this one yeah!!
// https://github.com/HarshitJoshi9152/codewars-solve