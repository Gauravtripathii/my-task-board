import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET ? process.env.TOKEN_SECRET : "");
        console.log("Decoded Token Data from getDataFromToken function : ", decodedToken);
        return decodedToken;
    } catch (error: any) {
        throw new Error(error);
    }
}