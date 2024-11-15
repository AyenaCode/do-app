import { Task } from "@/types/task";

interface TaskFooterProps {
  tasks: Task[];
}

export const TaskFooter: React.FC<TaskFooterProps> = ({ tasks }) => {
  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div style={{ marginTop: "20px", textAlign: "center", color: "#666" }}>
      {tasks.length === 0 ? (
        <p>Aucune tâche enregistrée</p>
      ) : remainingTasks === 0 ? (
        <p>Toutes les tâches sont terminées ! 🎉</p>
      ) : (
        <p>
          {remainingTasks} tâche{remainingTasks > 1 ? "s" : ""} restante
          {remainingTasks > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
};
