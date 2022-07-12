import { Trash } from 'phosphor-react'

import styles from './TaskItem.module.css'

interface TaskItemProps {
  title: string;
  isComplete: any;
  textComplete: string;
}

export function TaskItem({ title, isComplete, textComplete }: TaskItemProps) {
  return (
    <li className={styles.taskItem}>
      <div>
        <button>{isComplete}</button>
        <p className={textComplete}>{title}</p>
      </div>
      <button>
        <Trash size={18} />
      </button>
    </li>
  )
}