export default function fetchHelper(endpoint, options = {}) {
  return fetch(endpoint, options).then((response) => {
    if (response.stats >= 400) {
      throw new Error('Bad response from server');
    }

    return response.json();
  });
}
