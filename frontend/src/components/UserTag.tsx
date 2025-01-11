import { type User } from "src/api/users";
import styles from "src/components/UserTag.module.css";
export interface UserProps {
  user?: User;
  className?: string;
}
export function UserTag({ user: user, className }: UserProps) {
  return (
    <div className={`${styles.userTag} ${className || ""}`}>
      <img className={styles.pfp} src={user?.profilePictureURL ? "/userDefault.svg" : ""} alt="" />
      <span className={styles.name}>{user?.name ? user?.name : "Not Assigned"}</span>
    </div>
  );
}
