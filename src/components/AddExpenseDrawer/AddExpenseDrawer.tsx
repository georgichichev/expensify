import { Flex, Button, Drawer, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
    AddMovementFormProps,
    expenseTypesSelectData,
    incomeTypesSelectData,
} from "./types";
import React from "react";
import { DatePicker } from "@mantine/dates";

const AddExpenseDrawer = ({ drawerVisibility, handleDrawerClose }) => {
    const form = useForm<AddMovementFormProps>({
        initialValues: {
            movementType: "expense",
            day: new Date(),
            amount: 0,
            expenseType: "",
        },
    });

    return (
        <>
            <Drawer
                opened={drawerVisibility}
                onClose={handleDrawerClose}
                title="Add movement"
                padding="xl"
                size="xl"
            >
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Flex direction="column" gap={20}>
                        <Select
                            required
                            label="Movement type"
                            placeholder="Pick one"
                            data={[
                                { value: "expense", label: "Expense" },
                                { value: "income", label: "Income" },
                            ]}
                            onChange={(e) => {
                                form.getInputProps("movementType").onChange(e);
                                form.setFieldValue("expenseType", "");
                            }}
                            value={form.getInputProps("movementType").value}
                        />
                        <Select
                            required
                            label="Expense type"
                            placeholder="Pick one"
                            data={
                                form.values.movementType === "expense"
                                    ? expenseTypesSelectData
                                    : incomeTypesSelectData
                            }
                            {...form.getInputProps("expenseType")}
                        />
                        <DatePicker
                            placeholder="Pick date"
                            label="Movement date"
                            withAsterisk
                            {...form.getInputProps("day")}
                        />
                        <Button type="submit">Submit</Button>
                    </Flex>
                </form>
            </Drawer>
        </>
    );
};

export default AddExpenseDrawer;
