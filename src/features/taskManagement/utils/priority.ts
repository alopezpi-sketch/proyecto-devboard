import type { BadgeVariant } from '@/shared/ui/atoms/Badge';

export type TaskPriority = 'low' | 'medium' | 'high';

export const priorityToVariant: Record<TaskPriority, BadgeVariant> = {
  low: 'success',
  medium: 'warning',
  high: 'danger',
};