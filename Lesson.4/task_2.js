function minimal(n, count=0){
    for(let i = 2; i<=n; i++){
        if(n%i==0){
            count++
        }
    }
    console.log(count)
}
minimal(32)