import mongoose from "mongoose";
// import { iconType, statusType } from "@/types/taskType";

const taskSchema = new mongoose.Schema({
    task_name: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a password"],
    },
    icon: {
        type: String,
        required: [true, "Please provide a password"],
    },
    status: {
        type: String,
        required: [true, "Please provide a password"],
    },
    user_id : {
        type: "string",
        require: true,
    }
});


const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

export default Task;