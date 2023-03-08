import "./card.css";
import {Info} from "./Info/Info";
import {Timer} from "./Timer/Timer";
import {Tags} from "./Tags/Tags";
import {Reactions} from "./Reactions/Reactions";
import {GET_TASKS} from "../../../../Services/Queries/TasksQueries";
import {useQuery} from "@apollo/client";

export const Card = ({status}) => {
  const {loading, error, data} = useQuery(GET_TASKS, {
    variables: {status},
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const tasks = data.tasks;

  return (
    <div className="Card">
      {tasks.map((task) => (
        <div className="card-container" key={task.id}>
          <Info name={task.name} />
          <Timer points={task.pointEstimate} date={task.dueDate} />
          <Tags tags={task.tags} />
          <Reactions assignee={task.assignee.avatar} />
        </div>
      ))}
    </div>
  );
};
