import { getDataFromToken } from "@/helpers/getDataFromToken";
import {  NextResponse, NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const user = getDataFromToken(request);
    return NextResponse.json({ message: "User Found", data: user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}