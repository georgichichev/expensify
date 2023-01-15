import React from "react";
import { Container, MantineProvider } from "@mantine/core";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
    return (
        <MantineProvider
            theme={{ colorScheme: "dark", primaryColor: "teal" }}
            withGlobalStyles
        >
            <Container>
                <AppRouter />
            </Container>
        </MantineProvider>
    );
}

export default App;
