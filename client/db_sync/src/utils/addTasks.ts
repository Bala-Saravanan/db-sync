import { db } from "./db";
import { v4 as uuid } from "uuid";

type functionArgs = {
  name: string;
  desc: string;
};

export async function addTasks({ name, desc }: functionArgs): Promise<void> {
  try {
    console.log(name, desc);
    await db.tasks.add({
      id: uuid(),
      name,
      desc,
      updatedAt: new Date().toISOString(),
      synced: 0,
    });
    console.log("success");
  } catch (error) {
    console.error("Failed to add task:", error);
  }
}
