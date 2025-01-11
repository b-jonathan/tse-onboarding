import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getTask, type Task } from "src/api/tasks";
import { Button, Page } from "src/components";
import styles from "src/pages/TaskDetail.module.css";

export function TaskDetail() {
  const id = useParams().id;
  const [task, setTask] = useState<Task>();
  useEffect(() => {
    // your code here
    getTask(id!).then((res) => {
      if (res.success) {
        console.log(res.data);
        setTask(res.data);
      } else {
        alert(res.error);
      }
    });
  }, [id]);
  console.log(task);
  return (
    <Page>
      <Helmet>
        <title>Detail | TSE Todos</title>
      </Helmet>
      <p>
        <Link to="/">Back to home</Link>
      </p>
      <div className={styles.outerCovering}>
        <div className={styles.taskHeader}>
          <span className={styles.title}>{task?.title}</span>
          <span className={styles.editButton}>
            <Button kind="primary" type="button" data-testid="task-edit-button" label="Edit Task" />
          </span>
        </div>
        <p className={styles.description}>{task?.description}</p>
        <div className={styles.taskDetailItem}>
          <span className={styles.taskDetailLabel}>Assignee</span>
          <span className={styles.taskDetailContent}> {task?.assignee?._id} </span>
        </div>
        <div className={styles.taskDetailItem}>
          <span className={styles.taskDetailLabel}>Status</span>
          <span className={styles.taskDetailContent}> {task?.isChecked ? "Done" : "Not Done"}</span>
        </div>
        <div className={styles.taskDetailItem}>
          <span className={styles.taskDetailLabel}>Date Created </span>
          <span className={styles.taskDetailContent}>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(task?.dateCreated)}
          </span>
        </div>
      </div>
    </Page>
  );
}
