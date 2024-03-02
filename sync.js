let buttonFour = document.getElementById('four');
let divFour = document.getElementsByTagName('div')[0];

buttonFour.addEventListener('click', displayJoke);

function displayJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://icanhazdadjoke.com", false); // false for synchronous request
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();

    if (xhr.status === 200) {
        const jokeObject = JSON.parse(xhr.responseText);
        const lowercaseJoke = jokeObject.joke.toUpperCase();
        divFour.innerHTML = lowercaseJoke;
    } else {
        console.error("Error fetching joke:", xhr.status);
    }
}
