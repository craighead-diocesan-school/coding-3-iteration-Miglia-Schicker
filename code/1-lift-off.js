// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {

  let count = prompt('Pick a number')
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {

let max = prompt('Enter a maximum number')

let increment = prompt('Enter the increment')
let count = 0
max = Number(max)
increment = Number(increment)
while (count <= max){
alert(count)
 leftover = max - count
count = count + increment
}

  alert('Done with ' + leftover +' leftover!')


}
