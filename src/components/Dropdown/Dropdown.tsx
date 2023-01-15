import { Accordion } from "@mantine/core";
import React from "react";
import { DataTable } from "../Table/Table";

const mock = [
    {
        day: "15 Jan 2023",
        type: "Food",
        amount: "12 BGN",
    },
    {
        day: "13 Jan 2023",
        type: "Food",
        amount: "12 BGN",
    },
    {
        day: "12 Jan 2023",
        type: "Food",
        amount: "12 BGN",
    },
];

const DropdownData = () => {
    return (
        <Accordion defaultValue={mock[0].day}>
            {mock.map((day) => {
                return (
                    <Accordion.Item key={day.day} value={day.day}>
                        <Accordion.Control>{day.day}</Accordion.Control>
                        <Accordion.Panel>
                            <DataTable row={day} />
                        </Accordion.Panel>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};

export default DropdownData;
