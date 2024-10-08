"use client";
// dependencies
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// component
export default function Provider({ children }) {
    // react-query config
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnReconnect: true,
                refetchInterval: false,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry: 3,
                retryDelay: false,
                staleTime: Infinity,
                gcTime: Infinity, // cacheTime = gcTime
            },
            mutations: {},
        },
    });
    // provider for application
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
