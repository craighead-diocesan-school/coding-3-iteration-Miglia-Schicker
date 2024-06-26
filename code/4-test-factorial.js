// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // write your code here
  let factNum = prompt ('What number do you want the Factorial for?')
  factNum = Number(factNum)
  let fact = 1

  while (factNum > 0){
    fact = fact * factNum
    factNum = factNum - 1
  }

 alert('The Factorial is ' + fact)
}
