"use client";

import { useState, useEffect } from "react";
import { TaskType } from "@/types/task";
import { TaskInput } from "./TaskInput";
import { TaskFilter } from "./TaskFilter";
import { TaskList } from "./TaskList";
import { TaskFooter } from "./TaskFooter";

export function TaskContainer() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [filter, setFilter] = useState<"all" | "completed" | "todo">("all");

  // Vérifier si nous sommes côté client
  useEffect(() => {
    setIsClient(true);
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      // Convertir les dates string en objets Date
      const tasksWithDates = parsedTasks.map(
        (task: Omit<TaskType, "createdAt"> & { createdAt: string }) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        })
      );
      setTasks(tasksWithDates);
    }
  }, []);

  // Sauvegarder dans localStorage
  useEffect(() => {
    if (isClient && tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  const addTask = (title: string) => {
    const task: TaskType = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, task]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "todo") return !task.completed;
    return true;
  });

  return (
    <div className="flex flex-col gap-6">
      <TaskInput onAdd={addTask} />
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <TaskFooter tasks={tasks} />
    </div>
  );
}
