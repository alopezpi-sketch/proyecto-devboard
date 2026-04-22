import { render, screen } from '@testing-library/react';
import { TaskListPresentation } from '@/features/taskManagement/components/TaskListPresentation';
import { AppProviders } from '@/app/AppProviders';

it('renderiza el estado vacío', () => {
    render(
        <AppProviders>
            <TaskListPresentation
                tasks={[]}
                onAddTask={() => { }}
                onChangeStatus={() => { }}
                onDeleteTask={() => { }}
                totalTasks={0}
                completedTasks={[]}
                pendingTasks={[]}
            />
        </AppProviders>
    );

    expect(screen.getByText(/No hay tareas/i)).toBeInTheDocument();
});