import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import Loader from "../../components/shared/Loader";
import { createTask } from "../../api/task";
import FileUploader from "../../components/shared/FileUploader";
import useTaskByContestId from "../../hooks/useTaskByContestId";

const TaskSubmission = () => {
  const { contestId } = useParams();
  const { task, isLoading, refetch } = useTaskByContestId(contestId);
  const location = useLocation();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  const handleTaskSubmit = async (task) => {
    try {
      await createTask(contestId, { task });
      refetch();
      toast.success("Task submitted");
    } catch (error) {
      toast.error(error?.message || "Error submitting task");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Task Submission for {location?.state?.title}
      </h1>
      {!task ? (
        <FileUploader handleTaskSubmit={handleTaskSubmit} />
      ) : (
        <div>
          <p>Congratulations! You successfully submit the task.</p>
          <p>
            Your task is:{" "}
            <a
              href={task.task}
              target="blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {task.task}
            </a>
          </p>
        </div>
      )}
      <div className="mt-4">
        <Button variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default TaskSubmission;
