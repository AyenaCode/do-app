"use client";

import { useState } from "react";
import { Task } from "@/types/task";
import { TaskInput } from "./TaskInput";
import { TaskFilter } from "./TaskFilter";
import { TaskList } from "./TaskList";

export function TaskContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "todo">("all");

  const addTask = (title: string) => {
    const task: Task = {
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
    </div>
  );
}
