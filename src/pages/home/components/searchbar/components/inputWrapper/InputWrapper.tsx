import { useEffect, useState } from "react"
import { SearchIcon } from "../../../../icons/Icons"
import styles from "../../styles/inputWrapper.module.scss"
import { useDebounce } from "../../../../../../utilities/useDebounce"
import { useFilterStore } from "../../../../../../store/useStore"

export const InputWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("")
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <SearchIcon className={styles.icon} />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
