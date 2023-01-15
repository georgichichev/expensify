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
    | "custom";

export type IncomeType = "salary" | "mama" | "vouchers" | "tip";

export type AddMovementFormProps = {
    day: Date;
    movementType: MovementType;
    expenseType: ExpenseType | IncomeType;
    amount: number;
};

export const expenseTypesSelectData = [
    { value: "food", label: "Food" },
    { value: "cosmetics", label: "Cosmetics" },
    { value: "restaurant", label: "Restaurant" },
    { value: "clothes", label: "Clothes" },
    { value: "medicine", label: "Medicine" },
    { value: "fuel", label: "Fuel" },
    { value: "car", label: "Car" },
    { value: "taxes", label: "Taxes" },
    { value: "goingOut", label: "Going out" },
    { value: "custom", label: "Custom" },
];

export const incomeTypesSelectData = [
    { value: "salary", label: "Salary" },
    { value: "mama", label: "Mama" },
    { value: "vouchers", label: "Vouchers" },
    { value: "tip", label: "Tip" },
];
