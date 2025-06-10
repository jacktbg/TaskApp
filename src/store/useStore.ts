import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Task } from "../pages/home/models/taskProps"

type Tab = "all" | "mine"
type Component = "dashboard" | "my task" | "my profile"
type Highlight = "dashboard" | "my task" | "my profile"

interface TabStore {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void

  activeHighlight: Highlight
  setActiveHighlight: (highlight: Highlight) => void

  activeComponent: Component
  setActiveComponent: (component: Component) => void
}

export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      activeTab: "all",
      setActiveTab: (tab) => set({ activeTab: tab }),

      activeHighlight: "dashboard",
      setActiveHighlight: (tab) =>
        set({ activeHighlight: tab }),

      activeComponent: "dashboard",
      setActiveComponent: (component) =>
        set({ activeComponent: component }),
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

type userStore = {
  id: string
  setId: (string: string) => void
}

export const useUserStore = create<userStore>((set) => ({
  id: "a7a84bd3-5dca-438c-8030-8bc5a0c194c0",
  setId: (id) => set({ id: id }),
}))
