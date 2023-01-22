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
    IconCheck,
    IconChecklist,
    IconCoin,
    IconReportMoney,
    IconX,
} from "@tabler/icons";
import "dayjs/locale/bg";
import { showNotification } from "@mantine/notifications";

const successNotification = {
    title: "Успешно добавяне",
    message: "Успешно добави ново движение.",
    color: "teal",
    icon: <IconCheck />,
};

const rejectNotification = {
    title: "Нещо се обърка :(",
    message: "Кажи ми, като се прибереш, за да го оправя :)",
    color: "red",
    icon: <IconX />,
};

const AddExpenseDrawer = ({ drawerVisibility, handleDrawerClose }) => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(addMovement, {
        onSuccess: () => {
            showNotification(successNotification);
            handleDrawerClose();
            form.reset();
        },
        onError: () => showNotification(rejectNotification),
        onSettled: () => queryClient.invalidateQueries("life"),
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
                value <= 0 ? "Стойността трябва да е повече от 0." : null,
            expenseType: (value) =>
                value === "" ? "Типът не може да е празен." : null,
        },
    });

    return (
        <>
            <Drawer
                opened={drawerVisibility}
                onClose={handleDrawerClose}
                title="Добави движение"
                padding="xl"
                size="xl"
            >
                <form onSubmit={form.onSubmit((values) => mutate(values))}>
                    <Flex direction="column" gap={20}>
                        <Select
                            required
                            label="Вид движение"
                            placeholder="Избери едно"
                            size="md"
                            transition="slide-right"
                            transitionDuration={180}
                            transitionTimingFunction="ease"
                            icon={<IconReportMoney />}
                            data={[
                                { value: "expense", label: "Разход" },
                                { value: "income", label: "Приход" },
                            ]}
                            onChange={(e) => {
                                form.getInputProps("movementType").onChange(e);
                                form.setFieldValue("expenseType", "");
                            }}
                            value={form.getInputProps("movementType").value}
                        />
                        <Select
                            required
                            label="Тип"
                            placeholder="Избери едно"
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
                            placeholder="Избери дата"
                            label="Дата на движение"
                            dropdownType="modal"
                            size="md"
                            locale="bg"
                            icon={<IconCalendar />}
                            withAsterisk
                            {...form.getInputProps("day")}
                        />
                        <NumberInput
                            placeholder="Добави стойност"
                            precision={2}
                            step={0.1}
                            decimalSeparator=","
                            label="Amount"
                            withAsterisk
                            icon={<IconCoin />}
                            size="md"
                            {...form.getInputProps("amount")}
                        />
                        <Button loading={isLoading} type="submit">
                            Добави
                        </Button>
                    </Flex>
                </form>
            </Drawer>
        </>
    );
};

export default AddExpenseDrawer;
