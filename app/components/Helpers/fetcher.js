
const fetcher = (endpoint, func, jokenumber) => {
  jokenumber ?
  fetch(endpoint + '/' + jokenumber)
  .then(response => response.json())
  .then(data => data.value)
  .then(array => array.map(i => i.joke))
  .then(jokes => func(jokes)) : fetch(endpoint)
    .then(response => response.json())
    .then(data => data.value.joke)
    .then(joke => func(joke))
}


export default fetcher;
