// ✅ Server Component — delega la lógica al contenedor cliente TaskListContainer
import { TaskListContainer } from "@/features/taskManagement/components/TaskListContainer";

export default function Page() {
  return <TaskListContainer />;
}