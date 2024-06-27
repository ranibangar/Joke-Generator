
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const getJoke = async () => {
    
    setLoading(true);
    setError(null)

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    getJoke();
  }, []);

  return { data, loading, error, getJoke };
};

export default useFetch;

