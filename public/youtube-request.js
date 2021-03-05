/* global gapi */

/**
 * Sample JavaScript code for youtube.search.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function loadClient(key) {
  gapi.client.setApiKey(key);
  return gapi.client
    .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
    .then(
      function () {
        console.log('GAPI client loaded for API');
      },
      function (err) {
        console.error('Error loading GAPI client for API', err);
      }
    );
}
// Make sure the client is loaded before calling this method.
function execute(search) {
  return gapi.client.youtube.search
    .list({
      part: ['snippet', 'id'],
      maxResults: 25,
      q: search,
      type: ['video'],
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log('Response', response);
        return response.result;
      },
      function (err) {
        console.error('Execute error', err);
      }
    );
}
