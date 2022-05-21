function positive(){
    let counter = 0
    let arr = [1,2,3,4,5,6,10]
    arr.filter(function(elem,index){
        if(arr[index]>arr[index-1]){
            counter++
        }
    })
    console.log(counter)
}
positive()
