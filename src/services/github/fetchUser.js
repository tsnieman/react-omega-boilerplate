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
      if (response.login === username) resolve(response);
      else reject(response);
    }).catch((err) => reject(err));
  });
}
