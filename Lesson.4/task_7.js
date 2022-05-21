function biger(){
    let arr = [1,5,1,5,1]
    let counter = 0 
    let arr1 = arr.filter(function(elem,index){
        if(arr[index]>arr[index-1] && arr[index]>arr[index+1]){
            counter++
        }
    }) 
    console.log(counter)
}
biger()