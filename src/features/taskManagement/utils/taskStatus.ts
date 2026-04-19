import type { BadgeVariant } from '@/shared/ui/atoms/Badge';
import type { Task } from '../types';

export const taskStatusToVariant: Record<Task['status'], BadgeVariant> = {
  todo: 'neutral',
  'in-progress': 'warning',
  done: 'success',
};