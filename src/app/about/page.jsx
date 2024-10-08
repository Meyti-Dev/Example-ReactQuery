"use client";
import getContacts from "@/queries/getContacts";
// dependencies
import SignIn from "../_components/SignIn";

export default function page() {
    const { data } = getContacts();
    console.log(data);

    // validate & jsx
    return (
        <>
            <div>
                {/* form & show data */}
                <div className="flex items-center justify-center gap-3">
                    <ul className="mt-5">
                        {data?.map((user) => (
                            <li className="font-bold" key={user.id}>
                                {user.username}
                            </li>
                        ))}
                    </ul>
                    <SignIn />
                </div>

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
