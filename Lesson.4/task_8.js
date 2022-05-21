function secondElement(){
    let counter = 0
    let arr = [1,-3,4,-2,1]
    let array = arr.filter(function(elem,index){
        if(arr[index]>0 && arr[index+1]>0 && arr[index-1]>0 ||
            arr[index]<0 && arr[index+1]<0 && arr[index-1]<0
            ){
        counter++
        }
    })
   if(counter>0){console.log("Yes")}
   else{console.log("No")}
}
secondElement()