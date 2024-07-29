import NoTasks from '../noTasks';
import Task, { TaskProps } from '../task';
import style from './style.module.css';

export interface TaskContainerProps {
  data: TaskProps[];
  handleDeleteTask: (taskId: number) => void;
  handleToogleTaskCompleted: (taskId: number) => void; 
}

const TaskContainer = ({data, handleDeleteTask, handleToogleTaskCompleted}:TaskContainerProps) => {
  return (
    <div className={style.taskContainer}>
      {data.length > 0 ? data.map((task) => {
        return (
          <Task
          key={task.id}
          tasks={task}
          handleDeleteTask={handleDeleteTask}
          handleToogleTaskCompleted={handleToogleTaskCompleted}/>
        )
      }) : <NoTasks/>}
    </div>
  )
};

export default TaskContainer;