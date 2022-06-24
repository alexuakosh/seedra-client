import { useEffect, useState } from "react";

export function useFetch(uri) {
  
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState("idle");

  useEffect(() => {
    if (!uri) return;
    setLoading("loading")
    fetch(uri)
      .then(fetchedData => fetchedData.json())
      .then(setData)
      .then(() => {
        setLoading("success")
      })
      .catch(setError);
  }, [uri]);

  return [
    loading,
    data,
    error
  ];
}