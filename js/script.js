/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [ 
  {"quote": "You may say I'm a dreamer, but I'm not the only one",
  "source": "John Lennon",
  "citation": "Imagine",
  "year": "1971"
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
  "year": "2004"
  },
  {"quote": "I'm starting with the man in the mirror. I'm asking him to change his ways",
  "source": "Michael Jackson",
  "citation": "Man in the Mirror",
  "year": "1988"
  },
  {"quote": "Cause you're a sky, 'cause you're a sky full of stars. I'm gonna give you my heart",
  "source": "Coldplay",
  "citation": "A Sky Full of Stars",
  "year": "2014"
  },
  {"quote": "You can't always get what you want, but if you try sometimes, well, you might find, you get what you need",
  "source": "The Rolling Stones",
  "citation": "You Can't Always Get What You Want",
  "year": "1969"
  },
  {"quote": "I've paid my dues, time after time. I've done my sentence but committed no crime",
  "source": "Queen",
  "citation": "We Are the Champions",
  "year": "1977"
  },
  {"quote": "And in the end, the love you take is equal to the love you make",
  "source": "The Beatles",
  "citation": "The End",
  "year": "1969"
  },
  {"quote": "I wanna dance with somebody, I wanna feel the heat with somebody",
  "source": "Whitney Houston",
  "citation": "I Wanna Dance with Somebody",
  "year": "1987"
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}</p>
  <p class="citation">${randomQuote.citation}</p>
  <p class="year">${randomQuote.year}</p>
  `;

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);