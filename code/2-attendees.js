// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0

  let attendeeList = ''
  
  let numOfAttendees = prompt('How many attendees do you want to invite')
  while (count < numOfAttendees) {
    let attendee = prompt('Name someone you want to invite')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  // copy and paste your code here when you get to the Make step
  let count = 0
  let numOfNumbers = prompt('How many numbers do you want to add together?')
  let numberList = ''
  
  
  while (count < numOfNumbers) {
    let newNum = prompt('Name a number')
    newNum = Number(newNum)
    numberList = numberList + newNum 
    numberList = Number(numberList)
    count = count + 1
  }
  alert(numberList)
  
  let avg = (numberList / numOfNumbers)
  alert ('Your average is ' + avg)
  
}