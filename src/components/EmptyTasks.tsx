import { ClipboardText } from 'phosphor-react'

import styles from './EmptyTasks.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <ClipboardText size={60} />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}