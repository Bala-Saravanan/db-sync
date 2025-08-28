import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { syncTasks } from "./utils/syncTasks";

export default function App() {
  setInterval(syncTasks, 5000);
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-5">
      <TaskForm />
      <TaskList />
    </div>
  );
}
