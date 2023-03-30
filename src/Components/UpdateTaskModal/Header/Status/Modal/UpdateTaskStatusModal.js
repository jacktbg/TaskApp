import "./updateTaskStatusModal.css"
import { useQuery } from "@apollo/client"
import { GET_STATUS } from "../../../../../Services/ValuesQueries"
import { StatusToTitle } from "../../../../../Utilities/StatusToTitle"

export const UpdateTaskStatusModal = ({
  currentlyStatus,
  setStatus,
  setStatusText,
  handleCloseModal,
}) => {
  const { data, loading, error } = useQuery(GET_STATUS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const status = data.__type.enumValues

  return (
    <div className="UpdateTaskStatusModal">
      <p>Status</p>
      {status
        .filter(({ name }) => name !== currentlyStatus)
        .map(({ name }) => (
          <button
            key={name}
            onClick={() => {
              setStatus(name)
              setStatusText(name)
              handleCloseModal()
            }}
          >
            {StatusToTitle(name)}
          </button>
        ))}
    </div>
  )
}
