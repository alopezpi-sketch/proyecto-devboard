import { AppProviders } from '@/app/AppProviders';
import { TaskListContainer } from '@/features/taskManagement/components/TaskListContainer';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('../../features/taskManagement/hooks/useAsync', () => ({
  useAsync: () => ({
    data: [],
    loading: false,
    error: null,
  }),
}));

test('agrega una tarea desde la UI', async () => {
  render(
    <AppProviders>
      <TaskListContainer />
    </AppProviders>
  );

  const input = await screen.findByPlaceholderText('Nueva tarea');
  const button = await screen.findByText('Agregar');

  fireEvent.change(input, { target: { value: 'Tarea integración' } });
  fireEvent.click(button);

  expect(await screen.findByText('Tarea integración')).toBeInTheDocument();
});