import {
    Flex,
    Button,
    Drawer,
    Select,
    NumberInput,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { DatePicker } from "@mantine/dates";
import { addWork } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";
import "dayjs/locale/bg";
import {
    IconCalendar,
    IconCheck,
    IconCoin,
    IconPigMoney,
    IconReportMoney,
    IconWoman,
    IconX,
} from "@tabler/icons";
import { showNotification } from "@mantine/notifications";
import { AddWorkFormProps, workTypesSelectData } from "./types";

const successNotification = {
    title: "Успешно добавяне",
    message: "Продължавай все така!",
    color: "teal",
    icon: <IconCheck />,
};

const rejectNotification = {
    title: "Нещо ce обърка :(",
    message: "Покажи ми като се прибереш, за да го оправя :)",
    color: "red",
    icon: <IconX />,
};

const AddWorkDrawer = ({ drawerVisibility, handleDrawerClose }) => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(addWork, {
        onSuccess: () => {
            showNotification(successNotification);
            form.reset();
        },
        onError: () => showNotification(rejectNotification),
        onSettled: () => queryClient.invalidateQueries("work"),
    });

    const form = useForm<AddWorkFormProps>({
        initialValues: {
            client: "",
            workType: "cut",
            day: new Date(),
            amount: 1,
            tip: 0,
        },
        validate: {
            amount: (value) =>
                value <= 0 ? "Стойността трябва да е по-голяма от 0." : null,
            tip: (value) =>
                value < 0 ? "Бакшишът не може да е по-малък от  0." : null,
            client: (value) => value === "" && "Въведи име на клиент.",
        },
    });

    return (
        <>
            <Drawer
                opened={drawerVisibility}
                onClose={handleDrawerClose}
                title="Добави процедура"
                padding="xl"
                size="xl"
            >
                <form onSubmit={form.onSubmit((values) => mutate(values))}>
                    <Flex direction="column" gap={20}>
                        <TextInput
                            required
                            label="Име на клиент"
                            placeholder="Твоят клиент"
                            size="md"
                            icon={<IconWoman />}
                            {...form.getInputProps("client")}
                        />
                        <Select
                            required
                            label="Вид процедура"
                            placeholder="Избери едно"
                            size="md"
                            transition="slide-right"
                            transitionDuration={180}
                            transitionTimingFunction="ease"
                            icon={<IconReportMoney />}
                            data={workTypesSelectData}
                            {...form.getInputProps("workType")}
                        />
                        <DatePicker
                            placeholder="Избери дата"
                            label="Дата на процедура"
                            dropdownType="modal"
                            locale="bg"
                            size="md"
                            icon={<IconCalendar />}
                            withAsterisk
                            {...form.getInputProps("day")}
                        />
                        <NumberInput
                            placeholder="Добави стойност"
                            precision={2}
                            step={0.1}
                            label="Стойност"
                            withAsterisk
                            icon={<IconCoin />}
                            size="md"
                            {...form.getInputProps("amount")}
                        />
                        <NumberInput
                            placeholder="Добави бакшиш"
                            precision={2}
                            step={0.1}
                            label="Бакшиш"
                            withAsterisk
                            icon={<IconPigMoney />}
                            size="md"
                            {...form.getInputProps("tip")}
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

export default AddWorkDrawer;
