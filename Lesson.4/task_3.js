function plus(){
    let arr = [1,2,3,4,5]
   let arr1 = arr.filter(function(elem,index){
        if(index%2==0){console.log(elem)}
    })
}
plus()
