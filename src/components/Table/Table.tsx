import { ActionIcon, Table } from "@mantine/core";
import { deleteMovement } from "../../api/api";
import {
    IconArrowDownCircle,
    IconArrowUpCircle,
    IconTrash,
} from "@tabler/icons";
import React, { PropsWithChildren } from "react";
import { useMutation, useQueryClient } from "react-query";
import { showNotification } from "@mantine/notifications";

const Th = ({ children }: PropsWithChildren) => {
    return <th style={{ textAlign: "center" }}>{children}</th>;
};

const Td = ({ children }: PropsWithChildren) => {
    return <td style={{ textAlign: "center" }}>{children}</td>;
};

const successNotification = {
    title: "Successful delete",
    message: "You successfully deleted a movement!",
    color: "green",
};

const rejectNotification = {
    title: "Unsuccessful delete",
    message: "Something went wrong!",
    color: "red",
};

export function DataTable({ dayData, day, month }) {
    const dayKeys = Object.keys(dayData);
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation(deleteMovement, {
        onSuccess: () => {
            showNotification(successNotification);
        },
        onError: () => showNotification(rejectNotification),
        onSettled: () => queryClient.invalidateQueries("data"),
    });

    return (
        <Table>
            <thead>
                <tr>
                    <Th>Expense</Th>
                    <Th>Amount</Th>
                    <Th>Movement</Th>
                    <Th />
                </tr>
            </thead>
            <tbody>
                {dayKeys.map((key) => {
                    return (
                        <tr key={key}>
                            <Td>{dayData[key].expenseType}</Td>
                            <Td>{`${dayData[key].amount} лв`}</Td>
                            <Td>
                                {dayData[key].movementType === "income" ? (
                                    <IconArrowUpCircle color="green" />
                                ) : (
                                    <IconArrowDownCircle color="red" />
                                )}
                            </Td>
                            <Td>
                                <ActionIcon
                                    onClick={() =>
                                        mutate({ month, day, id: key })
                                    }
                                    loading={isLoading}
                                    style={{ alignSelf: "center" }}
                                >
                                    <IconTrash />
                                </ActionIcon>
                            </Td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
