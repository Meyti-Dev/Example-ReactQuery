// import { useQueries } from "@tanstack/react-query";
// import axios from "axios";

// export default function getContacts(key) {
//     // useQuery
//     const { data } = useQueries({
//         queries: ()
//         // enabled
//         enabled: key === "courses" ? false : true,
//         // keys
//         queryKey: [key],
//         // fetcher function
//         queryFn: async ({ queryKey }) => {
//             const response = await axios.get(
//                 `http://localhost:4000/${queryKey[0]}`
//             );
//             const data = response.data;
//             console.log("Fetching...");
//             return data;
//         },
//         // transform data
//         select: (data) => data,
//     });
//     return { data };
// }
