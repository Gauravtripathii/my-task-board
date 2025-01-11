import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import Task from "@/models/taskModel";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { user_id } = reqBody;

        const tasks = await Task.find({ user_id });

        return NextResponse.json({
            message: "Tasks Returned",
            success: true,
            tasks
        });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}