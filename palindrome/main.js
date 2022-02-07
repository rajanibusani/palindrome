console.log("hello world");
// PROBLEM:- Write a function that will check the string is a palindrome or not.

const element = document.querySelector('form');
element.addEventListener('submit', event => {

  event.preventDefault();
const word = element.elements['word'].value
// const bcd = document.getElementById('word').value
  
  console.log('input',word);
  debugger
  const reverseWord = word.toLowerCase().split('').reverse().join('')
  const result =document.getElementById('result')
  if (word === reverseWord){
      return result.innerText = "True"
  }else{
    return result.innerText = "False"
  }
});
