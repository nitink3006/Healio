import { useEffect, useState } from 'react';
import { token } from '../config';
//import { toast } from 'react-toastify';

const useFetchData = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true); // Indicate loading state

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json()

        /*if (!res.ok) {
          throw new Error(result.message + ":)"); // Throw error for better handling
        }*/

        if (!res.ok) {
  if (result.message) {
    throw new Error(result.message + ":)");
  } else {
    throw new Error("Failed to fetch data. Please try again.");
  }
}

        //const fetchedData = await res.json();
        setData(result.data);
        setLoading(false)

      } catch (err) {
        setLoading(false)
        setError(err.message);
        //toast.error(error.message);
      } 
    };

    fetchData(); // Start fetching immediately
  }, [url]); // Include dependencies for re-fetching

  return {
    data, 
    loading, 
    error, 
  };
};

export default useFetchData;
