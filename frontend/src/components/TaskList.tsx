import { useEffect, useState } from "react";
import { getAllTasks, type Task } from "src/api/tasks";
import { TaskItem } from "src/components";
import styles from "src/components/TaskList.module.css";

export interface TaskListProps {
  title: string;
}

export function TaskList({ title }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // your code here
    getAllTasks().then((res) => {
      if (res.success) {
        setTasks(res.data);
      } else {
        alert(res.error);
      }
    });
  }, []);

  return (
    <div className={styles.outer}>
      <span className={styles.title}>{title}</span>
      <div className={styles.item}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above to get started.</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id}>
              <TaskItem task={task} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
