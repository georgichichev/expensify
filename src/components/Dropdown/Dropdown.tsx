import { Accordion, Box, Text } from "@mantine/core";
import React from "react";
import { DataTable } from "../Table/Table";

const DropdownData = ({ data }) => {
    if (!data) {
        return (
            <Text size="xl" ta="center">
                No data
            </Text>
        );
    }

    const months = Object.keys(data);
    return (
        <Box pt={10}>
            <Accordion defaultValue={""}>
                {months.map((month) => {
                    return (
                        <Accordion.Item key={month} value={month}>
                            <Accordion.Control>{month}</Accordion.Control>
                            <Accordion.Panel>
                                <Accordion defaultValue={""}>
                                    {Object.keys(data[month]).map((day) => {
                                        return (
                                            <Accordion.Item
                                                key={day}
                                                value={day}
                                            >
                                                <Accordion.Control>
                                                    {day}
                                                </Accordion.Control>
                                                <Accordion.Panel>
                                                    <DataTable
                                                        dayData={
                                                            data[month][day]
                                                        }
                                                    />
                                                </Accordion.Panel>
                                            </Accordion.Item>
                                        );
                                    })}
                                </Accordion>
                            </Accordion.Panel>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </Box>
    );
};

export default DropdownData;
