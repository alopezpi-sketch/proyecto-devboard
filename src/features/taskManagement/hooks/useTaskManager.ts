// Custom hook que orquesta la lógica de gestión de tareas usando useReducer
import { useReducer, useEffect } from 'react';
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

  const addTask = (title: string) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: crypto.randomUUID(),
        title,
        status: 'todo',
      },
    });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const changeStatus = (id: string, status: Task['status']) => {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: { id, status },
    });
  };

  const completedTasks = state.tasks.filter(t => t.status === 'done');

  const pendingTasks = state.tasks.filter(t => t.status !== 'done');

  const totalTasks = state.tasks.length;

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