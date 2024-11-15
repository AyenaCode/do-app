import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <Card className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
        />
        <p
          className={`${
            task.completed ? "line-through text-gray-500" : ""
          } break-words`}
        >
          {task.title}
        </p>
      </div>
      <Button variant="destructive" size="sm" onClick={() => onDelete(task.id)}>
        Supprimer
      </Button>
    </Card>
  );
}
