import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/taskModel";
import { NextResponse, NextRequest } from "next/server";
import { iconType, statusType } from "@/types/taskType";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { task_name, description, icon, status, user_id } = reqBody;
        console.log("\n\n\n\n\n"+task_name, description, icon, status, user_id)

        // save user
        const newTask = new Task({ task_name, description, icon: iconType[icon], status: statusType[status], user_id });
        const savedTask = await newTask.save();

        return NextResponse.json({
            message: "Task saved successfully",
            success: true,
            savedTask
        });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}