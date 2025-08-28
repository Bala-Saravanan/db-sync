const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const taskModel = require("./model");
dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tasksDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
}

connectDB();

app.post("/api/tasks", async (req, res) => {
  try {
    const { id, name, desc, updatedAt } = req.body;
    await taskModel.updateOne(
      { id }, // find by UUID
      { id, name, desc, updatedAt },
      { upsert: true }
    );
    // console.log("task added!");
    return res.status(201).json({
      success: true,
      message: "task added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// app.get("/api/get/tasks", async (req, res) => {
//   try {
//     const taskList = await taskModel.find({}).sort({ updatedAt: -1 });
//     return res.status(200).json({
//       success: true,
//       message: "Tasks fetched successfully!",
//       tasks: taskList,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

app.listen(PORT, () => {
  console.log(`server running of port: ${PORT}`);
});
