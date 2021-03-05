import { useEffect, useState } from 'react';

const useImportScript = (resourceUrl) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    script.onload = () => {
      if (window.gapi) {
        window.gapi.load('client');
      }
      //this.loadClient();
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};
export default useImportScript;
