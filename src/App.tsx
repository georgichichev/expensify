import React from "react";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
    const queryClient = new QueryClient();

    return (
        <MantineProvider theme={theme} withGlobalStyles>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </MantineProvider>
    );
}

export default App;
