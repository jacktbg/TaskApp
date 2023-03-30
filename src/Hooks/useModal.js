import { useState } from "react"
import { createPortal } from "react-dom"

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return { showModal, handleShowModal, handleCloseModal }
}
