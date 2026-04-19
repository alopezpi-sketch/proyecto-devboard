import { Task } from "../types";

export type State = {
  tasks: Task[];
};

export type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'CHANGE_STATUS'; payload: { id: string; status: Task['status'] } }
  | { type: 'SET_TASKS'; payload: Task[] };

export const initialState: State = {
  tasks: [],
};

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload),
      };

    case 'CHANGE_STATUS':
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id
            ? { ...t, status: action.payload.status }
            : t
        ),
      };
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      throw new Error(`Acción no soportada: ${(action as any).type}`);
  }
}