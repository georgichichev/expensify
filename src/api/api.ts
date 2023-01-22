import { AddMovementFormProps } from "@server/components/AddExpenseDrawer/types";
import axios from "axios";
import { DeleteMovementProps } from "./types";

const FIREBASE_URI =
    "https://expensify-44a40-default-rtdb.europe-west1.firebasedatabase.app";

export const getLifeData = async () => {
    const data = await axios.get(`${FIREBASE_URI}/life.json`);

    return data.data;
};

export const addMovement = async (movement: AddMovementFormProps) => {
    const date = new Date(movement.day);

    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", {
        month: "long",
    });

    const data = await axios.post(`${FIREBASE_URI}/life/${month}/${day}.json`, {
        movementType: movement.movementType,
        expenseType: movement.expenseType,
        amount: movement.amount,
    });

    return data.data;
};

export const deleteMovement = async ({
    month,
    day,
    id,
}: DeleteMovementProps) => {
    await axios.delete(`${FIREBASE_URI}/life/${month}/${day}/${id}.json`);

    return null;
};
