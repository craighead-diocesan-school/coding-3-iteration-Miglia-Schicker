// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {

  let seqNum = prompt ('What number do you want the fibonacci Sequence up to?')
  seqNum = Number(seqNum)
  let first = 0
  let second = 1
  let fibNum = 0
  let sequence = ''

  while(fibNum < seqNum ){
    fibNum = first + second
    first = second
    second = fibNum
    sequence = sequence + fibNum + ', ' 
    
  }

  alert('The Fibonacci Sequence is 0, 1, ' + sequence)
}
