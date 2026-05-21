export interface Task{
  id: string,
  name: string,
  difficulty: Difficulty,
  completed: boolean
}

export type Difficulty = "easy" | "medium" | "hard"

export type Filter = "all" | Difficulty

export const difficultyWeight = {
  hard: 3,
  medium: 2,
  easy: 1
} as const

export const difficultyLabel = {
  hard: "Difícil",
  medium: "Médio",
  easy: "Fácil"
} as const

