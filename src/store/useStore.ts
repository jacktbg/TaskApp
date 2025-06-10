import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Task } from "../pages/home/models/taskProps"

type Tab = "dashboard" | "my task"

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      activeTab: "dashboard",

      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    { name: "task-storage" }
  )
)

type Filters = {
  name?: string
  dueDate?: string
  ownerId?: string
  status?: string
  tags?: string[]
  estimatedPoints?: number
}

type FilterStore = {
  filters: Filters
  setFilter: <K extends keyof Filters>(
    key: K,
    value: Filters[K]
  ) => void
  clearFilters: () => void
}

export const useFilterStore = create<FilterStore>(
  (set) => ({
    filters: {},
    setFilter: (key, value) =>
      set((state) => ({
        filters: { ...state.filters, [key]: value },
      })),
    clearFilters: () => set({ filters: {} }),
  })
)

type TaskStore = {
  currentTask: Task | null
  mode: "create" | "edit"
  setTask: (task: Task, mode?: "edit" | "create") => void
  clearTask: () => void
}

export const useTaskStore = create<TaskStore>((set) => ({
  currentTask: null,
  mode: "create",
  setTask: (task, mode = "edit") =>
    set({ currentTask: task, mode }),
  clearTask: () =>
    set({ currentTask: null, mode: "create" }),
}))
