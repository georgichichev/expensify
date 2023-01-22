import { ActionIcon, Table } from "@mantine/core";
import { deleteItem } from "../../../api/api";
import {
    IconArrowDownCircle,
    IconArrowUpCircle,
    IconTrash,
} from "@tabler/icons";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { showNotification } from "@mantine/notifications";
import { rejectNotification, successNotification, Td, Th } from "../components";
import { expenseTypeKeys } from "../../AddExpenseDrawer/types";

export function LifeTable({ dayData, day, month }) {
    const dayKeys = Object.keys(dayData);
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation(deleteItem, {
        onSuccess: () => {
            showNotification(successNotification);
        },
        onError: () => showNotification(rejectNotification),
        onSettled: () => queryClient.invalidateQueries("life"),
    });

    return (
        <Table fontSize={13} horizontalSpacing={10}>
            <thead>
                <tr>
                    <Th>Вид</Th>
                    <Th>Стойност</Th>
                    <Th>Тип</Th>
                    <Th />
                </tr>
            </thead>
            <tbody>
                {dayKeys.map((key) => {
                    return (
                        <tr key={key}>
                            <Td>{expenseTypeKeys[dayData[key].expenseType]}</Td>
                            <Td>{`${dayData[key].amount} лв`}</Td>
                            <Td>
                                {dayData[key].movementType === "income" ? (
                                    <IconArrowUpCircle
                                        size={17}
                                        color="green"
                                    />
                                ) : (
                                    <IconArrowDownCircle
                                        size={17}
                                        color="red"
                                    />
                                )}
                            </Td>
                            <Td>
                                <ActionIcon
                                    onClick={() =>
                                        mutate({
                                            month,
                                            day,
                                            id: key,
                                            dataType: "life",
                                        })
                                    }
                                    loading={isLoading}
                                    style={{ alignSelf: "center" }}
                                >
                                    <IconTrash size={17} />
                                </ActionIcon>
                            </Td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
