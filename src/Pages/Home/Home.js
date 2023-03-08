import "./home.css";
import {useState} from "react";
import {Dashboard} from "../../Components/Dashboard/Dashboard";
import {Sidebar} from "../../Components/Sidebar/Sidebar";
import {Searchbar} from "../../Components/Searchbar/Searchbar";
import {Modal} from "../../Components/Modal/Modal";
import {ModalService} from "../../Services/ModalService";

export const Home = () => {
  const {showModal, handleShowModal, handleCloseModal} = ModalService();
  const [activeButton, setActiveButton] = useState("panel");
  const handleSidebarButtonClick = (whatToShow) => {
    setActiveButton(whatToShow);
  };

  return (
    <div className="Home">
      <Searchbar className="Searchbar" />
      <Sidebar
        className="Sidebar"
        handleButtonClick={handleSidebarButtonClick}
      />
      <Dashboard
        className="Dashboard"
        activeButton={activeButton}
        handleShowModal={handleShowModal}
      />
      {showModal && <Modal handleCloseModal={handleCloseModal} />}
    </div>
  );
};
