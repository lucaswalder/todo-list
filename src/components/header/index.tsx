import { ChangeEvent, FormEvent, useState } from 'react';

import style from './style.module.css';

import logo from '../../assets/logo.svg';

import { PlusCircle } from "@phosphor-icons/react";

import { TaskProps } from '../task';

interface HeaderTaskProps {
    task: TaskProps[];
    handleAddTask: (newTask: TaskProps) => void;
  }

const Header = ({ task, handleAddTask }: HeaderTaskProps) => {
    const [createTask, setCreateTask] = useState<string>('');
  
    const handleNewTask = (event:ChangeEvent<HTMLInputElement>) => {
      // event.target.setCustomValidity('')
      setCreateTask(event.target.value)
  }
  
    const handleAddNewTask = (event: FormEvent) => {
        event.preventDefault();
        const newTask = {
            id: new Date().getTime(),
            title: createTask,
            isComplete: false,
        }
        handleAddTask(newTask);
        setCreateTask('');
    };
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="Logo Todo Ignite" />
                <h1 className={style.appName}>to<span>do</span></h1>
            </div>
            <form className={style.form} onSubmit={handleAddNewTask}>
                <input type="text"
                    name="task"
                    id="task"
                    placeholder="Adicione uma nova tarefa"
                    className={style.input}
                    value={createTask}
                    onChange={handleNewTask}
                />
                <button type="submit" className={style.button} name='create-task'>Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </header>
    )
};

export default Header;