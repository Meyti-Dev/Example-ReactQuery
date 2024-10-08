import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function getContacts(key) {
    //! useQuery -------------------------------------------------------------------------

    const { data } = useQuery({
        // enabled
        enabled: key === "courses" ? false : true,
        // keys
        queryKey: [key],
        // fetcher function
        queryFn: async ({ queryKey }) => {
            const response = await axios.get(
                `http://localhost:4000/${queryKey[0]}`
            );
            const data = response.data;
            console.log("Fetching...");
            return data;
        },
        // transform data
        select: (data) => data.map((user) => user.id),
    });

    //! useQueries -----------------------------------------------------------------------
    //! برای اینکه زمانی که بخواهیم هر کدام از کاربران را بروز یا حذف کنیم. این کار را میکنیم تا کلید همان کاربر را فقط اعتبار سنجی کنیم نه همه ی کاربران را

    const get = useQueries({
        queries: data
            ? data?.map((id) => {
                  return {
                      queryKey: ["Contacts", id],
                      queryFn: async () => {
                          const response = await axios.get(
                              `http://localhost:4000/contacts/${id}`
                          );
                          return response.data;
                      },
                  };
              })
            : [],
        combine: (results) => [...results?.map((result) => result.data)],
    });

    console.log("queries : ", get);
    return { get };
}
