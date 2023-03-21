import "./home.css"
import { useState } from "react"
import { Dashboard } from "../../Components/Dashboard/Dashboard"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { Searchbar } from "../../Components/Searchbar/Searchbar"
import { Modal } from "../../Components/Modal/Modal"
import { useModal } from "../../Hooks/useModal"

export const Home = () => {
  const { showModal, handleShowModal, handleCloseModal } =
    useModal()
  const [activeButton, setActiveButton] = useState("panel")
  const handleChangeView = (whatToShow) => {
    setActiveButton(whatToShow)
  }

  return (
    <div className="Home">
      <Searchbar className="Searchbar" />
      <Sidebar
        className="Sidebar"
        handleChangeView={handleChangeView}
      />
      <Dashboard
        className="Dashboard"
        activeButton={activeButton}
        handleShowModal={handleShowModal}
      />
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} />
      )}
    </div>
  )
}
