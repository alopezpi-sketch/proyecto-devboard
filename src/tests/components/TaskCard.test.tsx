import { Task, TaskCard } from '@/features/taskManagement';
import { render, screen, fireEvent } from '@testing-library/react';

const mockTask: Task = {
  id: '1',
  title: 'Test tarea',
  status: 'todo',
};

test('cambia estado al hacer click', () => {
  const onChangeStatus = vi.fn();
  const onDeleteTask = vi.fn();

  render(
    <TaskCard
      task={mockTask}
      onChangeStatus={onChangeStatus}
      onDeleteTask={onDeleteTask}
    />
  );

  const button = screen.getByText('Cambiar estado');
  fireEvent.click(button);

  expect(onChangeStatus).toHaveBeenCalled();
});
