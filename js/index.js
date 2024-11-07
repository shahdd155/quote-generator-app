
var quoteList = [
    {
        quote: '"Resentment is like drinking poison and waiting for your enemies to die."',
        author: "--Nelson Mandela"
    },
    {
        quote: '"The best revenge is massive success."',
        author: "--Frank Sinatra"
    },
    {
        quote: '"Be the change that you wish to see in the world."',
        author: "― Mahatma Gandhi"
    },
    {
        quote: '"You only live once, but if you do it right, once is enough."',
        author: "― Mae West"
    },
    {
        quote: '"It is better to be hated for what you are than to be loved for what you are not."',
        author: "― Andre Gide"
    },
    {
        quote: '"Resentment is like drinking poison and waiting for your enemies to die."',
        author: "--Nelson Mandela"
    }
];


var cartona='';
function generateNewQuote(){
    var randomQuote = quoteList[Math.floor(Math.random()* quoteList.length)];
   cartona = `
   <p class="quote fs-2  pt-4">${randomQuote.quote}</p>
   <p class="quoteauthor fs-2  pt-4">${randomQuote.author}</p>
   `

    document.getElementById('quote-display').innerHTML = cartona;
}