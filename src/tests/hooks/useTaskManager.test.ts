import { useTaskManager } from '@/features/taskManagement/hooks';
import type { Task } from '@/features/taskManagement/types';
import { renderHook, act } from '@testing-library/react';

const initial: Task[] = [
  { id: '1', title: 'Test', status: 'todo' }
];

test('debe agregar una tarea correctamente', () => {
  const { result } = renderHook(() => useTaskManager([]));

  act(() => {
    result.current.addTask('Nueva tarea');
  });

  expect(result.current.tasks.length).toBe(1);
  expect(result.current.tasks[0].title).toBe('Nueva tarea');
});

it('cambia el estado de una tarea', () => {
  const { result } = renderHook(() => useTaskManager(initial));

  act(() => {
    result.current.changeStatus('1', 'done');
  });

  expect(result.current.tasks[0].status).toBe('done');
});
