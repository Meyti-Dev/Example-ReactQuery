"use client";
//! dependencies
import { useState } from "react";
//! pages
import getContacts from "@/queries/getContacts";
import SignIn from "./_components/SignIn";
//! react-query hooks
import { useIsFetching } from "@tanstack/react-query";
import { focusManager } from "@tanstack/react-query";
//! UUID => id creator
import { v4 as UUID } from "uuid";

export default function page() {
    const [key, setKey] = useState("contacts");
    const { get: data } = getContacts(key);
    const isUndefined = data.some((contacts) => contacts === undefined);

    console.log(data);

    //! react-query hooks
    const isFetching = useIsFetching();

    //! logs
    console.log(UUID());

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
                <button onClick={() => focusManager.setFocused(true)}>
                    focus
                </button>
            </div>
        </>
    );
}
