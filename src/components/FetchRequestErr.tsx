import { PollingProps } from "../type/PollingProps";
import { usePolling } from "../hooks/usePolling";

const FetchRequestErr = () => {
  const { isLoading, error } = usePolling<PollingProps>({
    url: import.meta.env.VITE_LOADING_ERR,
    interval: 4 * 1000,
    initialData: [],
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
export default FetchRequestErr;