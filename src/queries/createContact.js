"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function createContact() {
    //! client
    const client = useQueryClient();
    //! useMutation
    const { mutateAsync } = useMutation({
        //! keys
        mutationKey: "contacts",
        //! mutation
        mutationFn: (data) =>
            axios.put(`http://localhost:4000/contacts/${data.id}`, data),
        //! success
        //! اگر عملیات ما موفقیت امیز بود این تابع اجرا میشود.
        onSuccess: (data, variable, context) => {
            console.log("data : ", data);
            console.log("variable : ", variable);
            console.log("context : ", context);
            //! بروزرسانی صفحه با استفاده از نامعتبر کردن کلید
            // client.invalidateQueries({ queryKey: ["Contacts", variable.id] });
            //! بروزرسانی صفحه با استفاده از اضافه کردن مقدار جدید به صفحه
            client.setQueryData(["Contacts", variable.id], variable);
            //! گرفتن دیتای درون کش
            const get = client.getQueriesData();
        },
        //! error
        //! اگر عملیات ما موفقیت امیز نبود و خطا رخ داد این تابع اجرا میشود.
        onError: (err) => {
            console.log(err);
        },
        //! settled
        //! این تابع همیشه چه عملیات ما موفقیت امیز باشد چه نباشد اجرا میشود.
        onSettled: (data) => {
            console.log(data);
        },
        //! mutate
        onMutate: (data) => {
            console.log(data);
        },
    });
    return { mutateAsync };
}
