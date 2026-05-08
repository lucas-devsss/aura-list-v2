import { useEffect, useRef } from "react"
import type { Task } from "../../types/taskType"

export default function Modal({editTask, modal, handleChangeTask, handleUpdateTasks, handleCloseModal}: {editTask: Task, modal: boolean, handleChangeTask(editName: string): void, handleUpdateTasks(): void, handleCloseModal(): void}){
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    
    useEffect(() =>{
        if(modal){
            dialogRef.current?.showModal()
        }else{
            dialogRef.current?.close()
        }
    }, [modal])
    
    return(
        <dialog ref={dialogRef}>
                <div className="modal-edit__content">
                    <label htmlFor="task-edit-input" className="modal-edit__label">Edite sua tarefa</label>
                    <input type="text" value={editTask.name} onChange={(e) => handleChangeTask(e.currentTarget.value)}  name="task-edit-input" id="task-edit-input" className="modal-edit__input"/>
                </div>
            
                <div className="modal-edit__actions">
                    <button className="modal-edit__button--update modal-edit__button" onClick={() =>{
                    handleUpdateTasks()
                    }}>Atualizar</button>
                    <button className="modal-edit__button--cancel modal-edit__button" onClick={handleCloseModal}>Cancelar</button>
                </div>
        </dialog>
    )
}