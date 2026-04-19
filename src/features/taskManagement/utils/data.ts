import type { Task } from '../types';

export const STATUS_LABELS: Record<Task['status'], string> = {
  todo: 'Pendiente',
  'in-progress': 'En progreso',
  done: 'Completada',
};

export const TASKS_DATA: Task[] = [
  {
    id: '1',
    title: 'Solucionar el error de inicio de sesión',
    status: 'todo',
  },
  {
    id: '2',
    title: 'Construir la interfaz del usuario',
    status: 'done',
  },
];