import { useState, useEffect } from 'react';

export const useFetch = (key, apiRequest) => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!key) return;

    apiRequest()
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsloading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { data, isloading, error };
};
