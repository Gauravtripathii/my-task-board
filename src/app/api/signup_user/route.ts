import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/emailSender";
import otpGenerator from "otp-generator";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(email, password)

        // to check if the user already exists
        const user = await User.findOne({ email });
        if (user)
            return NextResponse.json({ error: "User already exists!" }, { status: 400 });

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // generate token
        const token = otpGenerator.generate(20, { upperCaseAlphabets: false, specialChars: false });

        // save user
        const newUser = new User({ email, password: hashedPassword, verifyToken: token, verifyTokenExpiry: Date.now() + 3600000 });
        const savedUser = await newUser.save();

        // send verification email
        // await sendEmail({
        //     to: email,
        //     subject: "Verify your email",
        //     text: `
        //     <html>
        //         <body>
        //             <h1>Welcome to PennyForThought!</h1>
        //             <b>Verify your email by clicking on this link:</b><br/>
        //             <a href="${process.env.WEBSITE_URL}/verifyuser/${savedUser._id}/${token}">
        //                 ${process.env.WEBSITE_URL}/verifyuser/${savedUser._id}/${token}
        //             </a>
        //         </body>
        //     </html>
        //     `
        // });

        // create token data
        const tokenData = {
            id: savedUser._id,
            email: savedUser.email,
        };

        // create token
        const userToken = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "User saved successfully",
            success: true,
            savedUser
        });

        response.cookies.set("token", userToken, { httpOnly: true });

        return response;

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}