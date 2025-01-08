import React from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  let textContainerStyle = styles.textContainer;
  if (task.isChecked) {
    textContainerStyle += " " + styles.checked;
  }

  return (
    <div className={styles.item}>
      {<CheckButton checked={task.isChecked} />}
      <div className={textContainerStyle}>
        <span className={styles.title}>{task.title}</span>
        {task.description && <span>{task.description}</span>}
      </div>
    </div>
  );
}
