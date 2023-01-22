import { IconCheck, IconX } from "@tabler/icons";
import React, { PropsWithChildren } from "react";

export const Th = ({ children }: PropsWithChildren) => {
    return <th style={{ textAlign: "center" }}>{children}</th>;
};

export const Td = ({ children }: PropsWithChildren) => {
    return <td style={{ textAlign: "center" }}>{children}</td>;
};

export const TrLife = () => {
    return (
        <tr>
            <Th>Вид</Th>
            <Th>Стойност</Th>
            <Th>Тип</Th>
            <Th />
        </tr>
    );
};

export const TrWork = () => {
    return (
        <tr>
            <Th>Клиент</Th>
            <Th>Процедура</Th>
            <Th>Стойност</Th>
            <Th>Бакшиш</Th>
            <Th />
        </tr>
    );
};

export const successNotification = {
    message: "Успешно изтриване!",
    color: "teal",
    icon: <IconCheck />,
};

export const rejectNotification = {
    title: "Нещо се обърка :(",
    message: "Кажи ми, като се прибереш, за да го оправя :)",
    color: "red",
    icon: <IconX />,
};
