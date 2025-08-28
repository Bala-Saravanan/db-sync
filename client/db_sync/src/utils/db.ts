import Dexie, { type Table } from "dexie";

export interface Tasks {
  id: string;
  name: string;
  desc: string;
  updatedAt: string;
  synced: number;
}

export const db = new Dexie("localDB") as Dexie & {
  tasks: Table<Tasks, string>;
};

db.version(1).stores({
  tasks: "id, name, desc, updatedAt, synced",
});
