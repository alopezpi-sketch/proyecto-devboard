// ✅ Client Component — Usa useForm y useNotification (contexto), gestiona interacciones del usuario
'use client';

import { useForm } from '../hooks';
import type { Task } from '../types';
import { TaskCard } from './TaskCard';
import { Button } from '@/shared/ui/atoms';
import { useNotification } from '@/context/notification/NotificationContext';
import { useTaskSearch } from '../hooks/useTaskSearch';
import './TaskList.css';

interface Props {
  tasks: Task[];
  onChangeStatus: (id: string, status: Task['status']) => void;
  onDeleteTask: (id: string) => void;
  onAddTask: (title: string) => void;
  totalTasks: number;
  completedTasks: Task[];
  pendingTasks: Task[];
}

export const TaskListPresentation = ({
  tasks,
  onChangeStatus,
  onDeleteTask,
  onAddTask,
  totalTasks,
  completedTasks,
  pendingTasks,
}: Props) => {

  const { showNotification } = useNotification();
  const { query, setQuery, filteredTasks } = useTaskSearch(tasks);

  const { values, errors, touched, isSubmitting, handleSubmit, handleChange, reset } = useForm(
    { title: '' },
    (values) => {
      const errors: Record<string, string> = {};

      if (!values.title || !values.title.trim()) {
        errors.title = 'El título es obligatorio';
      }
      return errors;
    }
  );

  const handleAdd = async () => {
    await handleSubmit(() => {
      onAddTask(values.title);
      showNotification('Tarea agregada');
      reset();
    });
  };

  return (
    <div className="task-container">
      <div className="form-wrapper">
        <div className="form-container">
          <input
            className="form-input"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Nueva tarea"
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />

          <Button onClick={handleAdd} disabled={isSubmitting || !values.title}>
            Agregar
          </Button>
        </div>

        {touched.title && errors.title && (
          <p className="form-error">{errors.title}</p>
        )}
      </div>

      <div className="search-container">
        <input
          className="form-input search-input"
          type="text"
          placeholder="Buscar tareas"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="task-summary">
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks.length}</p>
        <p>Pendientes: {pendingTasks.length}</p>
      </div>

      {!filteredTasks.length && <p>No hay tareas disponibles</p>}

      <div className="task-list">
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onChangeStatus={onChangeStatus}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};