import { useEffect, useState } from "react";
import type { Toast } from "../types/toastType";


export function useToast(){
    const [isActive, setIsActive] = useState<boolean>(false)
    const [toast, setToast] = useState<Toast | null>(null)
    
    useEffect(() =>{
        setTimeout(() => {
            setIsActive(prev => !prev)
        }, 1500);
    }, [toast])

    function handleCreateToast(toast: Toast){
        setIsActive(prev => !prev)
        setToast(toast)
        console.log("tá funcionando")
    }

    return {toast, isActive, handleCreateToast}
}