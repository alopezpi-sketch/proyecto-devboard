// ✅ Server Component — delega la lógica al contenedor cliente TaskListContainer
import { TaskListContainer } from "@/features/taskManagement/components/TaskListContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tareas",
  description: "Administra tus tareas de forma eficiente",
  openGraph: {
    title: "Tareas",
    description: "Administra tus tareas de forma eficiente",
  },
};

export default function Page() {
  return <TaskListContainer />;
}