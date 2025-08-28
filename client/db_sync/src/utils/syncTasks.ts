import { db } from "./db";

export async function syncTasks() {
  try {
    const unsynced = await db.tasks.where("synced").equals(0).toArray();
    for (const task of unsynced) {
      console.log("Syncing task:", task);
      const res = await fetch("http://localhost:4000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (res.ok) {
        await db.tasks.update(task.id!, { synced: 1 });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
