import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/taskModel";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const { id } = await request.json();

        const deletedBlog = await Task.findByIdAndDelete(id);

        if (!deletedBlog) {
            return NextResponse.json({
                message: "Task not found",
                success: false
            }, { status: 404 });
        }

        return NextResponse.json({
            message: "Task removed successfully",
            success: true,
            deletedBlog
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}