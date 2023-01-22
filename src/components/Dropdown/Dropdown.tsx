import { Accordion, Box, Text } from "@mantine/core";
import { dayNameExtractor } from "../../util/util";
import React from "react";
import { WorkTable } from "../Tables/WorkTable/WorkTable";
import { LifeTable } from "../Tables/LifeTable/LifeTable";

type DropDownProps = {
    data: object;
    dataType: "life" | "work";
};

const DropdownData = ({ data, dataType }: DropDownProps) => {
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
                                <Accordion defaultValue={null}>
                                    {Object.keys(data[month]).map((day) => {
                                        return (
                                            <Accordion.Item
                                                key={day}
                                                value={day}
                                            >
                                                <Accordion.Control>
                                                    {dayNameExtractor(
                                                        day,
                                                        month
                                                    )}
                                                </Accordion.Control>
                                                <Accordion.Panel>
                                                    {dataType === "work" ? (
                                                        <WorkTable
                                                            dayData={
                                                                data[month][day]
                                                            }
                                                            day={day}
                                                            month={month}
                                                        />
                                                    ) : (
                                                        <LifeTable
                                                            dayData={
                                                                data[month][day]
                                                            }
                                                            day={day}
                                                            month={month}
                                                        />
                                                    )}
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
