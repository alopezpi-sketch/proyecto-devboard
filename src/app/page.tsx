// ✅ Server Component — solo renderiza HTML
import { TaskManagementTabs } from "@/features/taskManagement/components/TaskManagementTabs";
import { ThemeButton } from "@/shared/ui/molecules";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de tareas",
  description: "Aplicación de gestión de tareas",
  openGraph: {
    title: "Gestión de tareas",
    description: "Aplicación de gestión de tareas",
  },
};

export default function Home() {
  return (
    <div className="app-container">
      <div className="header">
        <div className="flex items-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
            alt="Task icon"
            width={28}
            height={28}
          />

          <h1 className="app-title inline-flex items-center">Gestión de tareas</h1>
        </div>

        <ThemeButton />

      </div>

      <TaskManagementTabs />
    </div>
  );
}