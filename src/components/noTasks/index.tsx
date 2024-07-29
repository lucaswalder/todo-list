import style from './style.module.css';
import iconNoTask from '../../assets/notask.png';
const NoTasks = () => {
  return (
    <div className={style.noTasks}>
      <img src={iconNoTask} alt="Sem tarefas criadas" title='Sem tarefas criadas' />
      <p><strong>Você ainda não tem tarefas cadastradas</strong>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
};

export default NoTasks;