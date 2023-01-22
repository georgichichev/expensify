import { ActionIcon, Table } from "@mantine/core";
import { deleteItem } from "../../../api/api";
import {
    IconPigMoney,
    IconReport,
    IconScissors,
    IconTrash,
    IconWoman,
} from "@tabler/icons";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { showNotification } from "@mantine/notifications";
import { rejectNotification, successNotification, Td, Th } from "../components";
import { workTypeKeys } from "../../AddWorkDrawer/types";

export function WorkTable({ dayData, day, month }) {
    const dayKeys = Object.keys(dayData);
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation(deleteItem, {
        onSuccess: () => {
            showNotification(successNotification);
        },
        onError: () => showNotification(rejectNotification),
        onSettled: () => queryClient.invalidateQueries("work"),
    });

    return (
        <Table fontSize={13} horizontalSpacing={10}>
            <thead>
                <tr>
                    <Th>
                        <IconWoman size={15} color="pink" />
                    </Th>
                    <Th>
                        <IconScissors size={15} color="pink" />
                    </Th>
                    <Th>
                        <IconReport size={15} color="pink" />
                    </Th>
                    <Th>
                        <IconPigMoney size={15} color="pink" />
                    </Th>
                    <Th />
                </tr>
            </thead>
            <tbody>
                {dayKeys.map((key) => {
                    return (
                        <tr key={key}>
                            <Td>{dayData[key].client}</Td>
                            <Td>{workTypeKeys[dayData[key].workType]}</Td>
                            <Td>{`${dayData[key].amount} лв`}</Td>
                            <Td>{`${dayData[key].tip} лв`}</Td>
                            <Td>
                                <ActionIcon
                                    onClick={() =>
                                        mutate({
                                            month,
                                            day,
                                            id: key,
                                            dataType: "work",
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
