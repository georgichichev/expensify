import { Button, Drawer, Group, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AddMovementFormProps } from "./types";
import React from "react";
import { DatePicker } from "@mantine/dates";

const AddExpenseDrawer = ({ drawerVisibility, handleDrawerClose }) => {
    const form = useForm<AddMovementFormProps>({
        initialValues: {
            movementType: "expense",
            day: new Date(),
            amount: 0,
            expenseType: "food",
        },
    });

    return (
        <>
            <Drawer
                opened={drawerVisibility}
                onClose={handleDrawerClose}
                title="Register"
                padding="xl"
                size="xl"
            >
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Select
                        required
                        label="Movement type"
                        placeholder="Pick one"
                        data={[
                            { value: "expense", label: "Expense" },
                            { value: "income", label: "Income" },
                        ]}
                        {...form.getInputProps("movementType")}
                    />
                    <Select
                        required
                        label="Movement type"
                        placeholder="Pick one"
                        data={[
                            { value: "expense", label: "Expense" },
                            { value: "income", label: "Income" },
                        ]}
                        {...form.getInputProps("movementType")}
                    />
                    <DatePicker
                        placeholder="Pick date"
                        label="Movement date"
                        withAsterisk
                        {...form.getInputProps("day")}
                    />
                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Drawer>
        </>
    );
};

export default AddExpenseDrawer;
