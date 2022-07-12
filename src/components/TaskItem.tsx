import { Trash } from 'phosphor-react'

import styles from './TaskItem.module.css'

interface TaskItemProps {
  title: string;
  isComplete: any;
}

export function TaskItem({ title, isComplete }: TaskItemProps) {
  return (
    <li className={styles.taskItem}>
      <div>
        <button>{isComplete}</button>
        <p>{title}</p>
      </div>
      <button>
        <Trash size={18} />
      </button>
    </li>
  )
}