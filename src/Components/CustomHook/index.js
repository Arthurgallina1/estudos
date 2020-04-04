import React, { useState, useEffect } from 'react';
/* eslint-disable */

export default function useFetch(url, options) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    })();
  }, [url, options]);

  return [loading, response];
}
