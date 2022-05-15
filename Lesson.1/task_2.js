function Year(a){
  if(a % 4 ==0 && a % 400 == 0){
      return "Yes"
  }
  return "No"
}
console.log(Year(2000))