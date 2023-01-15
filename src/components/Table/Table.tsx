import { Table } from "@mantine/core";
import React from "react";

export function DataTable({ row }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Type</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr key={row.day}>
                    <td>{row.day}</td>
                    <td>{row.type}</td>
                    <td>{row.amount}</td>
                </tr>
            </tbody>
        </Table>
    );
}
