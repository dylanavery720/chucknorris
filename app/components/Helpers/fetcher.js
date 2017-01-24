const fetcher = (endpoint, func) => {
  fetch(endpoint, {method: 'get'})
  .then(response => response.json())
  .then(data => data.value.joke)
  .then(joke => func(joke))
  // return joke;
}

export default fetcher;
