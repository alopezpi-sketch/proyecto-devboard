# 📋 DevBoard

Gestor de tareas construido con **Next.js 16** y **React 19**.

## ✨ Características

- ✅ Gestión de tareas (crear, editar, eliminar, cambiar estado)
- ✅ Cambio de tema claro/oscuro
- ✅ Validación de formularios y notificaciones
- ✅ TypeScript en modo strict
- ✅ Tailwind CSS 4

## 🚀 Inicio Rápido

```bash
# Instalar
npm install

# Desarrollo
npm run dev

# Producción
npm run build && npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas y layouts
├── context/               # Estado global (tema, notificaciones)
├── features/              # Features (taskManagement, projects)
│   ├── components/
│   ├── hooks/
│   ├── state/
│   ├── types.ts
│   └── utils/
└── shared/ui/             # Componentes reutilizables (atoms, molecules)
```

## 🎯 Patrones Clave

### Server vs Client Components

```tsx
// ✅ Server Component (default)
export default function Page() {
  return <ClientComponent />;
}

// ✅ Client Component
'use client';
export function ClientComponent() {
  const [state, setState] = useState();
  return ...;
}
```

### Container/Presentation

```tsx
// Container: lógica
export const TaskContainer = () => {
  const { tasks, addTask } = useTaskManager(data);
  return <TaskPresentation tasks={tasks} onAdd={addTask} />;
};

// Presentation: UI
export const TaskPresentation = ({ tasks, onAdd }) => (
  <div>{tasks.map(t => <TaskCard key={t.id} task={t} />)}</div>
);
```

## 📦 Stack Tecnológico

- **Next.js 16.2.4** - Framework React
- **React 19** - Librería UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 4** - Estilos
- **ESLint** - Linting de código

## 🐛 Problemas Comunes

| Problema | Solución |
|----------|----------|
| `useContext must be used within a Provider` | Envuelve en Provider |
| `Cannot use hooks outside Client Component` | Agrega `'use client'` |
| Estilos no se aplican | Importa CSS en el componente |

## 📚 Recursos

- [Docs Next.js](https://nextjs.org/docs)
- [Docs React](https://react.dev)
- [Docs TypeScript](https://www.typescriptlang.org/docs/)
- [Docs Tailwind](https://tailwindcss.com/docs)

---

**Versión:** 1.0.0 | **Estado:** En Desarrollo ⚙️

[📖 Documentation in English](./README.md)
