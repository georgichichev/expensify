export type MovementType = "expense" | "income";

export type ExpenseType =
    | "food"
    | "cosmetics"
    | "restaurant"
    | "clothes"
    | "medicine"
    | "fuel"
    | "car"
    | "taxes"
    | "goingOut"
    | "";

export type IncomeType = "salary" | "mama" | "vouchers" | "tip" | "";

export type AddMovementFormProps = {
    day: Date;
    movementType: MovementType;
    expenseType: ExpenseType | IncomeType;
    amount: number;
};

export const expenseTypesSelectData = [
    { value: "food", label: "Храна" },
    { value: "restaurant", label: "Ресторант" },
    { value: "clothes", label: "Дрехи" },
    { value: "fuel", label: "Гориво" },
    { value: "cosmetics", label: "Козметика" },
    { value: "medicine", label: "Лекарства" },
    { value: "car", label: "Кола" },
    { value: "taxes", label: "Сметки" },
    { value: "goingOut", label: "Излизанка" },
];

export const incomeTypesSelectData = [
    { value: "salary", label: "Заплата" },
    { value: "mama", label: "От мама" },
    { value: "vouchers", label: "Ваучери" },
    { value: "tip", label: "Бакшиш" },
];

export const expenseTypeKeys = {
    food: "Храна",
    cosmetics: "Козметика",
    restaurant: "Ресторант",
    clothes: "Дрехи",
    medicine: "Лекарства",
    fuel: "Гориво",
    car: "Кола",
    taxes: "Сметки",
    goingOut: "Излизанка",
    salary: "Заплата",
    mama: "От мама",
    vouchers: "Ваучери",
    tip: "Бакшиш",
};
