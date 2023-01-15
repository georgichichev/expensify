import React from "react";
import { Button } from "@mantine/core";
import { useState } from "react";
import AddExpenseDrawer from "../components/AddExpenseDrawer/AddExpenseDrawer";
import DropdownData from "../components/Dropdown/Dropdown";

const LifeView = () => {
    const [drawerVisibility, setdrawerVisibility] = useState(false);

    const handleDrawerOpen = () => setdrawerVisibility(true);
    const handleDrawerClose = () => setdrawerVisibility(false);

    return (
        <>
            <Button variant="outline" fullWidth onClick={handleDrawerOpen}>
                Add Expense
            </Button>
            <DropdownData />
            <AddExpenseDrawer
                drawerVisibility={drawerVisibility}
                handleDrawerClose={handleDrawerClose}
            />
        </>
    );
};

export default LifeView;
