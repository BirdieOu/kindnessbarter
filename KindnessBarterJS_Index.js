let btn = document.getElementById("getaQuote");
let quoteText = document.getElementById("token");
let textarea = document.getElementById("input");

btn.addEventListener("click", evt => {
    textarea.parentNode.removeChild(textarea)
    btn.parentNode.removeChild(btn)
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteText.innerText = `${data.content}\n- ${data.author}`;
        })
        .catch(error => {
         console.log("Sorry.There's an error.");
         console.error(error);
    });
});