function positive(){
    let counter = 0
    let arr = [1,2,3,-1,-4]
    arr.filter(function(elem,index){
        if(index % 2 ==0){
            counter++
        }
    })
    console.log(counter)
}
positive()