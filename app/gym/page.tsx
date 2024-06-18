"use client";

import { Title, NumberInput, Text } from "@mantine/core";
import { useState } from "react";

const GymClient = () => {
    const [value, setValue] = useState<number>(1);
    const month_fee = 1299;
    const per_day = month_fee / value / 2;
    const price_JPY = per_day * 4.872;

    return (
        <>
            <Title m={20}>World Gym Calculator</Title>
            <NumberInput
                label="How many times did you go to the gym this month?"
                value={value}
                onChange={(val) => setValue(val)}
            />
            <Text>Month Fee: {month_fee.toLocaleString()}</Text>
            <Text>Estimated price per day:{per_day}</Text>
            <Text>JPY ≒ ￥{price_JPY}</Text>
        </>
    );
}

export default GymClient;
