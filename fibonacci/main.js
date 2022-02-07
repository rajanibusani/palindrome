function fibonacci(num) {
    let result = [ 0, 1 ];
    for(let i=2; i<=num; i++){
    let prevNum1 = result[i-1];
    let prevNum2 = result[i-2];
    result.push( prevNum1 + prevNum2);
    }
    console.log(result)
    const series = document.getElementById('series')    
    series.innerText = result.join(', ')
//  return result[num];
 }

 const element = document.querySelector('form');
element.addEventListener('submit', event => {

  event.preventDefault();
  const number = element.elements['number'].value  
  console.log('input',number);
  fibonacci(number)

});