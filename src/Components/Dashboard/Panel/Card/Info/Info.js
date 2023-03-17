import "./info.css"
import menu from "../Images/ThreePoints.svg"
import { Menu } from "./Menu/Menu"
import { ModalService } from "../../../../../Services/ModalService"

export const Info = ({ name, id }) => {
  const { showModal, handleShowModal, handleCloseModal } =
    ModalService()
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
