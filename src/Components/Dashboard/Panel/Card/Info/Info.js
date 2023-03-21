import "./info.css"
import menu from "../Images/ThreePoints.svg"
import { Menu } from "../../../../Menu/Menu"
import { useModal } from "../../../../../Hooks/useModal"
export const Info = ({ name, id }) => {
  const { showModal, handleShowModal, handleCloseModal } =
    useModal()
  return (
    <div className="Info">
      <p>{name}</p>
      <button
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
      >
        <img src={menu} alt="three points menu" />
      </button>
      {showModal && (
        <Menu handleCloseModal={handleCloseModal} id={id} />
      )}
    </div>
  )
}
