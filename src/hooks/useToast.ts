import { useEffect, useState } from "react";
import type { Toast } from "../types/toastType";


export function useToast(){
    const [isActive, setIsActive] = useState<boolean>(false)
    const [toast, setToast] = useState<Toast | null>(null)
    
    useEffect(() =>{
        if(!isActive){
            return
        }
        const timer = setTimeout(() => {
            setIsActive(false)
            setToast(null)
        }, 3000)

        return () => clearTimeout(timer)
    }, [isActive])

    function handleCreateToast(toast: Toast){
        setIsActive(true)
        setToast(toast)
     
    }

    return {toast, isActive, handleCreateToast}
}