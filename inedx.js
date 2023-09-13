const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const btn = document.getElementById("new-quote");

const allQuotes = [
    {
        quote: "Don’t be afraid to give up the good to go for the great",
        peron: "JOHN D. ROCKIFELLER"
    },
    {
        quote: "When everything seems to be going against you, remember that the aeroplane takes off against the wind and not with it",
        peron: "HENRY FORD"
    },
    {
        quote: "Life is a long lesson in humility",
        peron: "JAMES M. BARRIE"
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success",
        peron: " THOMAS EDISON"
    },
    {
        quote: "You become what you believe",
        peron: "OPRAH WHINFREY"
    },
    {
        quote: "An unexamined life is not worth living",
        peron: "SOCRATES"
    },
    {
        quote: "Too many of us are not living our dreams coz we are linving our fears",
        peron: "LES BROWN"
    },
    {
        quote: "Whatever the mind of a man can conceive and believe, it can achieve",
        peron: "NAPOLEAN HILL"
    },
    {
        quote: " Life is 10% what happens to me and 90% how I react to it",
        peron: "CHARLES AwINDOL"
    }
];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()* allQuotes.length)
    quote.innerText = allQuotes[random].quote
    person.innerText = allQuotes[random].peron
})

