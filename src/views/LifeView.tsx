import React from "react";
import { Box, Button } from "@mantine/core";
import { useState } from "react";
import AddExpenseDrawer from "../components/AddExpenseDrawer/AddExpenseDrawer";
import DropdownData from "../components/Dropdown/Dropdown";

const LifeView = () => {
    const [drawerVisibility, setdrawerVisibility] = useState(false);

    const handleDrawerOpen = () => setdrawerVisibility(true);
    const handleDrawerClose = () => setdrawerVisibility(false);

    return (
        <>
            <Box pt={10}>
                <Button variant="outline" fullWidth onClick={handleDrawerOpen}>
                    Add Expense
                </Button>
            </Box>
            <DropdownData />
            <AddExpenseDrawer
                drawerVisibility={drawerVisibility}
                handleDrawerClose={handleDrawerClose}
            />
        </>
    );
};

export default LifeView;
