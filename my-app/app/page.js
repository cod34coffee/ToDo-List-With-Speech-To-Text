"use client";

import { useState } from "react";
import styles from "../styles/page.module.css";
import AddTaskInput from "../components/AddTaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  // State for storing the list of tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (taskInput.trim() === "") return; // Ignore empty input
    setTasks([...tasks, taskInput]);
    setTaskInput(""); // Clear the input field after adding
  };

  // Function to handle deleting a task by its index
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={styles.title}>To Do List</span>

        {/* AddTaskInput component */}
        <AddTaskInput
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          addTask={addTask}
        />
      </div>

      {/* TaskList component */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
}
