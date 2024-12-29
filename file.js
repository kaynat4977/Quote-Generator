const quotes = [
    "Success is not the key to happiness. Happiness is the key to success.- Albert Schweitzer" ,
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. -C.S. Lewis" ,
    "The only way to do great work is to love what you do – Steve Jobs"
]
  const quoteElement = document.getElementById('quote');
  const generateButton = document.getElementById('generate');
  
  generateButton.onclick= () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  };