import styles from "../styles/advancedSearch.module.scss"
import { useState } from "react"
import type {
  PointEstimate,
  Status,
  TaskTag,
  User,
} from "../../../models/taskProps"
import { useQuery } from "@apollo/client"
import { GET_USERS } from "../../../../../services/queries"
import { DueDateTagOptions } from "../../../../../components/DueDateTagOptions"
import { dueDateFormatter } from "../../../utilities/dueDateFormatter"
import { useSearchFormStore } from "../../../../../store/useStore"
import { CancelIcon } from "../../../icons/Icons"

const taskTag: TaskTag[] = [
  "ANDROID",
  "IOS",
  "NODE_JS",
  "RAILS",
  "REACT",
]
export const AdvancedSearch = () => {
  const pointEstimate = useSearchFormStore(
    (state) => state.pointEstimate
  )
  const ownerId = useSearchFormStore(
    (state) => state.ownerId
  )
  const status = useSearchFormStore((state) => state.status)
  const tags = useSearchFormStore((state) => state.tags)
  const dueDate = useSearchFormStore(
    (state) => state.dueDate
  )
  const setField = useSearchFormStore(
    (state) => state.setField
  )

  const [show, setShow] = useState<boolean>(false)

  const toggleLabel = (tag: TaskTag) => {
    setField(
      "tags",
      tags.includes(tag)
        ? tags.filter((t) => t !== tag)
        : [...tags, tag]
    )
  }

  const reset = useSearchFormStore((state) => state.reset)
  const { data, loading, error } = useQuery(GET_USERS)

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <select
          className={styles.select}
          value={status || "DEFAULT"}
          onChange={(e) => {
            const value = e.target.value
            setField(
              "status",
              value === "DEFAULT"
                ? undefined
                : (value as Status)
            )
            setField("status", e.target.value as Status)
          }}
        >
          <option value="DEFAULT">STATUS</option>
          <option value="BACKLOG">BACKLOG</option>
          <option value="CANCELLED">CANCELLED</option>
          <option value="DONE">DONE</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="TODO">TODO</option>
        </select>
      </div>
      <div className={styles.section}>
        <select
          className={styles.select}
          value={pointEstimate || "DEFAULT"}
          onChange={(e) => {
            const value = e.target.value
            setField(
              "pointEstimate",
              value === "DEFAULT"
                ? undefined
                : (value as PointEstimate)
            )
          }}
        >
          <option value="DEFAULT">POINT ESTIMATE</option>
          <option value="ZERO">0</option>
          <option value="ONE">1</option>
          <option value="TWO">2</option>
          <option value="FOUR">4</option>
          <option value="EIGHT">8</option>
        </select>
      </div>

      <div className={styles.section}>
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p>Error loading users</p>
        ) : (
          <select
            className={styles.select}
            value={ownerId || "DEFAULT"}
            onChange={(e) => {
              const value = e.target.value
              setField(
                "ownerId",
                value === "DEFAULT" ? undefined : value
              )
            }}
          >
            <option value="DEFAULT">ASSIGNE</option>
            {data.users.map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.fullName}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className={styles.tagSection}>
        {taskTag.map((tag) => (
          <label key={tag} className={styles.labelTag}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={tags.includes(tag as TaskTag)}
              onChange={() => toggleLabel(tag as TaskTag)}
            />
            {tag}
          </label>
        ))}
      </div>

      <div className={styles.section}>
        <button
          onClick={() => setShow(true)}
          className={styles.button}
        >
          {dueDate ? dueDateFormatter(dueDate) : "DUE DATE"}
        </button>
        {show && (
          <div className={styles.datePickerWrapper}>
            <DueDateTagOptions
              startDate={dueDate ? new Date(dueDate) : null}
              setStartDate={(selectedDate) => {
                setField(
                  "dueDate",
                  selectedDate ? selectedDate : undefined
                )
                setShow(false)
              }}
            />
          </div>
        )}
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => reset()}
      >
        <CancelIcon className={styles.icon} />
      </div>
    </div>
  )
}
