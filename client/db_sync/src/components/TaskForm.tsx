import { useState } from "react";
import { addTasks } from "./../utils/addTasks";

export default function TaskForm() {
  const [task, setTask] = useState({
    name: "",
    desc: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(task);
    await addTasks(task);
  };
  return (
    <div>
      <form className="w-lg rounded-xl ring-1 ring-gray-300 p-10">
        <h1 className="text-center my-4 text-xl font-bold">Add your Tasks</h1>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-semibold text-lg">
            Task:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="w-full p-2 border-1 rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="desc" className="font-semibold text-lg">
            Description:{" "}
          </label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={task.desc}
            onChange={handleChange}
            className="w-full p-2 border-1 rounded-lg"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            onClick={submitHandler}
            className="px-10 py-2 rounded-lg my-4 bg-blue-400 text-white font-medium text-lg cursor-pointer hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
