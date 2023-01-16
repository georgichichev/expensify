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
import {
    IconCalendar,
    IconChecklist,
    IconCoin,
    IconReportMoney,
} from "@tabler/icons";
import { showNotification } from "@mantine/notifications";

const successNotification = {
    title: "Successful addition",
    message: "You successfully added a new money movement!",
    color: "green",
};

const rejectNotification = {
    title: "Unsuccessful addition",
    message: "Something went wrong!",
    color: "red",
};

const AddExpenseDrawer = ({ drawerVisibility, handleDrawerClose }) => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(addMovement, {
        onSuccess: () => {
            showNotification(successNotification);
            form.reset();
        },
        onError: () => showNotification(rejectNotification),
        onSettled: () => queryClient.invalidateQueries("data"),
    });

    const form = useForm<AddMovementFormProps>({
        initialValues: {
            movementType: "expense",
            day: new Date(),
            amount: 1,
            expenseType: "",
        },
        validate: {
            amount: (value) =>
                value <= 0 ? "Amount must be more than 0." : null,
            expenseType: (value) =>
                value === "" ? "Expense type cannot be empty." : null,
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
                            size="md"
                            transition="slide-right"
                            transitionDuration={180}
                            transitionTimingFunction="ease"
                            icon={<IconReportMoney />}
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
                            size="md"
                            transition="slide-right"
                            transitionDuration={180}
                            transitionTimingFunction="ease"
                            icon={<IconChecklist />}
                            maxDropdownHeight={215}
                            dropdownComponent="div"
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
                            size="md"
                            icon={<IconCalendar />}
                            withAsterisk
                            {...form.getInputProps("day")}
                        />
                        <NumberInput
                            placeholder="Enter amount"
                            precision={2}
                            label="Amount"
                            withAsterisk
                            icon={<IconCoin />}
                            size="md"
                            {...form.getInputProps("amount")}
                        />
                        <Button loading={isLoading} type="submit">
                            Submit
                        </Button>
                    </Flex>
                </form>
            </Drawer>
        </>
    );
};

export default AddExpenseDrawer;
