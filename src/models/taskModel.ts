import mongoose from "mongoose";
import { iconType, statusType } from "@/types/taskType";

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
        type: iconType,
        required: [true, "Please provide a password"],
    },
    status: {
        type: statusType,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
});


const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);

export default Task;