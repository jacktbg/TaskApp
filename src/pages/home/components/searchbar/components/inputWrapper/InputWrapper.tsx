import { useEffect, useRef, useState } from "react"
import { SearchIcon } from "../../../../icons/Icons"
import styles from "../../styles/inputWrapper.module.scss"
import { useDebounce } from "../../../../../../utilities/useDebounce"
import { useFilterStore } from "../../../../../../store/useStore"

interface InputWrapperProps {
  setFocus: (boolean: boolean) => void
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  setFocus,
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedSearch = useDebounce(searchTerm, 400)
  const setFilter = useFilterStore(
    (state) => state.setFilter
  )

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setFilter("name", undefined)
    } else {
      setFilter("name", debouncedSearch)
    }
  }, [debouncedSearch, setFilter])

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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        maxLength={15}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
