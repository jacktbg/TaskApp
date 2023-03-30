import "./updateTaskButtons.css"

export const UpdateTaskButtons = ({
  handleCloseModal,
  handleSubmit,
}) => {
  return (
    <div className="Buttons">
      <button
        className="cancel"
        type="button"
        onClick={handleCloseModal}
      >
        Cancel
      </button>
      <button
        className="create"
        type="submit"
        onClick={handleSubmit}
      >
        Update
      </button>
    </div>
  )
}
