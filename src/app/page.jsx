"use client";
//! dependencies
import { useState } from "react";
//! pages
import getContacts from "@/queries/getContacts";
import SignIn from "./_components/SignIn";
//! react-query hooks
import { useIsFetching } from "@tanstack/react-query";
import { focusManager } from "@tanstack/react-query";

export default function page() {
    const [key, setKey] = useState("contacts");
    const { get: data } = getContacts(key);
    const isUndefined = data.some((contacts) => contacts === undefined);

    //! react-query hooks
    const isFetching = useIsFetching();
    // if () {

    // }
    // focusManager.setFocused(true);

    //! logs
    console.log(isFetching);

    // validate & jsx
    return (
        <>
            <div>
                {/* form & show data */}
                <div className="flex items-center justify-center gap-3">
                    <ul className="mt-5">
                        {!isUndefined
                            ? key === "contacts"
                                ? data?.map((user, index) => (
                                      <li className="font-bold" key={index}>
                                          {user.username}
                                      </li>
                                  ))
                                : data?.map((course, index) => (
                                      <li className="font-bold" key={index}>
                                          {course.coursename}
                                      </li>
                                  ))
                            : "loading..."}
                    </ul>
                    <SignIn />
                </div>

                {/* btns */}
                <button onClick={() => setKey("contacts")}>contacts</button>
                <button onClick={() => setKey("courses")}>courses</button>

                {/* refetch data */}
                <div className="mt-10 space-y-1">
                    <h2 className="text-center font-bold">refetch</h2>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 transition-colors py-2 px-3 rounded-xl text-white w-full"
                        onClick={() => refetch()}
                    >
                        Refetch Data
                    </button>
                </div>
            </div>
        </>
    );
}
