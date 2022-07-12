import { Trash } from 'phosphor-react'

import styles from './TaskItem.module.css'

interface TaskItemProps {
  title: string;
  isComplete: any;
  textComplete: string;
  onDelete: () => void;
  onCompleted: () => void;
}

export function TaskItem({ title, isComplete, textComplete, onDelete, onCompleted }: TaskItemProps) {
  return (
    <li className={styles.taskItem}>
      <div>
        <button onClick={onCompleted}>{isComplete}</button>
        <p className={textComplete}>{title}</p>
      </div>
      <button onClick={onDelete}>
        <Trash size={18} />
      </button>
    </li>
  )
}