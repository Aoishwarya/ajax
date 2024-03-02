let buttonTwo = document.getElementById('two');
let divTwo = document.getElementsByTagName('div')[0];

buttonTwo.addEventListener('click',()=>{

   fetch('https://icanhazdadjoke.com',{
   headers:{"Accept":"application/json"}})


 .then(response => {
    return response.json()
 })

 .then(jokeObject => {
    return jokeObject.joke.toUpperCase();
 })
 .then(joke => {

    divTwo.innerText = joke;
 })
 .catch(e => {

    console.log('oh no man,there is an error',e);
 })

})