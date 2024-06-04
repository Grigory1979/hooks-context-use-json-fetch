import { PollingProps } from "../type/PollingProps";
import usePolling2 from "../hooks/usePolling2";

const FetchRequestOk = () => {
  const { data, isLoading, error } = usePolling2<PollingProps>({
    url: import.meta.env.VITE_LOADING_OK,
    interval: 5 * 1000,
    initialData: [],
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div>{JSON.stringify(data)}</div>
      <div>{data.status}</div>
    </div>
  );
};

export default FetchRequestOk;