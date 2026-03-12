import { useState } from 'react'
import './App.css'

interface Task{
  id: number,
  name: string
}


function App() {
  const [nameTask, setNameTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])


  function handleSubmitForm(e: any): void{
    e.preventDefault()
    if(nameTask === ""){
      return
    }
    setTasks(e => [...e, {id: tasks.length + 1, name: nameTask}])
    setNameTask("")
    console.log(tasks)
  }

  return (
    <>
    <header className="task-app__header">
        <div className="task-app__title-wrapper">
            <h1>Aura List</h1>
        </div>
    </header>

    <form className="task-form" onSubmit={handleSubmitForm}>
            <input className='task-form__input' value={nameTask} onChange={(e) => setNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <fieldset className="task-form__priority">
                <legend className="task-form__priority-legend">Prioridade Tarefa</legend>
                <label htmlFor="urgente"><input type="radio" name="prioridade" id="urgente" className="task-form__priority-input task-form__priority-input--urgente"/>Urgente</label>
                <label htmlFor="importante"><input type="radio" name="prioridade" id="importante" className="task-form__priority-input task-form__priority-input--importante"/>Importante</label>  
                <label htmlFor="rotineira"><input type="radio" name="prioridade" id="rotineira" className="task-form__priority-input task-form__priority-input--rotineira"/>Rotineira</label>
            </fieldset>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
      </form>

    <ul>
      {tasks.map(a => {
        return <li key={a.id}>{a.name} <svg onClick={() => setTasks(tasks.filter(t => a !== t))} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-delete-icon lucide-delete"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/></svg></li>
        })}
    </ul>
    </>
  )
}

export default App
