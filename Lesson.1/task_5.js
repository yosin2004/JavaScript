function maxs(a,b,c){
    if(a>=b && a>=c){
        return a
    }
    else if(b>=a && b>=c){
        return b
    }
    return c
}
console.log(maxs(12,54,112))