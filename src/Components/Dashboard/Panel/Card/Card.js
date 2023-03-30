import "./card.css"
import { Info } from "./Info/Info"
import { Timer } from "./Timer/Timer"
import { Tags } from "./Tags/Tags"
import { Reactions } from "./Reactions/Reactions"

export const Card = ({ task }) => {
  const { pointEstimate, dueDate, tags, assignee } = task

  return (
    <div className="Card">
      <Info task={task} />
      <Timer points={pointEstimate} date={dueDate} />
      <Tags tags={tags} />
      <Reactions assignee={assignee} />
    </div>
  )
}
