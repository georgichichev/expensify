import { Accordion, Box } from "@mantine/core";
import { db } from "../../index";
import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import React, { useEffect } from "react";
import { DataTable } from "../Table/Table";

const mock = [
    {
        day: "12 Jan",
        type: "asd",
        amount: 123,
    },
];

const DropdownData = () => {
    const citiesRef = collection(db, "days");

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "days"));
        const data = querySnapshot.docs.map((doc) => doc.data());

        console.log(data);
    };

    getData();
    return (
        <Box pt={10}>
            <Accordion defaultValue={""}>
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
        </Box>
    );
};

export default DropdownData;
