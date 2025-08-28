import { useLiveQuery } from "dexie-react-hooks";
import { db, type Tasks } from "../utils/db";

export default function TaskList() {
  const taskList = useLiveQuery(
    async () => {
      return await db.tasks.toArray();
    },
    [], // dependencies (none, since db handles updates)
    [] // initial value while loading
  ) as Tasks[];
  return (
    <div>
      <div className="w-xl h-[371px] overflow-y-scroll ring-1 ring-gray-300 rounded-2xl p-8 bg-brown-50 shadow-lg">
        <h1 className="text-2xl font-extrabold text-brown-800 mb-6 tracking-wide">
          Your Tasks
        </h1>
        <div className="flex flex-col space-y-4">
          {taskList.length === 0 ? (
            <span className="text-brown-400 italic">No tasks yet.</span>
          ) : (
            taskList.map(({ name, desc }, idx) => (
              <div
                key={idx}
                className="bg-brown-100 rounded-xl p-4 shadow-sm hover:bg-brown-200 transition-colors"
              >
                <h2 className="font-bold text-lg text-brown-800 mb-1">
                  {name}
                </h2>
                <p className="font-medium text-base text-brown-700">{desc}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
