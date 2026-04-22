import { renderHook } from '@testing-library/react';
import { useDebounce } from '@/features/taskManagement/hooks/useDebounce';

it('debe devolver el valor debounced después del retraso', () => {
  const { result } = renderHook(() => useDebounce('test', 300));

  expect(result.current).toBe('test');
});