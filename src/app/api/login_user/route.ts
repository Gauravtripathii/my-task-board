import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        // to check if the user already exists
        const user = await User.findOne({email});
        if (!user)
            return NextResponse.json({error: "User does not exist!"}, {status: 400});

        // compare passwords
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect)
            return NextResponse.json({error: "Incorrect password!"}, {status: 400});

        // create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            isAuthor: user.isAuthor,
        };

        // create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});
        
        const response = NextResponse.json({
            message: "Login Successful",
            success: true
        });

        response.cookies.set("token", token, {httpOnly: true});

        return response;

    } catch (error) {
        return NextResponse.json({error: error}, {status: 500});
    }
}