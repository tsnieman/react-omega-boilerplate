// Helpers
import fetch from 'helpers/fetch';

export default function fetchUser(username) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: {
        // Accept header as per https://developer.github.com/v3/#current-version
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      // TODO how do I access response codes? i.e. 200 OK / 404 NOT FOUND.
      // TODO Maybe I need a polyfill...?
      // seems response.status doesn't work
      // console.log('STATUS', response.status);
      if (response.login === username) resolve(response);
      else reject(response);
    }).catch((err) => reject(err));
  });
}
