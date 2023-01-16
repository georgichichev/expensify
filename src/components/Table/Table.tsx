import { Table } from "@mantine/core";
import {
    IconArrowDownCircle,
    IconArrowUpCircle,
    // IconTrash,
} from "@tabler/icons";
import React from "react";

export function DataTable({ dayData }) {
    const dayKeys = Object.keys(dayData);

    return (
        <Table>
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>Expense</th>
                    <th style={{ textAlign: "center" }}>Amount</th>
                    <th style={{ textAlign: "center" }}>Movement</th>
                </tr>
            </thead>
            <tbody>
                {dayKeys.map((key) => {
                    return (
                        <tr key={key}>
                            <td style={{ textAlign: "center" }}>
                                {dayData[key].expenseType}
                            </td>
                            <td
                                style={{ textAlign: "center" }}
                            >{`${dayData[key].amount} лв`}</td>
                            <td style={{ textAlign: "center" }}>
                                {dayData[key].movementType === "income" ? (
                                    <IconArrowUpCircle color="green" />
                                ) : (
                                    <IconArrowDownCircle color="red" />
                                )}
                            </td>
                            {/* <td style={{ textAlign: "center" }}>
                                <ActionIcon style={{ alignSelf: "center" }}>
                                    <IconTrash />
                                </ActionIcon>
                            </td> */}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
