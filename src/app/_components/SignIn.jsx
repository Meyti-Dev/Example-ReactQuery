"use client";
import { nanoid } from "nanoid";
import { useState } from "react";
import createContact from "@/queries/createContact";

export default function SignIn() {
    // states -------------------------------------------------------------------------------------------
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const { mutateAsync } = createContact();

    // change values
    function changeValues(e) {
        const whichInput = e.target.name;
        if (whichInput === "userName") {
            setUserName(e.target.value);
        } else if (whichInput === "userPassword") {
            setUserPassword(e.target.value);
        }
    }

    // submit form
    async function submitForm(e) {
        e.preventDefault();
        const status = await mutateAsync({
            id: "iubwLJmHckK1g8j6mfkmK",
            username: userName,
            password: userPassword,
        });
        console.log(status);
    }

    // jsx
    return (
        <div>
            <form
                autoComplete="off"
                onSubmit={submitForm}
                className="flex items-center justify-center flex-col gap-2 w-96"
            >
                <input
                    onChange={changeValues}
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder="user name"
                    className="bg-gray-200 h-10 rounded-xl w-full px-3"
                />
                <input
                    onChange={changeValues}
                    type="password"
                    name="userPassword"
                    value={userPassword}
                    placeholder="user password"
                    className="bg-gray-200 h-10 rounded-xl w-full px-3"
                />
                <input
                    type="submit"
                    value="submit"
                    className="bg-gray-200 hover:bg-gray-300 h-10 rounded-xl w-full px-3 cursor-pointer transition-colors"
                />
            </form>
        </div>
    );
}
