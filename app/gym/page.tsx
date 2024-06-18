"use client";

import { Title, NumberInput, Text } from "@mantine/core";
import { useState } from "react";

const GymClient = () => {
    const [value, setValue] = useState<string | number>('1');
    const month_fee = 1299;
    console.log(value);
    const per_day = month_fee / value / 2;

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
        </>
    );
}

export default GymClient;
