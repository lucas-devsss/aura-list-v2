import { useEffect, useRef } from "react"
import type { Task } from "../../types/taskType"
import styles from "./Modal.module.css"

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
        <dialog ref={dialogRef} className={styles.modal}>
                <div className={styles["edit-actions"]}>
                    <label htmlFor="task-edit-input" className={styles.labels}>Edite sua tarefa</label>
                    <input type="text" value={editTask.name} onChange={(e) => handleChangeTask(e.currentTarget.value)}  name="task-edit-input" id="task-edit-input" className={styles.input}/>
                </div>
            
                <div className={styles["buttons-edit"]}>
                    <button className={`${styles.button} ${styles["button-update"]}`} onClick={() =>{
                    handleUpdateTasks()
                    }}>Atualizar</button>
                    <button className={`${styles.button} ${styles["button-cancel"]}`} onClick={handleCloseModal}>Cancelar</button>
                </div>
        </dialog>
    )
}