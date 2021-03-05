import { useEffect, useState } from 'react';

const useCallAPI = () => {
  const [gapi, setGapi] = useState(null);

  const LoadYoutubeApi = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        // console.log(process.env.REACT_APP_API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          setGapi(window.gapi);
        });
      });
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    LoadYoutubeApi();
  }, []);

  return gapi;
};

export default useCallAPI;
