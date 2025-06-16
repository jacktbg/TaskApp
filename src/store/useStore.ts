import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Task } from "../pages/home/models/taskProps"

type Tab = "all" | "mine"
type Component = "dashboard" | "my task" | "my profile"
type Highlight =
  | "dashboard"
  | "my task"
  | "my profile"
  | "plus button"

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

interface SearchFormState {
  name?: string
  pointEstimate?: string
  ownerId?: string
  status?: string
  tags: string[]
  dueDate: Date | undefined
  setField: <K extends keyof SearchFormState>(
    field: K,
    value: SearchFormState[K]
  ) => void
  reset: () => void
}

export const useSearchFormStore = create<SearchFormState>()(
  persist(
    (set) => ({
      name: undefined,
      pointEstimate: undefined,
      ownerId: undefined,
      status: undefined,
      tags: [],
      dueDate: undefined,

      setField: (field, value) =>
        set(() => ({ [field]: value })),

      reset: () =>
        set({
          name: undefined,
          pointEstimate: undefined,
          ownerId: undefined,
          status: undefined,
          tags: [],
          dueDate: undefined,
        }),
    }),
    {
      name: "search-form",
    }
  )
)

type Theme = "light" | "dark"

type ThemeState = {
  theme: Theme
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggleTheme: () =>
        set({
          theme: get().theme === "light" ? "dark" : "light",
        }),
    }),
    { name: "theme-mode" }
  )
)

type ToastState = {
  message: string | null
  showToast: (message: string) => void
  hideToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  message: null,
  showToast: (message) => set({ message }),
  hideToast: () => set({ message: null }),
}))
