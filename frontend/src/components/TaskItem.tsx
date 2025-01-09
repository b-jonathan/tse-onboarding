import { React, useState } from "react";
import { updateTask, type Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task: initialTask }: TaskItemProps) {
  const [task, setTask] = useState<Task>(initialTask);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleToggleCheck = () => {
    // your code here
    setLoading(true);
    updateTask({ ...task, isChecked: !task.isChecked }).then((res) => {
      setLoading(false);
      if (res.success) {
        setTask(res.data);
      } else {
        alert(res.error);
      }
    });
  };

  let textContainerStyle = styles.textContainer;
  if (task.isChecked) {
    textContainerStyle += " " + styles.checked;
  }

  return (
    <div className={styles.item}>
      {<CheckButton checked={task.isChecked} onPress={handleToggleCheck} disabled={isLoading} />}
      <div className={textContainerStyle}>
        <span className={styles.title}>{task.title}</span>
        {task.description && <span>{task.description}</span>}
      </div>
    </div>
  );
}
