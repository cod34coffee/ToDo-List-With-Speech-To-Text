"use client";

import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import styles from "../styles/page.module.css";

export default function AddTaskInput({ taskInput, setTaskInput, addTask }) {
  return (
    <div className="flex gap-3 mt-9">
      {/* Input field for adding new tasks */}
      <Input
        isRequired
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add your next task here."
        className={styles.inputTask}
      />
      {/* Add button */}
      <Link
        isExternal
        className={buttonStyles({
          color: "primary",
          radius: "md",
          variant: "shadow",
        })}
        onClick={addTask}
      >
        <Image width={50} className="addButton" alt="Add Task" src="././Button.svg" />
      </Link>
    </div>
  );
}
