import { useEffect, useState } from "react";
import { UsePollingResult } from "../type/UsePollingResult";

const usePolling2 = <T,>({
  url,
  interval,
  initialData,
}: {
  url: string;
  interval: number;
  initialData: T[];
}): UsePollingResult<T> => {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setData(json);
      } catch (e) {
        console.error(e);
        setError(e);
      } finally {
        setIsLoading(false);

        abortController.abort();
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [url, interval]);

  return { data, isLoading, error };
};
export default usePolling2;