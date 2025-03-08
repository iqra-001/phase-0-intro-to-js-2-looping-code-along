function writeCards(namesArray, eventName) {
  let messages = [];
  
  for (let i = 0; i < namesArray.length; i++) {
    messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}

// Example usage
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
console.log(writeCards(names, event));


function countDown(startNumber) {
    for (let i = startNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage
  countDown(5);
  