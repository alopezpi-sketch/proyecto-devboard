// Custom hook que orquesta la lógica de gestión de tareas usando useReducer
import { useReducer, useEffect, useCallback, useMemo } from 'react';
import { taskReducer, initialState } from '../state/taskReducer';
import { Task } from '../types';

export const useTaskManager = (initialTasks: Task[]) => {

  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    if (initialTasks.length > 0) {
      dispatch({
        type: 'SET_TASKS',
        payload: initialTasks,
      });
    }
  }, [initialTasks]);

  const addTask = useCallback((title: string) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: crypto.randomUUID(),
        title,
        status: 'todo',
      },
    });
  }, []);

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }, []);

  const changeStatus = useCallback((id: string, status: Task['status']) => {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: { id, status },
    });
  }, []);

  const completedTasks = useMemo(
    () => state.tasks.filter(t => t.status === 'done'),
    [state.tasks]
  );

  const pendingTasks = useMemo(
    () => state.tasks.filter(t => t.status !== 'done'),
    [state.tasks]
  );

  const totalTasks = useMemo(
    () => state.tasks.length,
    [state.tasks]
  );

  return {
    tasks: state.tasks,
    addTask,
    deleteTask,
    changeStatus,
    completedTasks,
    pendingTasks,
    totalTasks
  };
};