
const fetcher = (endpoint, func, jokenumber) => {
  jokenumber ?
  fetch(endpoint)
  .then(response => response.json())
  .then(data => data.value)
  .then(array => array.map(i => Object.assign(i.joke, { fave: false })))
  .then(jokes => func(jokes)) : fetch(endpoint)
    .then(response => response.json())
    .then(data => data.value.joke)
    .then(joke => func(joke))
}


export default fetcher;
