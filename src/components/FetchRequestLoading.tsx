import { usePolling } from "../hooks/usePolling";
import { PollingProps } from "../type/PollingProps";

const FetchRequestLoading = () => {
  const { data, isLoading, error } = usePolling<PollingProps>({
    url: import.meta.env.VITE_LOADING_LOAD,
    interval: 7 * 1000,
    initialData: [],
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.map((item, index) => (
        <div key={index}>
          <div>{item.status}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchRequestLoading;