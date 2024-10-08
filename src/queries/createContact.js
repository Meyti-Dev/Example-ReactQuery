"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function createContact() {
    // client
    const client = useQueryClient();
    const { mutateAsync } = useMutation({
        // keys
        mutationKey: "contacts",
        // mutation
        mutationFn: (data) =>
            axios.put(`http://localhost:4000/contacts/${data.id}`, data),
        // success
        onSuccess: ({ data }) => {
            console.log(data);
            client.invalidateQueries({ queryKey: ["Contacts", data.id] });
        },
        // error
        onError: (err) => {
            console.log(err);
        },
        // settled
        onSettled: (data) => {
            console.log(data);
        },
        // mutate
        onMutate: (data) => {
            console.log(data);
        },
    });
    return { mutateAsync };
}
