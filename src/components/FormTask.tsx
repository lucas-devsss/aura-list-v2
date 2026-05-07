import styles from "./FormTask.module.css"

function FormTask({handleSubmitForm, nameTask, handleSaveNameTask, handleSaveDifficulty}: {handleSubmitForm(): void, nameTask: string, handleSaveNameTask(e: string): void, handleSaveDifficulty(e: string): void}){
    return(
        <>
        <header>
            <h1 className={styles.title}>Aura List</h1>
        </header>

    <form className={styles.form} onSubmit={(e) =>{
        e.preventDefault()
        handleSubmitForm()
    }}>
        <label className={styles.label} htmlFor="task-form__input">Adicione sua tarefa</label>
            <input className={styles.input} id="task-form__input" value={nameTask} onChange={(e) => handleSaveNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa" placeholder="Adicione sua tarefa"/>
            <fieldset className={styles["difficulty-container"]}>
                <legend className={styles.legend}></legend>
                <label htmlFor="dificil" className={styles["badge-hard"]}><input type="radio" className={styles["input-radio"]} name="dificuldade" id="dificil" onChange={e => handleSaveDifficulty(e.currentTarget.value)} value="hard"/>Difícil</label>
                <label htmlFor="medio" className={styles["badge-medium"]}><input type="radio" className={styles["input-radio"]} name="dificuldade" id="medio" onChange={e => handleSaveDifficulty(e.currentTarget.value)} value="medium"/>Médio</label>  
                <label htmlFor="facil" className={styles["badge-easy"]}><input type="radio" className={styles["input-radio"]} name="dificuldade" id="facil" onChange={e => handleSaveDifficulty(e.currentTarget.value)} value="easy" defaultChecked/>Fácil</label>
            </fieldset>
            <input type="submit" className={styles["btn-add-task"]} value="Adicionar tarefa"/>
    </form>
    </>
 )
}

export default FormTask