function elefent(x1,y1,x2,y2){
if(Math.abs(x1-x2)==Math.abs(y1-y2)){
    return "Yes"
}
return "No"
}
console.log(elefent(1,3,2,2))