import "./panel.css"
import { Card } from "./Card/Card"

export const Panel = () => {
  const panelArray = [
    { heading: "Working", param: "TODO" },
    { heading: "In Progress", param: "IN_PROGRESS" },
    { heading: "Completed", param: "DONE" },
  ]
  return (
    <div className="Panel">
      {panelArray.map(({ heading, param }) => (
        <div key={param}>
          <h2>{heading}</h2>
          <Card status={param} />
        </div>
      ))}
    </div>
  )
}
