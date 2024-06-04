export type UsePollingResult<T> = {
    data: T[];
    isLoading: boolean;
    error: Error | null;
  };