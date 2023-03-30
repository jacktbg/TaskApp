import "./cardContainer.css"
import { GET_TASKS } from "../../../../Services/TasksQueries"
import { useQuery } from "@apollo/client"
import { Card } from "../Card/Card"

export const CardContainer = ({ status }) => {
  const { loading, error, data } = useQuery(GET_TASKS, {
    variables: { input: { status } },
    pollInterval: 500,
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  const tasks = data?.tasks ?? {}

  return (
    <div className="CardContainer">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  )
}
