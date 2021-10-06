let underScore = "_";


function kebabCaseConverter(string) {
  if ( string.includes( (?=.*[A-Z]) )) {
    return "The text contains capital letters";
  } else if (string.includes(underScore)) {
    return "The contains underscores";
  } else if ( string === "") {
    return "You must provide some text";
  }
  
}



describe("Function caseConvert", function() {
  
})