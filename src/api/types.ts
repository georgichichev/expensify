export type GetDataProps = {
    month: string;
    day: string;
};

export type DeleteItemProps = {
    day: string;
    month: string;
    id: string;
    dataType: "work" | "life";
};
