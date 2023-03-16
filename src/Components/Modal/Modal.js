import "./modal.css";
import {Input} from "./Input/Input";
import {Adds} from "./Adds/Adds";
import {Buttons} from "./Buttons/Buttons";
import {CREATE_TASK, GET_TASKS} from "../../Services/Queries/TasksQueries";
import {useState} from "react";
import {useMutation} from "@apollo/client";
export const Modal = ({handleCloseModal}) => {
  const [name, setName] = useState("");
  const [pointEstimate, setPointEstimate] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [tags, setTags] = useState([]);
  const [dueDate, setDueDate] = useState("");
  const status = "IN_PROGRESS";

  const [createTask] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      handleCloseModal();
    },
    refetchQueries: [{query: GET_TASKS}],
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({
      variables: {
        input: {
          name,
          pointEstimate,
          assigneeId,
          tags,
          dueDate,
          status,
        },
      },
    });
  };

  return (
    <div className="Modal">
      <form onSubmit={handleSubmit} className="modal-container">
        <Input setName={setName} />
        <Adds
          setPointEstimate={setPointEstimate}
          setAssigneeId={setAssigneeId}
          setTags={setTags}
          setDueDate={setDueDate}
        />
        <Buttons
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};
