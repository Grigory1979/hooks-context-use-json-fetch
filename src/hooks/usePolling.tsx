import { useState, useEffect, useRef } from "react";
import { UsePollingResult } from "../type/UsePollingResult";

export const usePolling = <T,>({
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
  const timestampRef = useRef<number>();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setIsLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        if (timestampRef.current === timestamp) {
          setData(jsonData);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [url, interval]);

  return { data, isLoading, error };
};