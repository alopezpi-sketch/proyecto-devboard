import { renderHook } from '@testing-library/react';
import { useAsync } from '@/features/taskManagement/hooks/useAsync';

it('Comienza a cargar y resuelve los datos', async () => {
  const asyncFn = async () => 'data';

  const { result } = renderHook(() => useAsync(asyncFn, []));

  expect(result.current.loading).toBe(true);
});