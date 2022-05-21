function Input(a, asd) {
    var string;
    if (asd.search(a) != -1) {
      string = ' содержит ';
    } else {
      string = ' не содержит ';
    }
    console.log(asd + string + a);
  }
  
  var testString  = 'hey JuDe';
  
  Input(a, testString)