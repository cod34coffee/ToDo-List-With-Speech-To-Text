"use client";

import TaskCard from "./TaskCard";

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div className="mt-9 flex flex-col gap-3 items-center justify-center">
      {tasks.length === 0 && <p>No tasks added yet.</p>} {/* Show message when no tasks */}
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
