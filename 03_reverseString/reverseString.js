const reverseString = function() {
  let inputString = "hello"
  let outputString = ""

  for (i=inputString.length;i>=0;i--){
    outputString = outputString + inputString.charAt(i);
    return outputString
  }

  inputString = "hello world"
  outputString = ""

  for (i=inputString.length;i>=0;i--){
    outputString = outputString + inputString.charAt(i);
    return outputString
  }
};

reverseString()

// Do not edit below this line
module.exports = reverseString;
