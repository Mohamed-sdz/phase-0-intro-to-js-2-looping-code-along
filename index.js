function writeCards(namesArray, eventName) {
  const cards = [];
  for (let i = 0; i < namesArray.length; i++) {
    cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}



