// ✅ Client Component — Componente interactivo con event handlers (onClick) que disparan acciones del usuario
'use client';

import { Card } from '@/shared/ui/molecules';
import { Badge, Button } from '@/shared/ui/atoms';
import type { Task } from "../types";
import { taskStatusToVariant } from "../utils/taskStatus";
import { STATUS_LABELS } from "../utils/data";
import './TaskCard.css';

interface Props {
    task: Task;
    onChangeStatus: (id: string, status: Task['status']) => void;
    onDeleteTask: (id: string) => void;
}

export const TaskCard: React.FC<Props> = ({ task, onChangeStatus, onDeleteTask }) => {

    const nextStatus =
        task.status === 'todo'
            ? 'in-progress'
            : task.status === 'in-progress'
                ? 'done'
                : 'todo';

    return (
        <Card>
            <div className="card-header">
                <h3 className="card-title">{task.title}</h3>

                <Badge
                    label={STATUS_LABELS[task.status]}
                    variant={taskStatusToVariant[task.status]}
                />
            </div>

            <div className="card-actions">
                <Button
                    onClick={() =>
                        onChangeStatus(task.id, nextStatus)
                    }
                >
                    Cambiar estado
                </Button>

                <Button
                    variant="danger"
                    onClick={() =>
                        onDeleteTask(task.id)
                    }
                >
                    Eliminar
                </Button>
            </div>
        </Card>
    );
}