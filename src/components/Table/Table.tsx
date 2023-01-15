import { Table } from "@mantine/core";
import React from "react";

export function DataTable({ dayData }) {
    const dayKeys = Object.keys(dayData);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {dayKeys.map((key) => {
                    return (
                        <tr key={key}>
                            <td>{dayData[key].expenseType}</td>
                            <td>{dayData[key].amount}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
