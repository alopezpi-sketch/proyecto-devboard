// Custom hook para manejar operaciones asincrónicas con manejo de AbortSignal
import { useEffect, useState } from 'react';

export function useAsync<T>(
  asyncFunction: (signal: AbortSignal) => Promise<T>,
  dependencies: React.DependencyList = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const run = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncFunction(signal);

        if (!signal.aborted) {
          setData(result);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err as Error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      controller.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  
  return { data, loading, error };
}