import axios from "axios";

const FIREBASE_URI =
    "https://expensify-44a40-default-rtdb.europe-west1.firebasedatabase.app/data";

export const getData = async () => {
    const data = await axios.get(`${FIREBASE_URI}.json`);

    return data.data;
};

export const addMovement = async (movement) => {
    const date = new Date(movement.day);

    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", {
        month: "long",
    });

    const data = await axios.post(`${FIREBASE_URI}/${month}/${day}.json`, {
        movementType: movement.movementType,
        expenseType: movement.expenseType,
        amount: movement.amount,
    });

    return data.data;
};
