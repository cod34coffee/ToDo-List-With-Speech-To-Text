"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import styles from "../styles/page.module.css";

export default function TaskCard({ task, index, deleteTask }) {
  return (
    <div className="flex gap-3 items-center">
      {/* Task card */}
      <Card>
        <CardBody className={styles.cardTask}>
          <p>{task}</p>
        </CardBody>
      </Card>
      {/* Delete button */}
      <Link
        isExternal
        className={buttonStyles({
          color: "danger",
          radius: "md",
          variant: "shadow",
        })}
        onClick={() => deleteTask(index)}
      >
        <Image width={30} alt="Delete Task" src="././trash.svg" />
      </Link>
    </div>
  );
}
