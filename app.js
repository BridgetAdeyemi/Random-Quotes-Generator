let button = document.getElementById("Btn");
let output = document.getElementById("output");

// array that hold all the quotes
let quotes = [
  '"Believe you can and youu are halfway there." - Theodore Roosevelt',
  '"The future belongs to those who believe in the beauty of their dreams." - leanor roosevelt',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
  '"Do not watch the clock; do what it does. Keep going." - Sam Levenson',
  '"You miss 100% of the shots you do not take." - Wayne Gretzky',
  '"I have not failed. I have just found 10,000 ways that will not work." - Thomas Edison',
  '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
  '"The best way to predict your future is to create it." - Abraham Lincoln',
  '"Do something today that your future self will thank you for." - Unknown',
  '"Happiness can be found even in the darkest of times if one only remembers to turn on the light." - Albus Dumbledore',
  '"You do not have to be great to start, but you have to start to be great." - Zig Ziglar',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"Keep your eyes on the stars, and your feet on the ground." - Theodore Roosevelt',
  '"You are stronger than you seem, braver than you believe, and smarter than you think." - Christopher Robin',
  '"The biggest risk is not taking any risk..." - Mark Zuckerberg',
  '"I alone cannot change the world, but I can cast a stone across the waters to create many ripples." - Malala Yousafzai',
  '"You get in life what you have the courage to ask for." - Oprah Winfrey',
  '"The biggest adventure you can take is to live the life of your dreams." - Oprah Winfrey',
  '"Do not let yesterday take up too much of today." - Will Rogers',
  '"It does not matter how slowly you go as long as you do not stop." - Confucius',
  '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
  '"The secret of getting ahead is getting started." – Mark Twain',
  '"The best is yet to come." - Robert Browning',
  '"Do not let what you cannot do interfere with what you can do." - John Wooden',
  '"And in the end, it is not the years in your life that count. It is the life in your years." - Abraham Lincoln',
  '"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer',
  '"Success is walking from failure to failure with no loss of enthusiasm." – Winston Churchill',
  '"Perseverance is not a long race; it is many short races one after the other." – Walter Elliot',
];

// add evenlistener to the button
button.addEventListener("click", function () {
  let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuotes;
});
