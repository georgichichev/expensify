import { DataTable } from "../components/Table/Table";

const mock = [
    {
        day: "Dani",
        type: "yordana@gmail.com",
        amount: "Inspress",
    },
];

const LifeView = () => {
    return <DataTable data={mock} />;
};

export default LifeView;
