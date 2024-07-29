//style
import './global.css';

import Header from './components/header/index';
import TaskContainer from './components/taskContainer';
import TaskHeader from './components/taskHeader';
import { useState } from 'react';
import { TaskProps } from './components/task';


const App = () => {
  const [task, setTask] = useState<TaskProps[]>([]);

  const handleAddTask = (newTask: TaskProps) => {
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId: number) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id!== taskId));
  };

  const handleToggleTaskCompleted = (taskId: number) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId? {...task, isComplete:!task.isComplete } : task
      )
    );
  }

  const handleCompletedTasks = () => {
    const completed = task.filter((task) => {
      if (task.isComplete === true) {
        return task;
      }
      ;
    })
    return completed.length
  };

  return (
    <>
    <Header task={task} handleAddTask={handleAddTask} />
    <TaskHeader created={task.length} completed={handleCompletedTasks}/>
    <TaskContainer data={task} handleDeleteTask={handleDeleteTask} handleToogleTaskCompleted={handleToggleTaskCompleted}/>
    </>
  )
};

export default App;
