import { useTaskManager } from '@/features/taskManagement/hooks';
import { renderHook, act } from '@testing-library/react';

test('agrega una tarea correctamente', () => {
  const { result } = renderHook(() => useTaskManager([]));

  act(() => {
    result.current.addTask('Nueva tarea');
  });

  expect(result.current.tasks.length).toBe(1);
  expect(result.current.tasks[0].title).toBe('Nueva tarea');
});