export const monthConverter = (month: string) => {
    switch (month) {
        case "January":
            return 0;
        case "February":
            return 1;
        case "March":
            return 2;
        case "April":
            return 3;
        case "May":
            return 4;
        case "June":
            return 5;
        case "July":
            return 6;
        case "August":
            return 7;
        case "September":
            return 8;
        case "October":
            return 9;
        case "November":
            return 10;
        case "December":
            return 11;
        default:
            return 0;
    }
};

export const dayNameExtractor = (day: string, month: string) => {
    const monthValue = monthConverter(month);

    const dayWithName = new Date(
        2023,
        monthValue,
        Number(day)
    ).toLocaleDateString("bg-BG", {
        day: "numeric",
        weekday: "long",
    });

    return dayWithName;
};
