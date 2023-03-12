import "./assignee.css";
import {GET_USERS} from "../../../../Services/Queries/UserQueries";
import {useQuery} from "@apollo/client";

const AssigneeModalButton = ({
  id,
  name,
  image,
  handleCloseModal,
  setAssigneeId,
}) => {
  return (
    <button
      onClick={() => {
        setAssigneeId(id);
        handleCloseModal();
      }}
      aria-label={`Assign task to ${name}`}
    >
      <img src={image} alt="profile" />
      <p>{name}</p>
    </button>
  );
};

export const AssigneeModal = ({handleCloseModal, setAssigneeId}) => {
  const {loading, error, data} = useQuery(GET_USERS);
  if (loading) return <p>loading</p>;
  if (error) return <p>${error}</p>;
  const users = data.users;
  return (
    <div className="AssigneeModal">
      <p>Assign To...</p>
      {users.map(({id, fullName, avatar}) => (
        <AssigneeModalButton
          key={id}
          id={id}
          name={fullName}
          image={avatar}
          handleCloseModal={handleCloseModal}
          setAssigneeId={setAssigneeId}
        />
      ))}
    </div>
  );
};
