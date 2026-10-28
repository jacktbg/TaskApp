import styles from "../styles/filterButton.module.scss"
import { Popover } from "radix-ui"
import { FilterIcon } from "../../../icons/Icons"
import { AdvancedSearch } from "./AdvancedSearch"
import { useSearchFormStore } from "../../../../../store/useStore"

export const FilterButton = () => {
  const useHasActiveFilters = () => {
    return useSearchFormStore((state) =>
      Boolean(
        state.name ||
          state.pointEstimate ||
          state.ownerId ||
          state.status ||
          (state.tags && state.tags.length > 0) ||
          state.dueDate
      )
    )
  }
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div
          className={
            useHasActiveFilters()
              ? `${styles.iconWrapper} ${styles.active}`
              : styles.iconWrapper
          }
        >
          <FilterIcon className={styles.icon} />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="bottom">
          <AdvancedSearch />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
