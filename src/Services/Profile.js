import {useQuery, gql} from "@apollo/client";

const GET_TASKS = gql`
  query GetTasks($status: Status!) {
    tasks(input: {status: $status}) {
      id
      name
      status
      tags
      assignee {
        id
        fullName
      }
      creator {
        id
        fullName
      }
    }
  }
`;

const IN_PROGRESS = "IN_PROGRESS";

export function Profile() {
  const {loading, error, data} = useQuery(GET_TASKS, {
    variables: {status: IN_PROGRESS},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Tasks in progress:</h2>
      <ul>
        {data.tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>Status: {task.status}</p>
            <p>Assignee: {task.assignee?.fullName || "Unassigned"}</p>
            <p>Creator: {task.creator.fullName}</p>
            {task.tags && (
              <ul>
                {task.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
