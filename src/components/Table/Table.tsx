import { Table } from "@mantine/core";
import { IconArrowDownCircle, IconArrowUpCircle } from "@tabler/icons";
import React, { PropsWithChildren } from "react";

const Th = ({ children }: PropsWithChildren) => {
  return <th style={{ textAlign: "center" }}>{children}</th>;
};

const Td = ({ children }: PropsWithChildren) => {
  return <td style={{ textAlign: "center" }}>{children}</td>;
};

export function DataTable({ dayData }) {
  const dayKeys = Object.keys(dayData);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Expense</Th>
          <Th>Amount</Th>
          <Th>Movement</Th>
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
