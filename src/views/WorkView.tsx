import React from "react";
import { Button, Text } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useQuery } from "react-query";
import DropdownData from "../components/Dropdown/Dropdown";
import AddWorkDrawer from "../components/AddWorkDrawer/AddWorkDrawer";
import { getWorkData } from "../api/api";

const WorkView = () => {
    const [value, toggle] = useToggle();

    const { data, isLoading, isSuccess } = useQuery("work", getWorkData, {
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Button variant="outline" fullWidth onClick={() => toggle()}>
                Add Work
            </Button>
            {isLoading && (
                <Text size="xl" ta="center">
                    Loading...
                </Text>
            )}
            {isSuccess && <DropdownData data={data} />}
            <AddWorkDrawer
                drawerVisibility={value}
                handleDrawerClose={toggle}
            />
        </>
    );
};

export default WorkView;
