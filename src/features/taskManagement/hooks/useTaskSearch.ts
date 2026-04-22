import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";
import { Task } from "../types";

export function useTaskSearch(tasks: Task[]) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [tasks, debouncedQuery]);

  return {
    query,
    setQuery,
    filteredTasks,
  };
}