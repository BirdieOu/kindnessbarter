let btn = document.getElementById("getaQuote");
let quoteText = document.getElementById("token");
let textarea = document.getElementById("input");

btn.addEventListener("click", evt => {
    textarea.parentNode.removeChild(textarea)
    btn.parentNode.removeChild(btn)
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let quote = data[Math.floor(Math.random() * data.length)];
            quoteText.innerText = `${quote.text}\n- ${quote.author}`;
        })
        .catch(error => {
         console.log("Sorry.There's an error.");
         console.error(error);
    });
});
