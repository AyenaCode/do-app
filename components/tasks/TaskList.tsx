import { Task } from "@/types/task";
import { TaskItem } from "./TaskItem";
import { TaskFooter } from "./TaskFooter";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
      <TaskFooter tasks={tasks} />
    </>
  );
}
