import axios from "axios";

const FIREBASE_URI =
    "https://expensify-44a40-default-rtdb.europe-west1.firebasedatabase.app/data";

export const getData = async () => {
    const data = await axios.get(`${FIREBASE_URI}.json`);

    return data.data;
};
