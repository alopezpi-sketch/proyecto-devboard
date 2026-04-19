// ✅ Client Component — UI interactiva con gestión de pestañas y state
'use client';

import { Tabs } from "@/shared/ui/molecules";
import { TaskListContainer } from "./TaskListContainer";

export function TaskManagementTabs() {
  return (
    <Tabs defaultTab="tasks">
      <Tabs.Header>
        <Tabs.Tab id="tasks">Tareas</Tabs.Tab>
        <Tabs.Tab id="projects">Proyectos</Tabs.Tab>
      </Tabs.Header>

        <Tabs.Content id="tasks">
          <TaskListContainer />
        </Tabs.Content>

        <Tabs.Content id="projects">
          <h2>No hay proyectos aún</h2>
        </Tabs.Content>
      </Tabs>
  )}