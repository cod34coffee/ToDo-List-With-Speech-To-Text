"use client";

import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import styles from "../../styles/page.module.css"

export default function AddTaskInput({ taskInput, setTaskInput, addTask }) {
  const [isListening, setIsListening] = useState(false);

  // Function to handle speech-to-text API call
  const handleSpeechToText = async () => {
    setIsListening(true);
    try {
      // Make a POST request to Flask backend
      const response = await fetch('http://localhost:5000/speech-to-text', {
        method: 'POST',
      });
      const data = await response.json();
      setIsListening(false);

      if (response.ok) {
        // Set the recognized speech as the task input
        setTaskInput(data.speech_text);
      } else {
        console.error('Error from Flask:', data.error);
      }
    } catch (error) {
      console.error('Speech-to-text error:', error);
      setIsListening(false);
    }
  };

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
      {/* Add task button */}
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
      {/* Speech to text button */}
      <Link
        isExternal
        className={buttonStyles({
          color: "secondary",
          radius: "md",
          variant: "shadow",
        })}
        onClick={handleSpeechToText}
      >
        <Image width={25} className="speechButton" alt="Speak Task" src="././mic.svg" />
      </Link>
      {isListening && <p>Listening...</p>}
    </div>
  );
}
