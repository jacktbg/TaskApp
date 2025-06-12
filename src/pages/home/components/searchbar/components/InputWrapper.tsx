import styles from "../styles/inputWrapper.module.scss"
import { useRef } from "react"
import { SearchIcon } from "../../../icons/Icons"
import { useSearchFormStore } from "../../../../../store/useStore"
import { FilterButton } from "./FilterButton"

interface InputWrapperProps {
  setFocus: (boolean: boolean) => void
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  setFocus,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const name = useSearchFormStore((state) => state.name)
  const setField = useSearchFormStore(
    (state) => state.setField
  )

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Escape") {
      inputRef.current?.blur()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <SearchIcon className={styles.icon} />
      </div>
      <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        placeholder="Search by name"
        value={name}
        onChange={(e) =>
          setField("name", e.target.value.trimStart())
        }
        maxLength={15}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={handleKeyDown}
      />
      <FilterButton />
    </div>
  )
}
