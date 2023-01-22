import React from "react";
import { Button, Text } from "@mantine/core";
import AddExpenseDrawer from "../components/AddExpenseDrawer/AddExpenseDrawer";
import DropdownData from "../components/Dropdown/Dropdown";
import { useQuery } from "react-query";
import { getLifeData } from "../api/api";
import { useToggle } from "@mantine/hooks";

const LifeView = () => {
    const [value, toggle] = useToggle();

    const { data, isLoading, isSuccess } = useQuery("life", getLifeData, {
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Button variant="outline" fullWidth onClick={() => toggle()}>
                Add Expense
            </Button>
            {isLoading && (
                <Text size="xl" ta="center">
                    Loading...
                </Text>
            )}
            {isSuccess && <DropdownData data={data} />}
            <AddExpenseDrawer
                drawerVisibility={value}
                handleDrawerClose={toggle}
            />
        </>
    );
};

export default LifeView;
