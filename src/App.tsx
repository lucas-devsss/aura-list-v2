import './globals.css'
import RenderTasks from './components/RenderTask/RenderTasks'
import FormTask from './components/FormTask/FormTask'
import { useTasks } from './hooks/useTasks'



function App() {
  
  const { handleSubmitForm, handleDeleteTask, handleEditTask, handleChangeTask, handleUpdateTasks, handleCloseModal, handleSaveNameTask, handleSaveDifficulty, tasks, nameTask, modal, taskEdit, handleSelectFilter, filteredTasks, handleCompleteTask } = useTasks()
  
  return (
    <>
    <FormTask handleSubmitForm={handleSubmitForm} nameTask={nameTask} handleSaveNameTask={handleSaveNameTask} handleSaveDifficulty={handleSaveDifficulty}/>
    <RenderTasks tasks={tasks} handleDeleteTask={handleDeleteTask} modal={modal} handleEditTask={handleEditTask} editTask={{name: taskEdit?.name ?? "", id: taskEdit?.id ?? "", difficulty: taskEdit?.difficulty ?? "easy", completed: taskEdit?.completed ?? false}} handleChangeTask={handleChangeTask} handleUpdateTasks={handleUpdateTasks} handleCloseModal={handleCloseModal} filteredTasks={filteredTasks} handleSelectFilter={handleSelectFilter} handleCompleteTask={handleCompleteTask} />
  </>
  )
}

export default App