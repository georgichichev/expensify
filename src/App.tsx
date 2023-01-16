import React from "react";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
    const queryClient = new QueryClient();

    return (
        <MantineProvider theme={theme} withGlobalStyles>
            <QueryClientProvider client={queryClient}>
                <NotificationsProvider position="bottom-center">
                    <AppRouter />
                    <ReactQueryDevtools initialIsOpen={false} />
                </NotificationsProvider>
            </QueryClientProvider>
        </MantineProvider>
    );
}

export default App;
