// const fetcher = (endpoint, func) => {
  // fetch(endpoint, {method: 'get'})
  // .then(response => response.json())
  // .then(data => data.value.joke)
  // .then(joke => func(joke))
//   // return joke;
// }
const fetcher = (endpoint, func, jokenumber) => {
  jokenumber ?
  fetch(endpoint + '/' + jokenumber, {method: 'get'})
  .then(response => response.json())
  .then(data => data.value)
  .then(array => array.map(i => i.joke))
  .then(jokes => func(jokes)) :   fetch(endpoint, {method: 'get'})
    .then(response => response.json())
    .then(data => data.value.joke)
    .then(joke => func(joke))
  // return joke;
}


export default fetcher;
