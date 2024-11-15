import { Button } from "@/components/ui/button";

interface TaskFilterProps {
  currentFilter: "all" | "completed" | "todo";
  onFilterChange: (filter: "all" | "completed" | "todo") => void;
}

export function TaskFilter({ currentFilter, onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant={currentFilter === "all" ? "default" : "outline"}
        onClick={() => onFilterChange("all")}
      >
        Toutes
      </Button>
      <Button
        variant={currentFilter === "todo" ? "default" : "outline"}
        onClick={() => onFilterChange("todo")}
      >
        À faire
      </Button>
      <Button
        variant={currentFilter === "completed" ? "default" : "outline"}
        onClick={() => onFilterChange("completed")}
      >
        Terminées
      </Button>
    </div>
  );
}
