import "./home.css";
import React, {useState} from "react";
import {Dashboard} from "../../Components/Dashboard/Dashboard";
import {Sidebar} from "../../Components/Sidebar/Sidebar";
import {Searchbar} from "../../Components/Searchbar/Searchbar";
import {Modal} from "../../Components/Modal/Modal";
export const Home = () => {
  const [activeButton, setActiveButton] = useState("panel");
  const handleSidebarButtonClick = (whatToShow) => {
    setActiveButton(whatToShow);
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
