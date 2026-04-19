// ✅ Client Component — Contenedor que orquesta useCallback, useAsync, useTaskManager y gestiona el ciclo de carga de datos
'use client';

import { useCallback } from 'react';
import { TaskListPresentation } from './TaskListPresentation';
import { TASKS_DATA } from '../utils/data';
import { useAsync, useTaskManager } from '../hooks';


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

  return (<TaskListPresentation
    tasks={tasks}
    onAddTask={addTask}
    onChangeStatus={changeStatus}
    onDeleteTask={deleteTask}
    completedTasks={completedTasks}
    pendingTasks={pendingTasks}
    totalTasks={totalTasks}
  />
  );
};