export default function TasksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Gestión de Tareas</h1>
            <div>{children}</div>
        </div>
    );
}