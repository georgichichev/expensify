import { useState } from "react";
import { createStyles, Table, ScrollArea } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    header: {
        position: "sticky",
        top: 0,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        transition: "box-shadow 150ms ease",

        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[3]
                    : theme.colors.gray[2]
            }`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export function DataTable({ data }) {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row) => (
        <tr key={row.day}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.company}</td>
        </tr>
    ));

    return (
        <ScrollArea
            sx={{ height: 300 }}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
            <Table>
                <thead
                    className={cx(classes.header, {
                        [classes.scrolled]: scrolled,
                    })}
                >
                    <tr>
                        <th>Day</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}
