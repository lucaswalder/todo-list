import { Trash } from '@phosphor-icons/react';
import style from './style.module.css';

export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TaskPropsWithActions {
  tasks: TaskProps;
  handleDeleteTask: (taskId: number) => void;
  handleToogleTaskCompleted: (taskId: number) => void;
}

const Task = ({tasks, handleDeleteTask, handleToogleTaskCompleted} : TaskPropsWithActions) => {
  return (
    <div data-id={tasks.id} className={tasks.isComplete ? style.taskWrapperCompleted : style.task}>
      <button className={tasks.isComplete ? style.taskCompleted : style.taskIncomplete} onClick={() => handleToogleTaskCompleted(tasks.id)}></button>
      <p className={style.taskTitle}>{tasks.title}</p>
      <button className={style.taskDelete} onClick={() => handleDeleteTask(tasks.id)}>
        <Trash color='#808080' />
      </button>
    </div>
  )
};

export default Task;