// ✅ Server Component — solo renderiza HTML
import { TaskManagementTabs } from "@/features/taskManagement/components/TaskManagementTabs";
import { ThemeButton } from "@/shared/ui/molecules";

export default function Home() {
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="app-title">Gestión de tareas</h1>
        <ThemeButton />
      </div>
      <TaskManagementTabs />
    </div>
  );
}