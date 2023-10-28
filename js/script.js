/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array with ten quotes, some have citation and/or year and some don't
***/

const quotes = [ 
  {"quote": "You may say I'm a dreamer, but I'm not the only one",
  "source": "John Lennon",
  "citation": "Imagine",
  },
  {"quote": "I believe I can fly, I believe I can touch the sky",
  "source": "R. Kelly",
  "citation": "I Believe I Can Fly",
  "year": "1996"
  },
  {"quote": "It's something unpredictable, but in the end, it's right. I hope you had the time of your life",
  "source": "Green Day",
  "citation": "Good Riddance",
  "year": "1997"
  },
  {"quote": "You're beautiful, it's true",
  "source": "James Blunt",
  "citation": "You're Beautiful",
  },
  {"quote": "I'm starting with the man in the mirror. I'm asking him to change his ways",
  "source": "Michael Jackson",
  "citation": "Man in the Mirror",
  "year": "1988"
  },
  {"quote": "Cause you're a sky, 'cause you're a sky full of stars. I'm gonna give you my heart",
  "source": "Coldplay",
  "year": "2014"
  },
  {"quote": "You can't always get what you want, but if you try sometimes, well, you might find, you get what you need",
  "source": "The Rolling Stones",
  "citation": "You Can't Always Get What You Want",
  },
  {"quote": "I've paid my dues, time after time. I've done my sentence but committed no crime",
  "source": "Queen",
  "year": "1977"
  },
  {"quote": "And in the end, the love you take is equal to the love you make",
  "source": "The Beatles",
  "citation": "The End",
  "year": "1969"
  },
  {"quote": "I wanna dance with somebody, I wanna feel the heat with somebody",
  "source": "Whitney Houston",
  "year": "1987"
  }
];


/***
 * `getRandomQuote` function, it takes a random number from 1 to the length of the objects array above
 *  and uses it to return a random quote 
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function stores the random quote object in the variable randomQuote and then builds the html required
 * to show the quote on the page. Finally it takes the html snippet it wrote and puts it in the 'quote-box'
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);