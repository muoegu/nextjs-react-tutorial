"use client";

import { Title, NumberInput, Text, Container } from "@mantine/core";
import { useState } from "react";

const GymClient = () => {
    const [value, setValue] = useState<number>(1);
    const month_fee = 1299;
    const month_fee_JPY = (month_fee * 4.872).toFixed(1);
    const per_day = (month_fee / value / 2).toFixed(1); // `toFixed`で文字列になる
    const per_day_JPY = (parseFloat(per_day) * 4.872).toFixed(1); // 数値に変換してから再計算

    return (
        <Container px={0} size="70%">
            <Title m={20}>World Gym Calculator</Title>
            <NumberInput
                label="How many times did you go to the gym this month?"
                value={value}
                onChange={(val) => setValue(typeof val === 'number' && val > 0 ? val : 1)} // 型ガード
                min={1} // 値が1未満にならないように設定           
            />
            <Text mt={20}>Month Fee: TWD {month_fee.toLocaleString()}</Text>
            <Text>JPY ≒ ¥{month_fee_JPY}</Text>
            <Text>Estimated price per day: TWD {per_day}</Text>
            <Text>JPY ≒ ¥{per_day_JPY}</Text>
            <Text mt={20}>サウナ1回使用量 ¥{per_day_JPY}</Text>
            <Text>ジム1回使用量 ¥{per_day_JPY}</Text>
        </Container>
    );
}

export default GymClient;
