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
  if (error) return <p>${error}</p>;
  const tasks = data?.tasks ?? {};

  return (
    <div className="Card">
      {tasks.map(
        ({id, name, pointEstimate, dueDate, tags, assignee: {avatar}}) => (
          <div className="card-container" key={id}>
            <Info name={name} />
            <Timer points={pointEstimate} date={dueDate} />
            <Tags tags={tags} />
            <Reactions assignee={avatar} />
          </div>
        )
      )}
    </div>
  );
};
