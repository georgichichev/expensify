import React from "react";
import { Button, Loader } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useQuery } from "react-query";
import DropdownData from "../components/Dropdown/Dropdown";
import AddWorkDrawer from "../components/AddWorkDrawer/AddWorkDrawer";
import { getWorkData } from "../api/api";
import { Center } from "@mantine/core";

const WorkView = () => {
    const [value, toggle] = useToggle();

    const { data, isLoading, isSuccess } = useQuery("work", getWorkData, {
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Button variant="outline" fullWidth onClick={() => toggle()}>
                Добави клиент
            </Button>
            {isLoading && (
                <Center w="100%" pt={200}>
                    <Loader m="auto" color="pink" />
                </Center>
            )}
            {isSuccess && <DropdownData dataType="work" data={data} />}
            <AddWorkDrawer
                drawerVisibility={value}
                handleDrawerClose={toggle}
            />
        </>
    );
};

export default WorkView;
