"use client";

import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function VerifyUser({params}: any) {
    const { push } = useRouter();

    useEffect(()=> {
        const id = params.id;
        const token = params.token;

        const verifyUser = async () => {
            console.log("here")
            console.log(id, token)
            await axios.post("/api/verify_email", {id, token})
            .then(res => {
                if (res.status === 200) {
                    toast.success("Email Verified!");
                    push("/");
                }
            })
            .catch(error => {
                console.log(error);
                toast.error("An error occurred!");
            });
        }
        verifyUser();
    }, []);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-[4vw]">Vefifying User...</h1>
        </div>
    )
}