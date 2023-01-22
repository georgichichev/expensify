import React from "react";
import { Button, Center } from "@mantine/core";
import AddExpenseDrawer from "../components/AddExpenseDrawer/AddExpenseDrawer";
import DropdownData from "../components/Dropdown/Dropdown";
import { useQuery } from "react-query";
import { getLifeData } from "../api/api";
import { useToggle } from "@mantine/hooks";
import { Loader } from "@mantine/core";

const LifeView = () => {
    const [value, toggle] = useToggle();

    const { data, isLoading, isSuccess } = useQuery("life", getLifeData, {
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Button variant="outline" fullWidth onClick={() => toggle()}>
                Добави разход
            </Button>
            {isLoading && (
                <Center w="100%" pt={200}>
                    <Loader m="auto" color="pink" />
                </Center>
            )}
            {isSuccess && <DropdownData dataType="life" data={data} />}
            <AddExpenseDrawer
                drawerVisibility={value}
                handleDrawerClose={toggle}
            />
        </>
    );
};

export default LifeView;
