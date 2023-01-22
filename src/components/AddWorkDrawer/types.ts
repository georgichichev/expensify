export type WorkType = "cut" | "color" | "blow-dry";

export type AddWorkFormProps = {
    client: string;
    day: Date;
    workType: WorkType;
    amount: number;
    tip: number;
};

export const workTypesSelectData = [
    { value: "cut", label: "Подстригване" },
    { value: "color", label: "Боядисване" },
    { value: "blowDry", label: "Изсушаване" },
];
