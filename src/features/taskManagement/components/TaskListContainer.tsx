// ✅ Client Component — Contenedor que orquesta useCallback, useAsync, useTaskManager y gestiona el ciclo de carga de datos
'use client';

import { useCallback, lazy, Suspense } from 'react';
import { TASKS_DATA } from '../utils/data';
import { useAsync, useTaskManager } from '../hooks';

const TaskListPresentation = lazy(() =>
  import('./TaskListPresentation').then(module => ({
    default: module.TaskListPresentation
  }))
);

export const TaskListContainer = () => {

  const fetchTasks = useCallback(async (signal: AbortSignal) => {
    await new Promise(res => setTimeout(res, 1000));

    if (signal.aborted) throw new Error('Aborted');

    return TASKS_DATA;
  }, []);

  const { data, loading, error } = useAsync(fetchTasks, [fetchTasks]);
  const { tasks, addTask, changeStatus, deleteTask, completedTasks, pendingTasks, totalTasks } = useTaskManager(data ?? []);

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Suspense fallback={<p>Cargando componente...</p>}>
      <TaskListPresentation
        tasks={tasks}
        onAddTask={addTask}
        onChangeStatus={changeStatus}
        onDeleteTask={deleteTask}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
        totalTasks={totalTasks}
      />
    </Suspense>
  );
};