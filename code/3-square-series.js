// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  // write your code here
  let num = prompt ('What number do you want the square series for?')
  num = Number(num)
  let squareSeries = ''

  while (num > 0){
     square = num * num
     squareSeries = (squareSeries + square + ', ')
     num = num - 1
  }

  alert('The Square Series is ' + squareSeries )
}
