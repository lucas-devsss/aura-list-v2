import type { Toast } from "../../types/toastType"
import styles from"./Toast.module.css"

export function ToastNot({toast}: {toast: Toast | null}){
    return(
        <div className={styles.div}>
            <p>Tipo do erro {toast!.type}</p>
            <p>Mensagem de erro {toast!.message}</p>
        </div>
    )
}