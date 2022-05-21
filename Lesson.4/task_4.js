function juft(){
    let arr = [1,2,3,4,5]
    arr.filter(function(elem,index){
        if(elem%2==0){
            console.log(elem)
        }
    })
}
juft()