import { TaskContainer } from "@/components/tasks/TaskContainer";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Ma Liste de Tâches</h1>
      <TaskContainer />
    </div>
  );
}
