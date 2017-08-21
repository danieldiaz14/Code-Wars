function stringCounter(inputS, charS){
  var string = inputS;
  var letter = charS;
  var count = 0;
  string = string.split('');
  console.log(letter +'*');
  for ( var i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] == letter) {
      count ++;
    }
  }
  return count;
}
