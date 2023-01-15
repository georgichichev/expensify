import { Flex, Button, Drawer, Select, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
    AddMovementFormProps,
    expenseTypesSelectData,
    incomeTypesSelectData,
} from "./types";
import React from "react";
import { DatePicker } from "@mantine/dates";
import { addMovement } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";

const AddExpenseDrawer = ({ drawerVisibility, handleDrawerClose }) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(addMovement, {
        onSettled: () => queryClient.invalidateQueries("data"),
    });

    const form = useForm<AddMovementFormProps>({
        initialValues: {
            movementType: "expense",
            day: new Date(),
            amount: 1,
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
                <form onSubmit={form.onSubmit((values) => mutate(values))}>
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
                            dropdownType="modal"
                            withAsterisk
                            {...form.getInputProps("day")}
                        />
                        <NumberInput
                            placeholder="Enter amount"
                            label="Amount"
                            {...form.getInputProps("amount")}
                        />
                        <Button type="submit">Submit</Button>
                    </Flex>
                </form>
            </Drawer>
        </>
    );
};

export default AddExpenseDrawer;
