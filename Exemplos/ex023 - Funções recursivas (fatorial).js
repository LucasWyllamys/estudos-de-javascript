function fatorial(num) {
    if (num == 1) {   //Se !1 = 1
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1 = 120    ou      5! = 5 x 4! = 120

obs.: !1 = 1

ou seja ---> n! = n x (n-1)!

*/