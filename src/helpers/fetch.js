import { default as isomorphicFetch } from 'isomorphic-fetch';

export default function fetch(endpoint, options = {}) {
  return isomorphicFetch(endpoint, options).then((response) => {
    if (response.stats >= 400) {
      throw new Error('Bad response from server');
    }

    return response.json();
  });
}
