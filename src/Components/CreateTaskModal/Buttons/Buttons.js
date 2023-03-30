import "./buttons.css"

export const Buttons = ({
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
        Create
      </button>
    </div>
  )
}
