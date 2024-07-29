import style from './style.module.css';

interface TaskHeaderProps {
  created: number;
  completed: () => number;
}

const TaskHeader = ({created, completed}:TaskHeaderProps) => {
  const completedTasks = completed();
  return (
    <div className={style.taskHeader}>
      <div className={style.taskCreated}>Tarefas criadas<span>{created}</span></div>
      <div className={style.taskCompleted}>Concluídas<span>{completedTasks}</span></div>
    </div>
  )
};

export default TaskHeader;