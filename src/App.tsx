import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CheckCircle, Circle, PlusCircle } from 'phosphor-react'

import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { EmptyTasks } from './components/EmptyTasks'
import { TaskItem } from './components/TaskItem'

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'Ler o escopo do desafio',
      isComplete: false
    },
    {
      id: uuidv4(),
      title: 'Subir novo projeto ReactJS com Typescript usando Vite',
      isComplete: false
    },
    {
      id: uuidv4(),
      title: 'Limpar arquivos desnecessários',
      isComplete: true
    },
    {
      id: uuidv4(),
      title: 'Criar um repositório no github e fazer commit inicial',
      isComplete: true
    },
    {
      id: uuidv4(),
      title: 'Definir estrutura HTML, CSS e definir componentes da aplicação.',
      isComplete: false
    },
    {
      id: uuidv4(),
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos odit laborum nulla impedit aut sequi quis quia nostrum neque voluptatem at sapiente, vitae error deleniti.',
      isComplete: true
    }
  ])
  const [newTask, setNewTask] = useState('')

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()
  }

  const tasksIsCompleted = tasks.filter((task) => task.isComplete === true)

  const isEmptyNewTask = newTask.length === 0

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <form action="" onSubmit={handleCreateNewTask} className={styles.formContainer}>
          <input
            type="text"
            value={newTask}
            onChange={handleNewTaskChange}
            placeholder="Adicione uma nova tarefa"
          />

          <button type="submit" disabled={isEmptyNewTask}>
            Criar
            <PlusCircle size={18} />
          </button>
        </form>

        <div className={styles.statusContainer}>
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          {tasks.length
          ? (
            <p>Concluídas <span>{tasksIsCompleted.length} de {tasks.length}</span></p>
          ) : (
            <p>Concluídas <span>0</span></p>
          )}
        </div>

        {tasks.length
        ? (
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                isComplete={task.isComplete ? <CheckCircle size={20} weight="fill" className={styles.isComplete} /> : <Circle size={20}  />}
                title={task.title}
                textComplete={task.isComplete ? styles.textComplete : ''}
              />              
            ))}
          </ul>
        ) : (
          <EmptyTasks />
        )}
      </main>
    </>
  )
}