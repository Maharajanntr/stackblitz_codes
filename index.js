// Import stylesheets
import './style.css';

// Write Javascript code!

// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

var number = 6;

function matchHouses(house) {
  if (house == 0) {
    return 0;
  } else {
    let matchSticks = house == 1 ? number : number + (house - 1) * 5;
    return matchSticks;
  }
}

console.log(matchHouses(5));

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
