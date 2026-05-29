import type { Toast } from "../../types/toastType"
import styles from"./Toast.module.css"

export function ToastNot({toast}: {toast: Toast | null}){
    return(
        <div className={`${styles.toast} ${toast?.type === "error" ? styles["toast-error"] : styles["toast-success"]}`}>
  <p>{toast?.message}</p>
</div>
    )
}