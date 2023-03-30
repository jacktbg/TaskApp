import "./panel.css"
import { CardContainer } from "./CardContainer/CardContainer"

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
          <CardContainer status={param} />
        </div>
      ))}
    </div>
  )
}
