import type { Task } from "../types/taskType";


export function saveLocalStorage(name: string, item: Task[]){
    localStorage.setItem(name, JSON.stringify(item))
}