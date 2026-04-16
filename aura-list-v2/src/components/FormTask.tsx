function FormTask({handleSubmitForm, nameTask, handleSaveNameTask}: {handleSubmitForm(e: any): void, nameTask: string, handleSaveNameTask(e: string): void}){
    return(
    <form className="task-form" onSubmit={(e) =>{
        handleSubmitForm(e)
        
    }}>
        <label htmlFor="task-form__input">Adicione sua tarefa</label>
            <input className='task-form__input' id="task-form__input" value={nameTask} onChange={(e) => handleSaveNameTask(e.currentTarget.value)} type="text" aria-label="Adicione o nome de sua tarefa"/>
            <fieldset className="task-form__priority">
                <legend className="task-form__priority-legend">Prioridade Tarefa</legend>
                <label htmlFor="urgente"><input type="radio" name="prioridade" id="urgente" value="urgente"  className="task-form__priority-input task-form__priority-input--urgente"/>Urgente</label>
                <label htmlFor="importante"><input type="radio" name="prioridade" id="importante" value="importante"  className="task-form__priority-input task-form__priority-input--importante"/>Importante</label>  
                <label htmlFor="rotineira"><input type="radio" name="prioridade" id="rotineira" value="rotineira"  className="task-form__priority-input task-form__priority-input--rotineira"/>Rotineira</label>
            </fieldset>
            <input type="submit" className="task-form__button" value="Adicionar tarefa"/>
    </form>
 )
}

export default FormTask