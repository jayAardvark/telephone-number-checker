function telephoneCheck(str) {
  let regexOne = /^\d{3}-\d{3}-\d{4}/;
  let regexTwo = /^1\s\d{3}-\d{3}-\d{4}/;
  let regexThree = /^1\s\(\d{3}\)\s\d{3}-\d{4}/;
  let regexFour = /^\d{10}$/;
  let regexFive;
  let regexSix = /^\(\d{3}\)\d{3}-\d{4}/;
  let regexSeven = /^1\(\d{3}\)\d{3}-\d{4}/;
  let regexEight = /^1\s\d{3}\s\d{3}\s\d{4}/;
  let result = regexOne.test(str);
  let resultTwo = regexTwo.test(str);
  let resultThree = regexThree.test(str);
  let resultFour = regexFour.test(str);
  let resultSix = regexSix.test(str);
  let resultSeven = regexSeven.test(str);
  let resultEight = regexEight.test(str);
  
  console.log(result)
  console.log(resultTwo)
  console.log(resultThree)
  console.log(resultFour);
  console.log(resultSix);
  console.log(resultSeven);
  console.log(resultEight);

  if (result === true || resultTwo === true || resultThree === true || resultFour === true || resultSix === true || resultSeven === true || resultEight === true){
    return true
  }else{
    return false;
  }
  
}

telephoneCheck("27576227382");

/*
Freewrite before trying to solve:
  It seems obvious that regular expressions will have to be used.  Think about how to use them exactly.  That is, do I use them to check for tests?  Do I have to "match" my regular expressions?  Do I use them for splitting strings?  It seems, at this point, that the most important thing to do first is to think about the best way to apply regular expressions (since I currently kinda suck at them!).
  On the other hand, I have a vaguely formed idea that it might be able to solve the challenge with merely if-statement conditionals.  For example, converting the string to an array and checking that no oddly placed parentheses, or something similar, exist where they should not be in the array...

  **Do something about regexFour because it is allowing undesired numbers to pass the function as "true".
    
*/
